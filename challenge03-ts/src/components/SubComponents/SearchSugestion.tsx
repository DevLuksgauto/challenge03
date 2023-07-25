import { useNavigate } from 'react-router-dom';

import classes from '../../styleModules/SearchSugestion.module.css';

interface Product {
  id: number;
  name: string;
  // Adicione outros campos relevantes do produto aqui, se houver.
}

interface SearchSuggestionProps {
  suggestions: Product[];
}

const SearchSugestion: React.FC<SearchSuggestionProps> = ({ suggestions }) => {
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
