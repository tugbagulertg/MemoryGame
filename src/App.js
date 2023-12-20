import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Game from "./components/Game";
import ProtectedRoute from "./protectedRoute";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="bg-[#93B1A6] font-mono">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/play/easy" element={<Game />} />
            <Route path="/play/medium" element={<Game />} />
            <Route path="/play/hard" element={<Game />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
