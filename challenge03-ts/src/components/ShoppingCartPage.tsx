import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem } from '../action/cartBagAction';

import { Trash2, ChevronLeft, ChevronRight } from 'react-feather';
import AskToDeleteAll from './SubComponents/AskToDeleteAll';
import ItemCartCard from './SubComponents/ItemCartCard';
import { RootState } from '../reducers/rootReducer';
import classes from '../styleModules/ShoppingCartPage.module.css';

const ShoppingCartPage: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState(1);
  const [deleteBtn, setDeleteBtn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartBag = useSelector((state: RootState) => state.cart.cartBag);

  const handleBack = () => {
    navigate('/home');
  };

  const deleteAllBtnHandler = () => {
    setDeleteBtn(prevState => !prevState);
  };

  const handleDeleteItem = (itemId: number) => {
    dispatch(deleteCartItem(itemId));
  };

  const noRepeteArray = (array: any[]) => {
    return array.filter((item, index) => array.indexOf(item) === index);
  }

  const [cartItems, setcartItems] = useState<any[]>([]);

  useEffect(() => {
    const uniqueCartItems = noRepeteArray(cartBag);
    setcartItems(uniqueCartItems);
  }, [cartBag]);

  const [itemCounters, setItemCounters] = useState<{ [key: number]: number }>({});
  useEffect(() => {
    const totalcartBagPrice = cartItems.reduce((accumulator, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      const counter = itemCounters[item.id] || 1;
      const itemTotalPrice = price * counter;
      return accumulator + itemTotalPrice;
    }, 0);

    setTotalPrice(totalcartBagPrice.toFixed(2));
  }, [cartItems, itemCounters]);

  const counterDecreaseHandler = (itemId: number) => {
    setItemCounters((prevCounters) => ({
      ...prevCounters,
      [itemId]: (prevCounters[itemId] || 1) - 1,
    }));
  };

  const counterAddHandler = (itemId: number) => {
    setItemCounters((prevCounters) => ({
      ...prevCounters,
      [itemId]: (prevCounters[itemId] || 1) + 1,
    }));
  };

  return (
    <div className={classes.tudo}>
      <header className={classes.header}>
        <button aria-label="comeback" onClick={handleBack} className={classes.btnNoStyle}><ChevronLeft /></button>
        <h1 className={classes.title}>Shopping Cart</h1>
        <button aria-label="delete" onClick={deleteAllBtnHandler} className={classes.btnNoStyle}><Trash2 /></button>
      </header>
      {deleteBtn ?
        <AskToDeleteAll
          deleteBtnOFF={deleteAllBtnHandler}
        />
        : <p></p>}
      <div className={classes.pageContainer}>
        <div className={classes.cartContainer}>
          {cartItems.map((item) => (
            <ItemCartCard
              key={item.id}
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
        <p>Total {cartItems.length} items</p>
        <p className={classes.totalPrice}>USD {totalPrice}</p>
      </div>
      <button className={classes.checkoutBtn}>Proceed to Checkout<ChevronRight size={25} /></button>
    </div>
  );
};

export default ShoppingCartPage;
