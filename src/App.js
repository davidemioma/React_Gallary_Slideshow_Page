import Gallaria from "./pages/Gallaria";
import GallariaDetails from "./pages/GallariaDetails";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Gallaria />} />

      <Route path="/detail/:pathId" element={<GallariaDetails />} />
    </Routes>
  );
}

export default App;
