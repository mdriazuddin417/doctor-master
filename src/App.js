import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePages/Home/Home";
import Services from "./Pages/HomePages/Services/Services";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import Login from "./LoginPage/Login/Login";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
