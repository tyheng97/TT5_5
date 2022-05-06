import { useState } from "react";
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const verification = async () => {
    const loginData = { username: username, password: password };
    console.log(loginData);
    const response = await fetch("http://localhost:3002/api/auth/login", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error", error));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    verification();
  };

  return (
    <form className={classes.loginForm} onSubmit={submitHandler}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername((prev) => e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="text"
          name="Password"
          onChange={(e) => setPassword((prev) => e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
