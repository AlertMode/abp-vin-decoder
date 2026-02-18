import getDataByVIN from "../requests/getDataByVIN";

//TODO: Add state hoisting and display the data in a user-friendly format
const Vin = () => {
  const isVINcode = (vin: string): boolean => {
    const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;
    return vinRegex.test(vin.toUpperCase());
  };

  const reqestVINdata = async (vin: string) => {
    try {
      const response = await getDataByVIN(vin);
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error fetching VIN data:", error);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const inputElement = event.currentTarget;
      const vin = inputElement.value.trim();
      if (isVINcode(vin)) {
        reqestVINdata(vin);
      } else {
        alert("Please enter a valid 17-character VIN.");
      }
    }
  };

  //TODO: Write it. Simply write it.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {};

  return (
    <div className="vin-container">
      <form className="vin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter VIN"
          className="vin-input"
          onKeyDown={handleKeyDown}
        />
        <button className="vin-submit">Submit</button>
      </form>
    </div>
  );
};
export default Vin;
