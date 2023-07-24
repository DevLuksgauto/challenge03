import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from '../../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import LoginAuthenticationBtns from './LoginAuthenticationBtns';


import { Mail, Lock } from 'react-feather';
import classes from '../subComponents/SignUp.module.css';


const SignUp = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

    const signUpHandler = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
        navigate('/home')
    }
    if (loading) return <p>carregando...</p>;

    return (
        <div className={classes.loginContainer}>
            <form className={classes.form}>
                <div className={classes.inputWrapper}>
                    <input
                        className={classes.input}
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    <Mail size={20} className={classes.icon}/>
                </div>
                <div className={classes.inputWrapper}>
                    <input
                    className={classes.input}
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Lock size={20} className={classes.icon}/>
                </div>
                <button className={classes.signBtn} onClick={signUpHandler}>Sign Up</button>
                    <LoginAuthenticationBtns/>
                <p className={classes.p}>Do you have an account? <span onClick={props.link} className={classes.span}>Sign In here</span></p>
            </form>
        </div>
    )
};

export default SignUp;