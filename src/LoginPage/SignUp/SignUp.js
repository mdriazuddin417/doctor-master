import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendEmailVerification } from "firebase/auth";
import LoginWithSocialAccount from "../LoginWithSocailAccount/LoginWithSocialAccount";
import Loading from "../Loading/Loading";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    emailErrors: "",
    passwordErrors: "",
    confirmPassErrors: "",
    generaleErrors: "",
  });
  //Email and Password Sign System
  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  //Update profile
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  const handleNameChange = (e) => {
    setUserInfo({ ...userInfo, name: e.target.value });
  };
  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, emailErrors: "" });
    } else {
      setErrors({ ...errors, emailErrors: "Invalid Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };
  const handlePasswordChange = (e) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, passwordErrors: "" });
    } else {
      setErrors({
        ...errors,
        passwordErrors: "Invalid Email",
      });
      setUserInfo({ ...userInfo, password: "" });
    }
  };
  const handleConfirmPas = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: "" });
      setErrors({ ...errors, confirmPassErrors: "" });
    } else {
      setErrors({ ...errors, confirmPassErrors: "Password's don't match" });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    await updateProfile({ displayName: userInfo.name });
  };

  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
        case "auth/invalid-email":
          toast.error("Invalid email !");
          break;
        case "auth/invalid-password":
          toast.error("Wrong password. Intruder!!");
          break;
        case "auth/email-already-in-use":
          toast.error("This email is already use !!");
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
      toast.success("Sent Email....");
      navigate(from);
    }
  }, [user]);

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className=" form-container text-center w-[300px] ">
        <div className="flex justify-center items-center">
          <FaRegUserCircle className="text-7xl text-blue-500" />
        </div>

        <h2 className="text-center ">
          Please <span className="text-blue-500">Sign Up</span>
        </h2>
        <Form onSubmit={handleSignUp}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={handleNameChange}
              type="text"
              placeholder="Your Name"
              name="name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={handleEmailChange}
              type="email"
              placeholder="Enter email"
              name="email"
              required
            />
            {errors?.emailErrors && (
              <p className="text-red-400 text-start font-bold">
                {errors.emailErrors}
              </p>
            )}
          </Form.Group>

          <Form.Group className="mb-3 relative" controlId="formBasicPassword">
            <Form.Control
              onChange={handlePasswordChange}
              type={showPass ? "text" : "password"}
              placeholder="Password"
              name="password"
              required
            />
            <BiShow
              className="absolute top-2 right-2 text-xl"
              onClick={() => {
                setShowPass(!showPass);
              }}
            />
            {errors?.passwordErrors && (
              <p className="text-red-400 text-start font-bold">
                {errors.passwordErrors}
              </p>
            )}
          </Form.Group>
          <Form.Group className="mb-3 relative" controlId="formBasicPassword">
            <Form.Control
              onChange={handleConfirmPas}
              type={showPass ? "text" : "password"}
              placeholder="Confirm Password"
              required
            />
            <BiShow
              className="absolute top-2 right-2 text-xl"
              onClick={() => {
                setShowPass(!showPass);
              }}
            />
            {errors?.confirmPassErrors && (
              <p className="text-red-400 text-start font-bold">
                {errors.confirmPassErrors}
              </p>
            )}
          </Form.Group>
          {loading && <Loading />}
          <div className="flex justify-center items-center mt-3 mb-2">
            <button type="submit" className="pushable ">
              <span className="front">Sign Up</span>
            </button>
          </div>
        </Form>

        <p>
          Already have an account ?{" "}
          <Link to={"/login"} className="decoration-transparent">
            Login
          </Link>
        </p>
        <LoginWithSocialAccount />
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
