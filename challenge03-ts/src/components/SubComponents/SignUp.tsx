import { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from '../../services/firebaseConfig';
import { Mail, Lock } from 'react-feather';
import classes from '../subComponents/SignUp.module.css';

interface SignUpProps {
  link: () => void;
}

const SignUp: React.FC<SignUpProps> = (props) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const signUpHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
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
                {/* <div>
                    colocar os botoes de Sign Up
                </div> */}
                <Link to="/home">
                    <button className={classes.signBtn} onClick={signUpHandler}>Sign Up</button>
                </Link>
                <p className={classes.p}>Do you have an account? <span onClick={props.link} className={classes.span}>Sign In here</span></p>
            </form>
        </div>
    )
};

export default SignUp;
