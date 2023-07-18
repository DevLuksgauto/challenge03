import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';

import { ChevronLeft, ShoppingCart } from 'react-feather';
import classes from './HeadersStyle.module.css';

const HeaderWithoutTitle = () => {
    const navigate  = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }
    return(
        <Fragment>
            <header className={classes.header}>
                <button onClick={handleBack} className={classes.btnNoStyle}><ChevronLeft/></button>
                <button className={classes.btnNoStyle}><ShoppingCart/></button>
            </header>
        </Fragment>
    )
};

export default HeaderWithoutTitle;