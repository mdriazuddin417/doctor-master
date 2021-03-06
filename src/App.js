import "./App.css";

import Header from "./Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePages/Home/Home";
import Services from "./Pages/HomePages/Services/Services";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import Login from "./LoginPage/Login/Login";
import Footer from "./Shared/Footer/Footer";
import CheckOut from "./Pages/CheckOut/CheckOut";
import SignUp from "./LoginPage/SignUp/SignUp";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import NotFound from "./Pages/NotFound/NotFound";
import "animate.css";
import { ToastContainer } from "react-toastify";
import ServiceModel from "./Pages/HomePages/Service/ServiceModel";
function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
