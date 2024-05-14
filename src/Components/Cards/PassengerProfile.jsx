import { useParams } from "react-router-dom";
import data from "../../Data/passenger.json";

const PassengerProfile = () => {
  const { name } = useParams();
  const passenger = data.find((passenger) => passenger.name === name);

  return (
    <div className="p-4">
      {passenger ? (
        <div className="passenger-profile">
          <img src={passenger.image} alt={passenger.name} />
          <h1>{passenger.name}</h1>
          <p>
            <strong>Age:</strong> {passenger.age}
          </p>
          <p>
            <strong>Role:</strong> {passenger.role}
          </p>
          <p>
            <strong>Survived:</strong> {passenger.survived ? "Yes" : "No"}
          </p>
          <p>
            <strong>Description:</strong> {passenger.description}
          </p>
          <p>
            <strong>History:</strong> {passenger.history}
          </p>
        </div>
      ) : (
        <>
          <p>Passenger not found</p>
          <button onClick={() => window.history.back()}>Go back</button>
        </>
      )}
    </div>
  );
};

export default PassengerProfile;