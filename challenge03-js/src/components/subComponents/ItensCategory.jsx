import classes from './ItensCategory.module.css';

const ItensCategory = ({ headphone, headband }) => {
    return (
        <div className={classes.btnList}>
            <button className={classes.btnProduct} onClick={headphone}>Headphone</button>
            <button className={classes.btnProduct} onClick={headband}>Headband</button>
            <button className={classes.btnProduct}>Earpads</button>
        </div>
    )
};

export default ItensCategory;