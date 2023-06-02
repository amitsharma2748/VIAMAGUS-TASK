import "./App.css";
import Login from "./components/Login.jsx";
import Date from "./components/Date";
import Video from "./components/Video";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<Login />} />
      <Route path="/video" element={<Video />} />
      <Route path="/date" element={<Date />} />
    </Routes>
  );
}

export default App;
