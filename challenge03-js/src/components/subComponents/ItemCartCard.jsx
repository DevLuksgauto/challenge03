import { MinusSquare, PlusSquare } from 'react-feather';
import classes from './ItemCartCard.module.css';
import foto1 from '../../assets/phone1.png';
import { useEffect, useState } from 'react';

const ItemCartCard = (props) => {
    const [ counter, setCounter ] = useState(1);

    useEffect(() => {
        console.log(counter)
        
    }, [counter])

        const counterDecreaseHandler = () => setCounter((prevCounter) => prevCounter - 1 );
        const counterAddHandler = () => setCounter((prevCounter) => prevCounter + 1 );
    // const deleteItemHandler = (counter) => {
    //     if (counter === 0){

    //     }
    // }

    return (
        <div className={classes.ProducContainer}>
            <div className={classes.productImg}>
                <img src={foto1} alt="Product image" />
            </div>
            <div className={classes.cartDataContainer}>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.price}>{props.price.replace(/^\$/, "USD ")}</p>
                <div className={classes.counterContainer}>
                    <button onClick={counterDecreaseHandler} className={classes.btnNoStyle}>-</button>
                    <p>{counter}</p>
                    <button onClick={counterAddHandler} className={classes.btnNoStyle}>+</button>
                </div>
            </div>
        </div>
    )
};

export default ItemCartCard;