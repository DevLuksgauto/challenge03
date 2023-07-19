import { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/FetchAction';
import { useNavigate } from 'react-router-dom';
import FilterButton from './subComponents/FilterButton'
import CarouselFPCard from './subComponents/CarouselFPCard';
import Loading from './subComponents/Loading';
import classes from './ProductsPage.module.css';
import HeaderWithoutTitle from './subComponents/HeaderWithoutTitle';

const ProductsPage = (props) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);

    useEffect(() => {
        const fetchDataAndSetWidth = async () => {
        const fetchedData = await dispatch(fetchData());
        };    
        fetchDataAndSetWidth();
    }, [dispatch]);

    return(
        <Fragment>
            {data.length > 0 ? 
            <div>
                <HeaderWithoutTitle/>
                <p className={classes.title}>Featured products</p>
                <p className={classes.subTitle}>See all products</p>
                <FilterButton/>
                <div className={classes.ProductsContainer}>
                    {data.map(item => (
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