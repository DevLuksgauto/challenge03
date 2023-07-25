import { Link, useNavigate } from 'react-router-dom';
import arrow from '../../assets/arrow-right.png';
import phone1 from '../../assets/phone1.png';
import classes from '../../styleModules/CarouselCard.module.css';

interface CarouselCardProps {
  id: string; // Coloque o tipo correto do ID, pode ser string ou number, dependendo do tipo do ID no seu sistema.
  name: string;
}

const CarouselCard: React.FC<CarouselCardProps> = (props) => {
  const navigate = useNavigate();
  const id = props.id;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goTo = () => {
    navigate(`/products/${id}`);
    scrollToTop();
  }

  return (
    <div className={classes.card}>
      <div>
        {props.name.length > 24 ? <h1 className={classes.productName}>{props.name}</h1>
          : <h1 onClick={goTo} className={classes.productName2}>{props.name}</h1>}
        <Link className={classes.link} to='/shoppingcart'>Shop now <img src={arrow} alt="Arrow" /></Link>
      </div>
      <img onClick={goTo} className={classes.img} src={phone1} alt="Headphone picture" />
    </div>
  )
};

export default CarouselCard;
