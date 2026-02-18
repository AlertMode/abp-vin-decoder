import Vin from "../components/Vin";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-vin-input">
        <Vin />
      </div>
      <div className="home-history"></div>
      <div className="home-result"></div>
    </div>
  );
};

export default Home;
