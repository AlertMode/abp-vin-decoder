import { useEffect, useState } from "react";
import getVinVariables from "../requests/getVinVariables";
import type { VinVariablesApiResponse } from "../types/vin.type";
import type { VinVariablesAllFieldsProps } from "../types/vin.type";

const Variables = () => {
  const [variables, setVariables] = useState<VinVariablesApiResponse[]>([]);

  useEffect(() => {
    requestVinVariables();
  }, []);

  async function requestVinVariables(): Promise<void> {
    try {
      const response = await getVinVariables();
      if (response && response.data) {
        const data: VinVariablesAllFieldsProps = response.data;
        setVariables(data.Results);
      } else {
        console.error(`No data received from VIN variables API.`);
      }
    } catch (error) {
      console.error(
        `ERROR >> requestVinVariables: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  return (
    <div>
      <h1>VIN Variables & Description</h1>
      <div className="vin-variables-container">
        {variables.map((variable, index) => (
          <div key={index}>
            <a href={`/variable/${variable.ID}`} className="vin-variables-name">
              {variable.Name}
            </a>
            {/* Remove HTML tags from the description before rendering */}
            <div className="vin-variables-description">
              {variable.Description.replace(/<[^>]*>/g, "")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Variables;
