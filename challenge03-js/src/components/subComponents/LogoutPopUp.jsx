import classes from './LogoutPopUp.module.css';

const LogoutPopUp = (props) => {

    return(
        <div className={classes.container}>
            <button onClick={props.handleLogout} className={classes.btnNoStyle}>Fazer Logout</button>
        </div>
    )
};

export default LogoutPopUp;