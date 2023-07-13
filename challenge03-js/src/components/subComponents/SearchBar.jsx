import { Fragment } from "react";
import classes from './SearchBar.module.css';
import { Search } from 'react-feather';


const SearchBar = () => {
    return(
        <div className={classes.searchHeadphone}>
            <input className={classes.input} type='search' placeholder="Search headphones"/>
            <Search size={20} className={classes.icon}/>
        </div>
    )
};

export default SearchBar;