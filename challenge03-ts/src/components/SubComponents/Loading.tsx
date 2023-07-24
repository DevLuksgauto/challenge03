import { FC } from 'react';
import classes from './Loading.module.css';

const Loading: FC = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.h1}>Wait...</h1>
            <div className={classes.loader}></div>
            <h2 className={classes.h2}>Cat working...</h2>
        </div>
    );
};

export default Loading;
