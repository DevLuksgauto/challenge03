import { Fragment } from "react";
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from "./subComponents/SearchBar";
import { ChevronLeft, MoreVertical, ShoppingCart } from "react-feather";
import SearchedItem from './subComponents/SearchedItem';
import classes from './SearchPage.module.css'

const SearchPage = () => {
    const navigate  = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }

    return (
        <Fragment>
            <header className={classes.header}>
                <button onClick={handleBack} className={classes.btnNoStyle}><ChevronLeft/></button>
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