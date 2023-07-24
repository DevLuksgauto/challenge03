import { useNavigate } from 'react-router-dom';

import classes from './SearchSugestion.module.css';
const SearchSugestion = ({ suggestions }) => {
    const navigate = useNavigate();
    
    return (
        <ul className={classes.suggestions}>
            {suggestions.map((product) => (
                <li
                    key={product.id}
                    onClick={() => navigate(`/products/${product.id}`)}
                    >
                    {product.name}
                </li>
      ))}
    </ul>
  );
};

export default SearchSugestion;
