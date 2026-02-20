import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getVinVariables from "../requests/getVinVariables";
import type { VinVariablesApiResponse } from "../types/vin.type";
import type { VinVariablesAllFieldsProps } from "../types/vin.type";
import StatusAdviser from "../components/StatusAdviser";

const VariableID = () => {
  const { id } = useParams<{ id: string }>();
  const [variable, setVariable] = useState<VinVariablesApiResponse | null>(
    null,
  );

  async function requestVinVariableById(variableId: string): Promise<void> {
    try {
      const response = await getVinVariables();
      if (response && response.data) {
        const data: VinVariablesAllFieldsProps = response.data;
        const foundVariable = data.Results.find(
          (value) => value.ID === parseInt(variableId),
        );
        if (foundVariable) {
          setVariable(foundVariable);
        }
      } else {
        console.error(`No data received from VIN variables API.`);
      }
    } catch (error) {
      console.error(
        `ERROR >> requestVinVariableById: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  useEffect(() => {
    if (id) {
      requestVinVariableById(id);
    }
  }, [id]);

  return (
    <div>
      <div className="vin-variable-id-container">
        {variable ? (
          <div>
            <div className="vin-variable-id-name">{variable.Name}</div>
            <div className="vin-variable-id-description">
              {variable.Description.replace(/<[^>]*>/g, "")}
            </div>
          </div>
        ) : (
          <StatusAdviser message="Variable not found." success={false} />
        )}
      </div>
    </div>
  );
};

export default VariableID;
