import { X } from 'react-feather'
import classes from './FilterPopUp.module.css';
import ItensCategory from './ItensCategory';

const FilterPopUp = () => {
    return(
        <div className={classes.filterContainer}>
            <h1 className={classes.title}>Filter <button className={classes.btnNoStyle}><X/></button></h1>
            <div className={classes.category}>
                <p>Category</p>
                <ItensCategory/>
            </div>
            <p className={classes.sortP}>Sort By</p>
            <div className={classes.sortByContainer}>
                <button className={classes.SortBy}>Popularity</button>
                <button className={classes.SortBy}>Newest</button>
                <button className={classes.SortBy}>Oldest</button>
                <button className={classes.SortBy}>High Price</button>
                <button className={classes.SortBy}>Low Price</button>
                <button className={classes.SortBy}>Review</button>
            </div>
            <button className={classes.btnApplyFilter}>Apply Filter</button>
        </div>
    )
};

export default FilterPopUp;