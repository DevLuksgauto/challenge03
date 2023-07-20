import { MinusSquare, PlusSquare } from 'react-feather';
import classes from './ItemCartCard.module.css';
import foto1 from '../../assets/phone1.png';

const ItemCartCard = (props) => {
    return (
        <div className={classes.ProducContainer}>
            <div className={classes.productImg}>
                <img src={foto1} alt="Product image" />
            </div>
            <div className={classes.cartDataContainer}>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.price}>{props.price.replace(/^\$/, "USD ")}</p>
                <div className={classes.counterContainer}>
                    <button className={classes.btnNoStyle}>-</button>
                    <p>1</p>
                    <button className={classes.btnNoStyle}>+</button>
                </div>
            </div>
        </div>
    )
};

export default ItemCartCard;