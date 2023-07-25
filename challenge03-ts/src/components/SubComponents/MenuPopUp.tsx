import React from 'react';
import classes from '../../styleModules/MenuPopUp.module.css';
import { Link } from 'react-router-dom';

const MenuPopUp: React.FC = () => {
    return (
        <div className={classes.navBar}>
            <button className={classes.btn}>
                <Link className={classes.link} to="/home">
                    Home
                </Link>
            </button>
            <button className={classes.btn}>
                <Link className={classes.link} to="/search">
                    Search
                </Link>
            </button>
            <button className={classes.btn}>
                <Link className={classes.link} to="/products">
                    Featured Products
                </Link>
            </button>
            <button className={classes.btn}>
                <Link className={classes.link} to="/shoppingcart">
                    Shopping Cart
                </Link>
            </button>
        </div>
    );
};

export default MenuPopUp;
