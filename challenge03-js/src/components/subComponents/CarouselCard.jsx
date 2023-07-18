import classes from './CarouselCard.module.css';
import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow-right.png';
import phone1 from '../../assets/phone1.png'

const CarouselCard = (props) => {
    return(
        <div className={classes.card}>
            <div>
                {props.name.length > 24 ? <h1 className={classes.productName}>{props.name}</h1>
                : <h1 className={classes.productName2}>{props.name}</h1>}
                <Link className={classes.link} to='/'>Shop now <img src={arrow}/></Link>
            </div>
            <img className={classes.img} src={phone1} alt="Headphone picture"/>
        </div>
    )
};

export default CarouselCard;