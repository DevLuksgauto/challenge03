import classes from './CarouselCard.module.css';
import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow-right.png';
import phone1 from '../../assets/phone1.png'

const CarouselCard = () => {
    return(
        <div className={classes.card}>
            <div>
                <h1 className={classes.productName}>TMA-2 Modular Headphone</h1>
                <Link className={classes.link} to='/'>Shop now <img src={arrow}/></Link>
            </div>
            <img className={classes.img} src={phone1} alt="Headphone picture"/>
        </div>
    )
};

export default CarouselCard;