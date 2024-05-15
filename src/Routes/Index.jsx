import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import PassengerProfile from "../Components/Cards/PassengerProfile";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/passenger/:id" element={<PassengerProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
