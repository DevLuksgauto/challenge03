import { useState, useEffect } from 'react';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from '../services/firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import SignUp from './SubComponents/SignUp';
import { Mail, Lock } from 'react-feather';
import classes from '../styleModules/LogInPage.module.css';

const LogInPage: React.FC = () => {
  const [ShowSignUp, setShowSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);
  const navigate = useNavigate();

  const loginHandler = () => setShowSignUp(prevState => !prevState);

  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

  const SigInHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      console.error("Please enter both email and password.");
      setEmptyInput(true);
      return;
    }

    try {
      await signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error("Login Error:", err);
    }
  };

  const navigateToHome = () => {
    if (user) {
      navigate('/home');
    }
  };

  useEffect(() => {
    navigateToHome();
  }, [user]);



  return (
    <div className={classes.firstPage}>
      <div className={classes.container}>
        <h1 className={classes.title}>Audio</h1>
        <p className={classes.subTitle}>It's modular and designed to last</p>
      </div>
      {ShowSignUp ?
        <div className={classes.loginContainer}>
          <form className={classes.form} >
            <div className={classes.inputWrapper}>
              <input
                className={classes.input}
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Mail size={20} className={classes.icon} />
            </div>
            <div className={classes.inputWrapper}>
              <input
                className={classes.input}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Lock size={20} className={classes.icon} />
            </div>
            {/* <p className={classes.p}>Forgot Password</p> */}
            {emptyInput && !error && <p className={classes.failLoginAlert}>Please enter both email and password.</p>}
            {error && <p className={classes.failLoginAlert}>Invalid email or password</p>}
            <Link to="/home"><button className={classes.signBtn} onClick={SigInHandler}>Sign In</button></Link>
            <p className={classes.p}>Don't have an account? <span onClick={loginHandler} className={classes.span}>Sign Up here</span></p>
          </form>
        </div>
        :
        <SignUp
          link={loginHandler}
        />
      }
    </div>
  );
};

export default LogInPage;
