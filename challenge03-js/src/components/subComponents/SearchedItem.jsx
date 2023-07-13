import { Fragment } from "react";
import { MoreVertical } from "react-feather";
import phone1 from '../../assets/phone1.png';
import star from '../../assets/star-filled.png'
import classes from './SearchedItem.module.css';

const SearchedItem = () => {
    return (
        <div className={classes.itemContainer}>
            <img className={classes.earphoneImg} src={phone1} alt="Earhphone Pic" />
            <div>
                <p>Product name</p>
                <p>Price</p>
                <div className={classes.reviewContainer}>
                    <img className={classes.starImg} src={star} alt="Star picture" />
                    <p>Reviews</p>
                    <button className={classes.btnNoStyle}><MoreVertical/></button>
                </div>
            </div>
        </div>
    )
};

export default SearchedItem;