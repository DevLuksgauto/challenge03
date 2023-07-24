import { FC } from 'react';
import classes from './ItensCategory.module.css';

interface ItensCategoryProps {
    categories: string[];
}

const ItensCategory: FC<ItensCategoryProps> = ({ categories }) => {
    return (
        <div className={classes.btnList}>
            {categories.map((category, index) => (
                <button key={index} className={classes.btnProduct}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default ItensCategory;
