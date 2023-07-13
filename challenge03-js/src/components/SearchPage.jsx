import { ChevronLeft, MoreVertical, ShoppingCart } from "react-feather";
import SearchBar from "./subComponents/SearchBar";
import SearchedItem from './subComponents/SearchedItem'
import { Fragment } from "react";
import classes from './SearchPage.module.css'

const SearchPage = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <button className={classes.btnNoStyle}><ChevronLeft/></button>
                <h1 className={classes.title}>Search</h1>
                <button className={classes.btnNoStyle}><ShoppingCart/></button>
            </header>
            <SearchBar/>
                <h2 className={classes.popularProducts}>Popular Product</h2>
                <SearchedItem/>
        </Fragment>
    )
};

export default SearchPage;