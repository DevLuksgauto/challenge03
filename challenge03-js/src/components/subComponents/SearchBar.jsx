import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../actions/FetchAction';

import { Search } from 'react-feather';
import classes from './SearchBar.module.css';
import SearchSugestion from "./SearchSugestion";


const SearchBar = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.reducer.data);
    const [ searchQuery, setSearchQuery ] = useState('');
    // const [ pageID, setpageID ] = useState('');
    const [suggestions, setSuggestions] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDataAndSetWidth = async () => {
        const fetchedData = await dispatch(fetchData());
        };    
        fetchDataAndSetWidth();
    }, [dispatch]);

    const SearchHandler = (e) => {
        setSearchQuery(e.target.value);
        
        const filteredSuggestions = data.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const product = data.find((product) =>
                product.name.toUpperCase() === searchQuery.toUpperCase()
            );

            if (product) {
                const pageID = `/products/${product.id}`;
                navigate(pageID);
            }
        }
    };

    return(
        <div className={classes.searchHeadphone}>
            <input className={classes.input}
                type='search'
                onChange={SearchHandler}
                onKeyPress={handleKeyPress}
                placeholder="Search headphones"
                />
            <Search size={20} className={classes.icon}/>
            {suggestions.length > 0 && searchQuery && (
                <SearchSugestion suggestions={suggestions}/>
            )}
        </div>
    )
};

export default SearchBar;