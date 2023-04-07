import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ActiveLandPage from "./pages/ActiveLandPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/active" element={<ActiveLandPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
