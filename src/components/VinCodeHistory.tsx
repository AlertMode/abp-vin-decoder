import type { VinDataAllFieldsProps } from "../types/vin.type";

const LINKS_PER_PAGE = 3;

const VinCodeHistory = (props: {
  vinData: VinDataAllFieldsProps[];
  onVinCodeSelect: (vin: string) => void;
}) => {
  return (
    <div>
      <h3>Search History</h3>
      <div className="vin-history-container">
        {props.vinData.length > 0 ? (
          <ul>
            {props.vinData
              .slice()
              .reverse()
              .map(
                (vin, index) =>
                  index < LINKS_PER_PAGE && (
                    <li
                      className="vin-history-item"
                      key={index}
                      onClick={() => props.onVinCodeSelect(vin.SearchCriteria)}
                    >
                      {vin.SearchCriteria.replace("VIN:", "")}
                    </li>
                  ),
              )}
          </ul>
        ) : (
          <p>No VIN history available.</p>
        )}
      </div>
    </div>
  );
};

export default VinCodeHistory;
