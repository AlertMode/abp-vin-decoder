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
          // TODO: Fix this error. Maybe, by using useMemo.
          setVinCodeData(matchingVinData);
        }
      }
    }
  }, [vinCode]);

  const handleVinCodeUpdate = (vin: string) => {
    setVinCode(vin);
    console.log(`VIN code updated in Home component: ${vin}`);
  };

  return (
    <div className="home-container">
      <div className="home-element">
        <Vin onVinCodeUpdate={handleVinCodeUpdate} />
      </div>
      <div className="home-element"></div>
      <div className="home-element">
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
