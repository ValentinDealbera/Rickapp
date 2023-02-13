import style from "./Form.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validate } from "./validation";

const Form = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = () => {
    props.login()
  }
  
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label>Username</label>
      <input
        className={errors.username && "warning"}
        onChange={changeHandler}
        value={userData.username}
        name="username"
        type="text"
      />
      <p>{errors.username}</p>
      <label>Password</label>
      <input
        className={errors.password && "warning"}
        onChange={changeHandler}
        value={userData.password}
        name="password"
        type="password"
      />
      <p>{errors.password}</p>
      <Link to={"/home"}>
        <button>Log-in</button>
      </Link>
    </form>
  );
};

export default Form;
