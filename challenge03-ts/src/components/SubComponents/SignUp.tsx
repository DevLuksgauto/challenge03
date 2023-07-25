import { useState, FormEvent } from 'react';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from '../../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import LoginAuthenticationBtns from '../SubComponents/LoginAuthenticationBtns';

import { Mail, Lock } from 'react-feather';
import classes from '../../styleModules/SignUp.module.css';

interface ChildProps {
    link: () => void;
}

const SignUp: React.FC<ChildProps> = ({link}) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth);

    const signUpHandler = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(email, password);
            navigate('/home');
        } catch (err) {
            console.error("Erro ao criar conta:", err);
        }
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
                <p className={classes.p}>Do you have an account? <span onClick={link} className={classes.span}>Sign In here</span></p>
            </form>
        </div>
    )
};

export default SignUp;