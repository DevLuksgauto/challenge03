import { Fragment } from "react";
import classes from './Loading.module.css';

const Loading = () => {
    return(
        <Fragment>
            <div className={classes.container}>
                    <h1 className={classes.h1}>Wait...</h1>
                <div className={classes.loader}></div>
                    <h2 className={classes.h2}>Cat working...</h2>
            </div>
        </Fragment>
    )
};

export default Loading;