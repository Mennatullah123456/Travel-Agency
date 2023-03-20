import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./component/homePage/HomePage";

// Render All Components
function App() {
  return (
    <Router>
      <div className="App">
      <HomePage/>
        <Routes>
          <Route />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
