import { MoreVertical } from "react-feather";
import { useNavigate } from "react-router-dom";

import phone1 from '../../assets/phone1.png';
import star from '../../assets/star-filled.png';
import classes from '../../styleModules/PopularProducts.module.css';
import Loading from '../SubComponents/Loading';

interface PopularProductsProps {
  id: string;
  name: string;
  price: string;
  rating: number;
  reviews: string[];
}

const PopularProducts: React.FC<PopularProductsProps> = (props) => {
  const navigate = useNavigate();
  const id = props.id;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goTo = () => {
    navigate(`/products/${id}`);
    scrollToTop();
  };

  return (
    <>
      {props.name.length > 0 ? (
        <div onClick={goTo} className={classes.itemContainer}>
          <img className={classes.productImg} src={phone1} alt="Earhphone Pic" />
          <div>
            <p className={classes.productName}>{props.name}</p>
            <p className={classes.price}>{props.price.replace(/^\$/, "USD ")}</p>
            <div className={classes.reviewContainer}>
              <div className={classes.reviewDataContainer}>
                <p style={{ display: 'flex', gap: '0.3rem' }}><img src={star} alt="Star Icon" />{props.rating}</p>
                <p style={{ display: 'flex' }}>{props.reviews.length} Reviews</p>
              </div>
              <button className={classes.btnNoStyle}><MoreVertical /></button>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PopularProducts;
