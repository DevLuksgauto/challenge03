import { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';

import FilterButton from './subComponents/FilterButton';
import CarouselFPCard from './subComponents/CarouselFPCard';
import Loading from './subComponents/Loading';
import classes from './ProductsPage.module.css';
import HeaderWithoutTitle from './subComponents/HeaderWithoutTitle';

const ProductsPage = () => {
    const data = useSelector((state) => state.reducer.data);
    const [filteredData, setFilteredData] = useState(data);
    const handleFilter = (filteredData) => {
        setFilteredData(filteredData);
    };

    return(
        <Fragment>
            {filteredData.length > 0 ? 
            <div>
                <HeaderWithoutTitle/>
                <p className={classes.title}>Featured products</p>
                <p className={classes.subTitle}>See all products</p>
                <FilterButton
                    allData={data}
                    onFilter={handleFilter}
                />
                <div className={classes.ProductsContainer}>
                    {filteredData.map(item => (
                        <div className={classes.productsFilter} key={item.id}>
                            <CarouselFPCard
                            name={data[item.id].name}
                            price={data[item.id].price}
                            id={data[item.id].id}
                            />
                        </div>
                    ))}
                </div>
            </div> : <Loading/>}
        </Fragment>
    )
};

export default ProductsPage;