import React from "react";
import { Form } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";

import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className=" form-container text-center ">
        <div className="flex justify-center items-center">
          <FaRegUserCircle className="text-7xl text-blue-500" />
        </div>

        <h2 className="text-center ">
          Please <span className="text-blue-500">Login</span>
        </h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <div className="flex justify-center items-center mt-3 mb-2">
            <button type="submit" className="pushable ">
              <span className="front">LogIn</span>
            </button>
          </div>
        </Form>

        <p>
          Already have an account ?{" "}
          <Link to={"/signup"} className="decoration-transparent">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
