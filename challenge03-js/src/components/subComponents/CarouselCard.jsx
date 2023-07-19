import classes from './CarouselCard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import arrow from '../../assets/arrow-right.png';
import phone1 from '../../assets/phone1.png'

const CarouselCard = (props) => {
    const navigate = useNavigate();
    const id = props.id
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goTo = () => {
        navigate(`/products/${id}`);
        scrollToTop();
    }

    return(
        <div className={classes.card}>
            <div>
                {props.name.length > 24 ? <h1 className={classes.productName}>{props.name}</h1>
                : <h1 onClick={goTo} className={classes.productName2}>{props.name}</h1>}
                <Link className={classes.link} to='/shoppingcart'>Shop now <img src={arrow}/></Link>
            </div>
            <img onClick={goTo} className={classes.img} src={phone1} alt="Headphone picture"/>
        </div>
    )
};

export default CarouselCard;