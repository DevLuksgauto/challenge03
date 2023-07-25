import classes from './CarouselFPCard.module.css';
import cable1 from '../../assets/Cable1.png'
import { useNavigate } from 'react-router-dom';

const CarouselFPCard = (props) => {
    const navigate = useNavigate();
    const id = props.id
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goTo = () => {
        navigate(`/products/${id}`);
        scrollToTop();
    }

    return (
        <div className={classes.card}>
            <img onClick={goTo} className={classes.img} src={cable1} alt="Product Picture" />
            <p className={classes.productName}>{props.name}</p>
            <p className={classes.price}>{props.price.replace(/^\$/, "USD ")}</p>
        </div>
    )
};

export default CarouselFPCard;