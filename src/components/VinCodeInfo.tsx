import type { VinDataAllFieldsProps } from "../types/vin.type";

const VinCodeInfo = (props: { vinCodeData: VinDataAllFieldsProps }) => {
  return (
    <div className="vin-code-info">
      <h2>{props.vinCodeData.SearchCriteria}</h2>
      <div>
        {props.vinCodeData.Results.map((result, index) => (
          <div key={index} className="vin-code-item">
            <div className="vin-code-key">{result.Variable}:</div>
            <div className="vin-code-value">{result.Value || "N/A"}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VinCodeInfo;
