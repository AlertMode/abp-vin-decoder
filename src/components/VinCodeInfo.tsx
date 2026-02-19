import type { VinDataAllFieldsProps } from "../types/vin.type";

const VinCodeInfo = (props: { vinCodeData: VinDataAllFieldsProps }) => {
  return (
    <div className="vin-code-info">
      <h2>VIN Code Information</h2>
      <p>
        {props.vinCodeData ? (
          <pre>{JSON.stringify(props.vinCodeData.Results, null, 2)}</pre>
        ) : (
          "No VIN data available."
        )}
      </p>
    </div>
  );
};

export default VinCodeInfo;
