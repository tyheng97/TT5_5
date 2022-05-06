import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.loginForm} onSubmit={submitHandler}>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="text" name="Password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
