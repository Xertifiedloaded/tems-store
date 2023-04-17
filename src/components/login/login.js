import classes from "./login.module.css";
import google from "../../assets/images/google.svg";
import Facebook from "../../assets/images/fb.svg";
import Twitter from "../../assets/images/twitter.svg";
import { useState } from "react";

const Login = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
   
  };
  const handleEmail = (e) => {
    SetEmail(e.target.value);
  
  };
  const handlePassword = (e) => {
    SetPassword(e.target.value);
  };
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
    console.log("e dn click");
  };
  return (
    <>
      <div className={classes.main}>
        <div className={classes.container}>
          <h1>Login</h1>

          <div className={classes.alternative}>
            <button className={classes.btn1}>
              <span>Continue with google</span>
              <img src={google} alt="" />
            </button>
            <button>
              <span>Continue with Facebook</span>
              <img src={Facebook} alt="" />
            </button>
            <button>
              <span>Continue with Twitter</span>
              <img src={Twitter} alt="" />
            </button>
          </div>
          <fieldset>
            <legend>or</legend>
          </fieldset>
          <form className={classes.form} onClick={handleClick}>
            <div className={classes.inputs}>
              <input
                onChange={handleEmail}
                value={email}
                type="text"
                placeholder="Enter your email"
              />
              <p>error</p>
            </div>
            <div className={classes.inputs}>
              <input
                value={password}
                onChange={handlePassword}
                type={state ? "password" : "text"}
                placeholder="Enter your password"
              />
              <p>error</p>
              <h6 onClick={toggle}>show password</h6>
            </div>
            <div className={classes.formBtn}>
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
