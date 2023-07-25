import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem } from '../actions/cartBagAction';

import { Trash2, ChevronLeft, ChevronRight } from 'react-feather';
import AskToDeleteAll from './subComponents/AskToDeleteAll';
import classes from './ShoppingCartPage.module.css';
import ItemCartCard from './subComponents/ItemCartCard';
const ShoppingCartPage = () => {
    const [ totalPrice, setTotalPrice ] = useState(1);
    const [ deleteBtn, setDeleteBtn ] = useState(false);
    const navigate  = useNavigate()
    const dispatch = useDispatch();
    const cartBag = useSelector((state) => state.cart.cartBag);

    const handleBack = () => {
        navigate('/home')
    }
    
    const deleteAllBtnHandler = () =>{
        deleteBtn === false ? setDeleteBtn(true) : setDeleteBtn(false)
    }
    const handleDeleteItem = (itemId) => {
        dispatch(deleteCartItem(itemId));
    };
    const noRepeteArray = (array) => {
        return array.filter((item, index) => array.indexOf(item) === index);
    }

    const [ cartItems, setcartItems ] = useState([]);
    useEffect(() => {
        const uniqueCartItems = noRepeteArray(cartBag);
        setcartItems(uniqueCartItems);
    }, [cartBag]);
    
    const [itemCounters, setItemCounters] = useState({});
    useEffect(() => {
        const totalcartBagPrice = cartItems.reduce((accumulator, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            const counter = itemCounters[item.id] || 1;
            const itemTotalPrice = price * counter;
            return accumulator + itemTotalPrice;
        }, 0);

        setTotalPrice(totalcartBagPrice.toFixed(2));
    }, [cartItems, itemCounters]);

const counterDecreaseHandler = (itemId) => {
setItemCounters((prevCounters) => ({
    ...prevCounters,
    [itemId]: (prevCounters[itemId] || 1) - 1,
}));
};

const counterAddHandler = (itemId) => {
setItemCounters((prevCounters) => ({
    ...prevCounters,
    [itemId]: (prevCounters[itemId] || 1) + 1,
}));
};

const calculateTotalItems = () => {
    let totalItems = 0;
    for (const item of cartItems) {
        const itemId = item.id;
        const quantity = itemCounters[itemId] || 1;
        totalItems += quantity;
    }
    return totalItems;
}

    return (
        <div className={classes.tudo}>
            <header className={classes.header}>
                <button onClick={handleBack} className={classes.btnNoStyle}><ChevronLeft/></button>
                <h1 className={classes.title}>Shopping Cart</h1>
                <button onClick={deleteAllBtnHandler} className={classes.btnNoStyle}><Trash2/></button>
            </header>
            {deleteBtn ?
                <AskToDeleteAll
                    deleteBtnOFF={deleteAllBtnHandler}
                />
                : <p></p>}
            <div className={classes.pageContainer}>
                <div className={classes.cartContainer}>
                    {cartItems.map((item)=>(
                        <ItemCartCard
                            key={Math.random(item)}
                            name={item.name}
                            price={item.price}
                            decrease={() => handleDeleteItem(item.id)}
                            counterDecrease={() => counterDecreaseHandler(item.id)}
                            counterAdd={() => counterAddHandler(item.id)}
                            counter={itemCounters[item.id] || 1}
                        />
                    ))
                    }
                </div>
            </div>
            <div className={classes.totalPriceContainer}>
                <p>Total {calculateTotalItems()} items</p>
                <p className={classes.totalPrice}>USD {totalPrice}</p>
            </div>
                <button className={classes.checkoutBtn}>Proceed to Checkout<ChevronRight size={25}/></button>
        </div>
    )
};

export default ShoppingCartPage;