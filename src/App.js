import "./App.css";
import Login from "./components/Login.jsx";
import Date from "./components/Date";
import Video from "./components/Video";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes className="App">
      <Route path="/VIAMAGUS-TASK" element={<Login />} />
      <Route path="/VIAMAGUS-TASK/video" element={<Video />} />
      <Route path="VIAMAGUS-TASK/date" element={<Date />} />
    </Routes>
  );
}

export default App;
