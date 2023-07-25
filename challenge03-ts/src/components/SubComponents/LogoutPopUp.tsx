import React from 'react';
import classes from '../../styleModules/LogoutPopUp.module.css';

interface LogoutPopUpProps {
    handleLogout: () => void;
}

const LogoutPopUp: React.FC<LogoutPopUpProps> = ({ handleLogout }) => {
    return (
        <div className={classes.container}>
            <button onClick={handleLogout} className={classes.btnNoStyle}>
                Fazer Logout
            </button>
        </div>
    );
};

export default LogoutPopUp;
