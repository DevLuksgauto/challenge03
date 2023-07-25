import React from "react";
import classes from '../../styleModules/Loading.module.css';

const Loading: React.FC = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.h1}>Wait...</h1>
            <div className={classes.loader}></div>
            <h2 className={classes.h2}>Cat working...</h2>
        </div>
    );
};

export default Loading;