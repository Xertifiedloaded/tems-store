import classes from "./login.module.css";
import google from "../../assets/images/google.svg";
import Facebook from "../../assets/images/fb.svg";
import Twitter from "../../assets/images/twitter.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [submitted, setIsSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [value, SetValue] = useState({
    email: "",
    password: "",
  });
  const handleValue = (e) => {
    SetValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (value.email && value.password) {
      setValid(true);
    }
    console.log(value);
  };
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
  };
  return (
    <>
      <div className={classes.main}>
        <div className={classes.container}>
          <h1>Login</h1>
          {submitted && valid ? <div>hello</div> : null}
          <div className={classes.alternative}>
            <button className={classes.btn1}>
              <img src={google} alt="" />
              <span>Continue with google</span>
            </button>
            <button>
              <img src={Facebook} alt="" />
              <span>Continue with Facebook</span>
            </button>
            <button>
              <img src={Twitter} alt="" />
              <span>Continue with Twitter</span>
            </button>
          </div>
          <fieldset>
            <legend>or</legend>
          </fieldset>
          <form className={classes.form} onClick={handleClick}>
            <div className={classes.inputs}>
              <input
                onChange={handleValue}
                value={value.email}
                name="email"
                type="text"
                placeholder="Enter your email"
              />
              {submitted && !value.email ? (
                <small className={classes.error}>Enter valid email</small>
              ) : null}
            </div>
            <div className={classes.inputs}>
              <input
                name="password"
                onChange={handleValue}
                value={value.password}
                type={state ? "password" : "text"}
                placeholder="Enter your password"
              />
              {submitted && !value.password ? (
                <small className={classes.error}>Enter valid password</small>
              ) : null}
              <h6 onClick={toggle} className={classes.password}>
                show password
              </h6>
            </div>
            <div className={classes.formBtn}>
              <button>Login</button>
            </div>
            <div className={classes.forget}>
              <Link to="/">forget password</Link>
              <p className={classes.account}>
                Don't have an account?
                <Link to="/">Signup Now.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
