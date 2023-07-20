import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../actions/FetchAction';

import { Search } from 'react-feather';
import classes from './SearchBar.module.css';


const SearchBar = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.reducer.data);
    const [ searchQuery, setSearchQuery ] = useState('');
    const [ pageID, setpageID ] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDataAndSetWidth = async () => {
        const fetchedData = await dispatch(fetchData());
        };    
        fetchDataAndSetWidth();
    }, [dispatch]);

    const SearchHandler = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleKeyPress = (e) =>{
        if (e.key === 'Enter') {
            for (let i = 0; i < data.length; i++){
                if (data[i].name.toUpperCase() === searchQuery.toUpperCase()){
                    setpageID(`/${data[i].id}`);
                    navigate(pageID);
                }
            }
        }
    }

    return(
        <div className={classes.searchHeadphone}>
            <input className={classes.input}
                type='search'
                onChange={SearchHandler}
                onKeyPress={handleKeyPress}
                placeholder="Search headphones"
                />
            <Search size={20} className={classes.icon}/>
        </div>
    )
};

export default SearchBar;