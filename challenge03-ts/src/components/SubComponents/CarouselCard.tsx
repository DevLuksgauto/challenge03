import { Link, useNavigate } from 'react-router-dom';
import arrow from '../../assets/arrow-right.png';
import phone1 from '../../assets/phone1.png';

interface CarouselCardProps {
  id: number;
  name: string;
}

const CarouselCard: React.FC<CarouselCardProps> = (props) => {
  const navigate = useNavigate();
  const { id, name } = props;

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
        {name.length > 24 ? <h1 className={classes.productName}>{name}</h1> : <h1 onClick={goTo} className={classes.productName2}>{name}</h1>}
        <Link className={classes.link} to='/shoppingcart'>Shop now <img src={arrow} alt="Arrow icon" /></Link>
      </div>
      <img onClick={goTo} className={classes.img} src={phone1} alt="Headphone picture" />
    </div>
  );
};

export default CarouselCard;