import React from 'react';
import classes from '../../styleModules/ItensCategory.module.css';

interface ItensCategoryProps {
    headphone: () => void;
    headband: () => void;
}

const ItensCategory: React.FC<ItensCategoryProps> = ({ headphone, headband }) => {
    return (
        <div className={classes.btnList}>
            <button className={classes.btnProduct} onClick={headphone}>Headphone</button>
            <button className={classes.btnProduct} onClick={headband}>Headband</button>
            <button className={classes.btnProduct}>Earpads</button>
        </div>
    );
};

export default ItensCategory;
