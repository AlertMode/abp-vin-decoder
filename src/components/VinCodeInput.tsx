import { useState } from "react";
import getDataByVIN from "../requests/getDataByVIN";
import {
  saveToLocalStorage,
  getFromLocalStorage,
  valueExistsInLocalStorage,
} from "../services/localStorageHandler";
import type { VinDataAllFieldsProps } from "../types/vin.type";
import StatusAdviser, { type StatusAdviserProps } from "./StatusAdviser";

const VIN_DATA_KEY = "VIN_DATA_ARCHIVE";

const Vin = (props: { onVinCodeUpdate: (vin: string) => void }) => {
  const [vinInput, setVinInput] = useState("");
  const [requestStatus, setRequestStatus] = useState<StatusAdviserProps | null>(
    null,
  );

  const isVINcode = (vin: string): boolean => {
    const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;
    return vinRegex.test(vin.toUpperCase());
  };

  const reqestVINdata = async (vin: string) => {
    try {
      const response = await getDataByVIN(vin);
      if (response && response.data) {
        const vinData: VinDataAllFieldsProps = response.data;
        if (vinData.Results) {
          const localStorageData = getFromLocalStorage(VIN_DATA_KEY);
          if (localStorageData && localStorageData.length > 0) {
            const existingVinData = JSON.parse(localStorageData);
            if (
              !valueExistsInLocalStorage(VIN_DATA_KEY, JSON.stringify(vinData))
            ) {
              const updatedVinData = [...existingVinData, vinData];
              saveToLocalStorage(VIN_DATA_KEY, JSON.stringify(updatedVinData));
            }
          } else {
            saveToLocalStorage(VIN_DATA_KEY, JSON.stringify([vinData]));
          }
          props.onVinCodeUpdate(vinData.SearchCriteria);
          setRequestStatus({
            message: vinData.Message || "VIN data fetched successfully.",
            success: true,
          });
          setVinInput("");
        }
        console.log(
          `Local Storage Updated: ${getFromLocalStorage(VIN_DATA_KEY)}`,
        );
      } else {
        setRequestStatus({
          message: "No data received from VIN API.",
          success: false,
        });
      }
    } catch (error) {
      console.error("ERROR >> reqestVINdata:", error);
      setRequestStatus({
        message: "Error fetching VIN data.",
        success: false,
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const form = event.currentTarget;
      const input = form.querySelector<HTMLInputElement>(".vin-input");
      if (!input) return;

      const vin = input.value.trim();

      if (isVINcode(vin)) {
        await reqestVINdata(vin);
      } else {
        setRequestStatus({
          message: "Invalid VIN code. Please enter a valid 17-character VIN.",
          success: false,
        });
      }
    } catch (error) {
      console.error("ERROR >> handleSubmit:", error);
      setRequestStatus({
        message: "An error occurred while processing the VIN code.",
        success: false,
      });
    }
  };

  return (
    <div className="vin-container">
      <form className="vin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter VIN"
          className="vin-input"
          value={vinInput}
          onChange={(e) => setVinInput(e.target.value)}
        />
        <button className="vin-submit">Submit</button>
      </form>
      {requestStatus && StatusAdviser(requestStatus)}
    </div>
  );
};
export default Vin;
