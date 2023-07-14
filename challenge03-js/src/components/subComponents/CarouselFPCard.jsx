import classes from './CarouselFPCard.module.css';
import cable1 from '../../assets/Cable1.png'

const CarouselFPCard = (props) => {
    return (
        <div className={classes.card}>
            <img className={classes.img} src={cable1} alt="Product Picture" />
            <p className={classes.productName}>{props.name}</p>
            <p className={classes.price}>{props.price.replace(/^\$/, "USD ")}</p>
        </div>
    )
};

export default CarouselFPCard;