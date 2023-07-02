import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Home";
import Checkout from "./Components/Checkout"
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout" element={<div><Header/> <Checkout/></div>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="/" element={<div><Header/> <Home/></div>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
