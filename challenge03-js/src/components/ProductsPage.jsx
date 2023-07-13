import { ChevronLeft, ShoppingCart, Sliders } from 'react-feather'
import FilterPopUp from './subComponents/FilterPopUp';
import CarouselFPCard from './subComponents/CarouselFPCard'
import classes from './ProductsPage.module.css';
import { useState } from 'react';

const ProductsPage = (props) => {
    const array = [1,2,3,4,5]
    const [ filterPopUp, setFilterPopUp ] = useState(false);

    const filterHandler = () => {
        if (filterPopUp === false){
            setFilterPopUp(true);
        } else {
            setFilterPopUp(false)
        }
    }
    
    return(
        <div>
            <header className={classes.header}>
                <button className={classes.btnNoStyle}><ChevronLeft/></button>
                <button className={classes.btnNoStyle}><ShoppingCart/></button>
            </header>
            <p className={classes.title}>HeadPhone</p>
            <p className={classes.subTitle}>TMA Wireless</p>
            <button onClick={filterHandler} className={classes.btnFilter}><Sliders size={17}/>Filter</button>
            {filterPopUp ? <FilterPopUp/> : <p></p>}
            
            <div className={classes.ProductsContainer}>
                {array.map(item => (
                    <div className={classes.productsFilter} key={item}>
                        <CarouselFPCard />
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ProductsPage;