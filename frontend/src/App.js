import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./common/components/Navbar";
import Confirmation from "./pages/Confirmation/Confirmation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
