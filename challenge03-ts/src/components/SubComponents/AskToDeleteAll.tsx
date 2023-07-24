import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllFromCartBag } from '../../actions/cartBagAction';
import { RootState } from "../../store"; // Certifique-se de importar o tipo RootState corretamente de onde ele estiver definido.

import { ThumbsUp, ThumbsDown, X } from 'react-feather';
import nope from '../../assets/cryingCat404.jpg';
import yep from '../../assets/happyCatYES.jpg';
import classes from './AskToDeleteAll.module.css';

interface AskToDeleteAllProps {
  deleteBtnOFF: () => void;
}

const AskToDeleteAll: React.FC<AskToDeleteAllProps> = (props) => {
  const dispatch = useDispatch();
  const cartBag = useSelector((state: RootState) => state.cart.cartBag);
  const navigate = useNavigate();

  const noDeleteHandler = () => {
    props.deleteBtnOFF();
    navigate('/shoppingcart');
  }

  const handleDeleteAllFromCartBag = () => {
    dispatch(deleteAllFromCartBag());
    props.deleteBtnOFF();
    navigate('/shoppingcart');
  }

  return (
    <div className={classes.deleteContainer}>
      <h1 className={classes.title}>Want to delete all items from your shopping cart?</h1>
      <div className={classes.btnContainer}>
        <button className={classes.btnNoStyle} onClick={handleDeleteAllFromCartBag}><ThumbsUp size={40} /></button>
        <X />
        <button className={classes.btnNoStyle} onClick={noDeleteHandler}><ThumbsDown size={40} /></button>
      </div>
    </div>
  );
};

export default AskToDeleteAll;
