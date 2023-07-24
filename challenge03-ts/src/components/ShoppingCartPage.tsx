import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartBag, decreaseCartItemQuantity } from '../actions/cartBagAction';
import { Trash2, ChevronLeft, ChevronRight } from 'react-feather';
import AskToDeleteAll from './subComponents/AskToDeleteAll';
import classes from './ShoppingCartPage.module.css';
import ItemCartCard from './subComponents/ItemCartCard';

interface CartItem {
  name: string;
  price: string;
}

const ShoppingCartPage: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [deleteBtn, setDeleteBtn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartBag: CartItem[] = useSelector((state: RootState) => state.cart.cartBag);
  
  const handleBack = () => {
    navigate('/home');
  }

  const deleteBtnHandler = () => {
    setDeleteBtn(prev => !prev);
  }

  const handleAddToCart = (id: number) => {
    dispatch(addToCartBag(id));
    console.log(cartBag);
  }

  const handleDecreaseItem = (item: CartItem) => {
    dispatch(decreaseCartItemQuantity(item));
  }

  return (
    <div className={classes.tudo}>
      <header className={classes.header}>
        <button onClick={handleBack} className={classes.btnNoStyle}><ChevronLeft /></button>
        <h1 className={classes.title}>Shopping Cart</h1>
        <button onClick={deleteBtnHandler} className={classes.btnNoStyle}><Trash2 /></button>
      </header>
      {deleteBtn ? <AskToDeleteAll deleteBtnOFF={deleteBtnHandler} /> : <p></p>}
      <div className={classes.pageContainer}>
        <div className={classes.cartContainer}>
          {cartBag.map((item) => (
            <ItemCartCard
              key={Math.random()}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className={classes.totalPriceContainer}>
        <p>Total {cartBag.length} items</p>
        <p className={classes.totalPrice}>USD {totalPrice}</p>
      </div>
      <button className={classes.checkoutBtn}>Proceed to Checkout<ChevronRight size={25} /></button>
    </div>
  );
};

export default ShoppingCartPage;
