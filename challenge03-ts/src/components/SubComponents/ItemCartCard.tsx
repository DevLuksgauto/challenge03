import { Trash2 } from 'react-feather';
import classes from '../../styleModules/ItemCartCard.module.css';
import foto1 from '../../assets/phone1.png';

interface ItemCartCardProps {
    name: string;
    price: string;
    decrease: () => void;
    counterDecrease: () => void;
    counterAdd: () => void;
    counter: number;
}

const ItemCartCard: React.FC<ItemCartCardProps> = ({ name, price, decrease, counterDecrease, counterAdd, counter }) => {

    return (
        <div className={classes.ProducContainer}>
            <div className={classes.productImg}>
                <img src={foto1} alt="Product image" />
            </div>
            <div className={classes.cartDataContainer}>
                <p className={classes.name}>{name}</p>
                <p className={classes.price}>{price.replace(/^\$/, "USD ")}</p>
                <div className={classes.counterContainer}>
                    <button onClick={counterDecrease} className={classes.btnNoStyle}>-</button>
                    <p className={classes.counter}>{counter}</p>
                    <button onClick={counterAdd} className={classes.btnNoStyle}>+</button>
                    <button className={classes.deleteItem} onClick={decrease}><Trash2 size={20} /></button>
                </div>
            </div>
        </div>
    )
};

export default ItemCartCard;
