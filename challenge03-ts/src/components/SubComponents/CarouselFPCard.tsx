import classes from '../../styleModules/CarouselFPCard.module.css';
import cable1 from '../../assets/Cable1.png';
import { useNavigate } from 'react-router-dom';

interface CarouselFPCardProps {
  id: string;
  name: string;
  price: string;
}

const CarouselFPCard: React.FC<CarouselFPCardProps> = (props) => {
  const navigate = useNavigate();
  const id = props.id;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goTo = () => {
    navigate(`/products/${id}`);
    scrollToTop();
  };

  const formattedPrice = props.price ? props.price.replace(/^\$/, "USD ") : "";

  return (
    <div className={classes.card}>
      <img onClick={goTo} className={classes.img} src={cable1} alt="Product Picture" />
      <p className={classes.productName}>{props.name}</p>
      <p className={classes.price}>{formattedPrice}</p>
    </div>
  );
};

export default CarouselFPCard;
