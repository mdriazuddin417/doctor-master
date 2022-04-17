import React, { useEffect } from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
const LoginWithSocialAccount = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  useEffect(() => {
    if (googleUser || facebookUser || githubUser) {
      navigate("/");
    }
  }, [googleUser, facebookUser, githubUser]);

  useEffect(() => {
    if (googleError || facebookError || githubError) {
      toast("Something is Problem");
    }
  }, [googleError, facebookError, githubError]);

  return (
    <div>
      <div className="flex gap-2 items-center justify-center ">
        <div className="w-100 border-2 h-1"></div>
        <div>Or</div>
        <div className="w-100 border-2 h-1"></div>
      </div>
      <div className="mt-2">
        <div
          className="flex justify-around items-center  rounded-2xl p-2  mb-2 hover:bg-gray-700 hover:text-white hover:transition-all transition-all cursor-pointer shadow"
          onClick={() => signInWithGoogle()}
        >
          <FcGoogle className="text-blue-600 text-2xl " /> Google with SignUp
        </div>
        <div
          className="flex justify-around items-center  rounded-2xl p-2  mb-2 hover:bg-gray-700 hover:text-white hover:transition-all transition-all cursor-pointer shadow"
          onClick={() => signInWithFacebook()}
        >
          <FaFacebook className="text-blue-500 text-2xl" /> Facebook with SignUp
        </div>
        <div
          className="flex justify-around items-center  rounded-2xl p-2  hover:bg-gray-700 hover:text-white hover:transition-all transition-all cursor-pointer shadow"
          onClick={() => signInWithGithub()}
        >
          <SiGithub className="text-black text-2xl" /> GitHub with SignUp
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginWithSocialAccount;
