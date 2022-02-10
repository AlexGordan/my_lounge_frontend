import React from "react";

import { Button } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signIn } from "../../../redux/actions/auth";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignin = async () => {
    const userData = {
      email: "test5@gmail.com",
      password: "qwerty123",
    };
    dispatch(signIn(userData));
    navigate("/dashboard");
  };
  return (
    <>
      <Button onClick={handleSignin}>Login</Button>
    </>
  );
};

export default Signin;
