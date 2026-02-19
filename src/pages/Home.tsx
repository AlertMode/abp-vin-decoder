import { useEffect, useState } from "react";
import Vin from "../components/VinCodeInput";
import "../styles/index.scss";
import type { VinDataAllFieldsProps } from "../types/vin.type";
import VinCodeInfo from "../components/VinCodeInfo";
import { getFromLocalStorage } from "../services/localStorageHandler";

const Home = () => {
  const [vinCode, setVinCode] = useState("");
  const [vinCodeData, setVinCodeData] = useState<VinDataAllFieldsProps | null>(
    null,
  );

  useEffect(() => {
    if (vinCode) {
      const vinDataKey = "VIN_DATA_ARCHIVE";
      const localStorageData = getFromLocalStorage(vinDataKey);
      if (localStorageData) {
        const vinDataArray: VinDataAllFieldsProps[] =
          JSON.parse(localStorageData);
        const matchingVinData = vinDataArray.find((data) =>
          data.SearchCriteria.includes(vinCode),
        );
        if (matchingVinData) {
          setVinCodeData(matchingVinData);
        }
      }
    }
  }, [vinCode]);

  const handleVinCodeUpdate = (vin: string) => {
    setVinCode(vin);
    console.log(`VIN code updated in Home component: ${vin}`);
  };

  // TODO: Refacotr this function to be more efficient and avoid unnecessary localStorage access
  function extractVINInfo(vin: string) {
    const vinDataKey = "VIN_DATA_ARCHIVE";
    const localStorageData = getFromLocalStorage(vinDataKey);
    if (localStorageData) {
      const vinDataArray: VinDataAllFieldsProps[] =
        JSON.parse(localStorageData);
      const matchingVinData = vinDataArray.find((data) =>
        data.SearchCriteria.includes(vin),
      );
      if (matchingVinData) {
        setVinCodeData(matchingVinData);
      }
    }
  }

  return (
    <div className="home-container">
      <div className="home-vin-input">
        <Vin onVinCodeUpdate={handleVinCodeUpdate} />
      </div>
      <div className="home-history"></div>
      <div className="home-result">
        {vinCodeData ? (
          <VinCodeInfo vinCodeData={vinCodeData} />
        ) : (
          <p>No VIN information available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
