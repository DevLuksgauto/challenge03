import { useState, ChangeEvent, KeyboardEvent } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Search } from 'react-feather';
import classes from '../../styleModules/SearchBar.module.css';
import SearchSugestion from "../SubComponents/SearchSugestion";

interface Product {
id: number;
name: string;
}

const SearchBar: React.FC = () => {
    const data = useSelector((state: { reducer: { data: Product[] } }) => state.reducer.data);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [suggestions, setSuggestions] = useState<Product[]>([]);
    const navigate = useNavigate();

    const SearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        const filteredSuggestions = data.filter((product) =>
            product.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
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

    return (
        <div className={classes.searchHeadphone}>
            <input
                className={classes.input}
                type='search'
                value={searchQuery}
                onChange={SearchHandler}
                onKeyPress={handleKeyPress}
                placeholder="Search headphones"
            />
            <Search size={20} className={classes.icon} />
            {suggestions.length > 0 && searchQuery && (
                <SearchSugestion suggestions={suggestions} />
            )}
        </div>
    );
};

export default SearchBar;
