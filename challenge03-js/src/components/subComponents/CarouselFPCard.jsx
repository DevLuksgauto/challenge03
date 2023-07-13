import classes from './CarouselFPCard.module.css';
import cable1 from '../../assets/Cable1.png';
import phone1 from '../../assets/phone1.png';
import star from '../../assets/star-filled.png';
const CarouselFPCard = (props) => {
    return (
        <div className={classes.card}>
            <img className={classes.img} src={props.name ? cable1 : phone1} alt="Product Picture" />
            <p className={classes.productName}>{props.name ? props.name : 'Product'}</p>
            <p className={classes.price}>{props.price ? props.price.replace(/^\$/, "USD ") : "USD 250"}</p>
            {props.name ? <p></p> : <div style={{display: 'flex',alignItems: 'center' ,margin: '0.5rem'}}><img style={{width: '0.6rem', height: '0.6em'}} src={star}/><p>5 Reviews</p></div>}
        </div>
    )
};

export default CarouselFPCard;