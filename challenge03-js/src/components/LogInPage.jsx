import { useState, useEffect } from 'react';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from '../services/firebaseConfig';
import { Link, useNavigate  } from 'react-router-dom';
import SignUp from './subComponents/SignUp';
import { Mail, Lock } from 'react-feather';
import classes from './LogInPage.module.css';

const LogInPage = () => {
    const [ShowSignUp, setShowSignUp] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginAttempted, setLoginAttempted] = useState(false);
    const navigate = useNavigate();

    const loginHandler = () => !ShowSignUp ? setShowSignUp(true) : setShowSignUp(false);

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const SigInHandler = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password).catch(() => {
            setLoginAttempted(true); // Set loginAttempted to true only when login fails
        });
    };

    const navigateToHome = () => {
        if (user) {
            navigate('/home');
        }
    };

    useEffect(() => {
        navigateToHome();
    }, [user]);

    // Conditional placeholders and style based on the user state and loginAttempted
    let emailPlaceholder, passwordPlaceholder;
    let emailStyle = {};
    let passwordStyle = {};

    if (loginAttempted && !user) {
        emailPlaceholder = 'Invalid email or password';
        passwordPlaceholder = 'Invalid email or password';
        emailStyle = { color: 'red' };
        passwordStyle = { color: 'red' };
    } else {
        emailPlaceholder = user ? 'Logged in. Email is not editable' : 'Email';
        passwordPlaceholder = user ? 'Logged in. Password is not editable' : 'Password';
    }

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
                                placeholder={emailPlaceholder}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{color: 'red'}} 
                                readOnly={user ? true : false}
                            />
                            <Mail size={20} className={classes.icon} />
                        </div>
                        <div className={classes.inputWrapper}>
                            <input
                                className={classes.input}
                                type="password"
                                placeholder={passwordPlaceholder}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{color: 'red'}}
                                readOnly={user ? true : false}
                            />
                            <Lock size={20} className={classes.icon} />
                        </div>
                        {/* <p className={classes.p}>Forgot Password</p> */}
                        <button className={classes.signBtn} onClick={SigInHandler}>Sign In</button>
                        <p className={classes.p}>Didn't have any account?  <span onClick={loginHandler} className={classes.span}>Sign Up here</span></p>
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
