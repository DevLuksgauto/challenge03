import classes from './ItensCategory.module.css';

const ItensCategory = () => {
    return (
        <div className={classes.btnList}>
            <button className={classes.btnProduct}>Headphone</button>
            <button className={classes.btnProduct}>Headband</button>
            <button className={classes.btnProduct}>Earpads</button>
        </div>
    )
};

export default ItensCategory;