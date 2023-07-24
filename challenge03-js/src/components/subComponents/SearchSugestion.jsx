import { useNavigate } from 'react-router-dom';

import classes from './SearchSugestion.module.css';
const SearchSugestion = ({ suggestions }) => {
    const navigate = useNavigate();
    
    return (
        <ul className={classes.suggestions}>
            {suggestions.map((product, index) => (
                <li
                    key={product.id}
                    className={index % 2 === 0 ? classes.even : classes.odd}
                    onClick={() => navigate(`/products/${product.id}`)}
                    >
                    {product.name}
                </li>
      ))}
    </ul>
  );
};

export default SearchSugestion;
