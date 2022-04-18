import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
import "./Login.css";

import { BiShow } from "react-icons/bi";

import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import LoginWithSocialAccount from "../LoginWithSocailAccount/LoginWithSocialAccount";
import Loading from "../Loading/Loading";
const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  //Email and Password Sign System
  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  //Password Reset
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleEmailChange = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  const handleResetPassword = async () => {
    if (userInfo.email) {
      await sendPasswordResetEmail(userInfo.email);
      toast.success("Sent email !!");
    } else {
      toast.error("Please enter a valid email !!");
    }
  };
  useEffect(() => {
    if (hookError) {
      console.log(hookError);
      switch (hookError?.code) {
        case "auth/user-not-found":
          toast.error("Please enter a valid Email !");
          break;
        case "auth/wrong-password":
          toast.error("Wrong Password !!");
          break;

        default:
          toast.error("Something went wrong");
          break;
      }
    }
  }, [hookError]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
      toast.success("Login Successful !!");
    }
  }, [user]);

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className=" form-container text-center w-[300px] ">
        <div className="flex justify-center items-center">
          <FaRegUserCircle className="text-7xl text-blue-500" />
        </div>

        <h2 className="text-center ">
          Please <span className="text-blue-500">Log In</span>
        </h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={handleEmailChange}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3 relative" controlId="formBasicPassword">
            <Form.Control
              onChange={handlePasswordChange}
              type={showPass ? "text" : "password"}
              placeholder="Password"
              required
            />
            <BiShow
              className="absolute top-2 right-2 text-xl"
              onClick={() => {
                setShowPass(!showPass);
              }}
            />
          </Form.Group>
          {loading && <Loading />}
          <div className="flex justify-center items-center mt-3 mb-2">
            <button type="submit" className="pushable ">
              <span className="front">LogIn</span>
            </button>
          </div>
        </Form>
        <p>
          Forget ?
          <button
            className=" text-blue-600"
            onClick={() => {
              handleResetPassword();
            }}
          >
            Password
          </button>
        </p>
        <p>
          Don't have an account ?
          <Link to={"/signup"} className="decoration-transparent">
            SignUp
          </Link>
        </p>
        <LoginWithSocialAccount />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
