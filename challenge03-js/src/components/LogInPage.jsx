import { useState, useEffect } from 'react';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from '../services/firebaseConfig';
import { Link, useNavigate  } from 'react-router-dom';
import SignUp from './subComponents/SignUp';
import { Mail, Lock } from 'react-feather';
import classes from './LogInPage.module.css';

const LogInPage = () => {
    const [ ShowSignUp, setShowSignUp ] = useState(true);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState("");
    const [empityInput, setEmpityInput] = useState(false);
    const navigate = useNavigate();

    const loginHandler = () => !ShowSignUp ? setShowSignUp(true) : setShowSignUp(false);

        const [signInWithEmailAndPassword, user, loading, error] =
            useSignInWithEmailAndPassword(auth);
    
            const SigInHandler = async (e) => {
                e.preventDefault();
console.log(error)
                if (!email || !password) {
                    console.error("Please enter both email and password.");
                    setEmpityInput(true)
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
            { ShowSignUp ? 
            <div className={classes.loginContainer}>
                <form className={classes.form} >
                    <div className={classes.inputWrapper}>
                        <input
                            className={classes.input}
                            type="email"
                            placeholder="Email"
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                        <Mail size={20} className={classes.icon}/>
                    </div>
                    <div className={classes.inputWrapper}>
                        <input
                            className={classes.input}
                            type="password"
                            placeholder="Password"
                            onChange={(e)=> setPassword(e.target.value)}
                            />
                        <Lock size={20} className={classes.icon}/>
                    </div>
                    {/* <p className={classes.p}>Forgot Password</p> */}
                    {empityInput && !error && <p className={classes.failLoginAlert}>Please enter both email and password.</p>}
                    {error && <p className={classes.failLoginAlert}>Invalid email or password</p>}
                    <Link to="/home"><button className={classes.signBtn} onClick={SigInHandler}>Sign In</button></Link>
                    <p className={classes.p}>Didn't have any account?  <span onClick={loginHandler} className={classes.span}>Sign Up here</span></p>
                </form>
            </div>
            :
            <SignUp
                link={loginHandler}
            />
            } 
        </div>
        )
    };

export default LogInPage;