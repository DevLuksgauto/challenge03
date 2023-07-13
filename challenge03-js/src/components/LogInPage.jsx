import { Mail, Lock } from 'react-feather';
import classes from './LogInPage.module.css';
import { Link } from 'react-router-dom';

const LogInPage = () => {
    return (
        <div className={classes.firstPage}>
            <div className={classes.container}>
                <h1 className={classes.title}>Audio</h1>
                <p className={classes.subTitle}>It's modular and designed to last</p>
            </div>
            <form className={classes.form} action="">
                <div className={classes.inputWrapper}>
                    <input className={classes.input} type="email" placeholder="Email"/>
                    <Mail size={20} className={classes.icon}/>
                </div>
                <div className={classes.inputWrapper}>
                    <input className={classes.input} type="password" placeholder="Password"/>
                    <Lock size={20} className={classes.icon}/>
                </div>
                
                <p className={classes.p}>Forgot Password</p>
                <Link to="/home"><button className={classes.signBtn}>Sign In</button></Link>
                <p className={classes.p}>Didn't have any account? Sign Up here</p>
            </form>
        </div>
    )
};

export default LogInPage;