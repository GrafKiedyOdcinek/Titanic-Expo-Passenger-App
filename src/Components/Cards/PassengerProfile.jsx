import { useParams, useNavigate, Link } from "react-router-dom";
import data from "../../Data/passenger.json";
import { useSwipeable } from "react-swipeable";

const PassengerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const passengerID = parseInt(id);
  const passenger = data.find(
    (passenger) => passenger.passengerID === passengerID
  );

  console.log(id);

  const getNextPassenger = () => {
    const nextID = passengerID < data.length ? passengerID + 1 : 1;
    return data.find((passenger) => passenger.passengerID === nextID);
  };

  const getPreviousPassenger = () => {
    const prevID = passengerID > 1 ? passengerID - 1 : data.length;
    return data.find((passenger) => passenger.passengerID === prevID);
  };

  const nextPassenger = getNextPassenger();
  const previousPassenger = getPreviousPassenger();

  const handlers = useSwipeable({
    onSwipedLeft: () => navigate(`/passenger/${nextPassenger.passengerID}`),
    onSwipedRight: () =>
      navigate(`/passenger/${previousPassenger.passengerID}`),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="p-4">
      <header className="flex justify-between items-center gap-4">
        <Link to="/" className="text-2xl font-bold">
          <button className="border rounded-full w-32 p-2 text-center hover:bg-gray-200 hover:text-gray-800 transition-all bg-white">
            <i className="fa-solid fa-arrow-left text-black"></i>
          </button>
        </Link>
        <div className="language">
          <div className="fr border rounded-full bg-white w-[30px] h-[30px] flex items-center justify-center">
            <p className="text-black">FR</p>
          </div>
        </div>
      </header>
      <div className="separator border mt-6"></div>
      <main {...handlers}>
        <div className="flex flex-col justify-center items-center">
          {passenger ? (
            <div className="passenger-profile flex flex-col justify-center items-center gap-5 p-6 sm:max-w-full md:max-w-full lg:max-w-[60%]">
              <div className="flex gap-10 w-full justify-between items-center">
                <button
                  onClick={() =>
                    navigate(`/passenger/${previousPassenger.passengerID}`)
                  }
                  className="p-2 text-center hover:text-gray-800 transition-all"
                >
                  <i className="fa-solid fa-caret-left text-7xl"></i>
                </button>
                <div className="passenger-img-profile mt-4 sm:max-h-[200px] sm:max-w-[200px] md:max-h-[400px] md:max-w-[400px] lg:max-w-[500px] lg:max-h-[500px] w-full">
                  <img
                    src={passenger.image}
                    alt={passenger.name}
                    className="sm:max-h-[200px] sm:max-w-[200px] md:max-h-[400px] md:max-w-[400px] lg:max-w-[500px] lg:max-h-[500px]"
                  />
                </div>
                <button
                  onClick={() =>
                    navigate(`/passenger/${nextPassenger.passengerID}`)
                  }
                  className="p-2 text-center hover:text-gray-800 transition-all"
                >
                  <i className="fa-solid fa-caret-right text-7xl"></i>
                </button>
              </div>
              <h1 className="border rounded-full py-3 px-10 w-full md:w-w-[50%] lg:w-[50%] text-center">
                {passenger.name}
              </h1>
              <div className="flex gap-2 md:gap-10 lg:gap-10 w-full mt-4">
                <p className="border rounded-full py-3 px-10 w-[40%] text-center">
                  <strong>Age:</strong> {passenger.age}
                </p>
                <p className="border rounded-full py-3 px-10 w-[60%] text-center">
                  <strong>Role:</strong> {passenger.role}
                </p>
              </div>

              {/* <p className="border rounded-full py-3 px-10">
                <strong>Survived:</strong> {passenger.survived ? "Yes" : "No"}
              </p> */}
              <p className="border rounded-3xl py-3 px-10">
                <strong>Description:</strong> {passenger.description}
              </p>
              <p className="border rounded-3xl py-3 px-10">
                <strong>History:</strong> {passenger.history}
              </p>
            </div>
          ) : (
            <>
              <p>Passenger not found</p>
              <button onClick={() => window.history.back()}>
                <i className="fa-regular fa-circle-left"></i> Go back
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default PassengerProfile;
