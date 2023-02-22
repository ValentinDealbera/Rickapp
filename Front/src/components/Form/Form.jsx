import style from "./Form.module.css";
import React, { useState } from "react";
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

  const handleSubmit = (event) => {
    event.preventDefault()
    props.login(userData)
  }
  
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label className={style.label}>Username</label>
      <input
        className={errors.username && style.warning}
        onChange={changeHandler}
        value={userData.username}
        name="username"
        type="text"
      />
      <p className={style.danger}>{errors.username}</p>
      <label className={style.label}>Password</label>
      <input
        className={errors.password && style.warning}
        onChange={changeHandler}
        value={userData.password}
        name="password"
        type="password"
      />
      <p className={style.danger}>{errors.password}</p>
        <button>Log-in</button>
    </form>
  );
};

export default Form;
