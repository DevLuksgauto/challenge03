import { useNavigate } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/FetchAction';

import classes from './ItemPage.module.css';
import HeaderWithoutTitle from './subComponents/HeaderWithoutTitle';
import Reviews from './subComponents/Reviews';
import Loading from './subComponents/Loading';
import CarouselFeaturedProducts from './subComponents/CarouselFeaturedProducts'
import FeaturesContainer from './subComponents/FeaturesContainer';
import ItemPicCarousel from './subComponents/ItemPicCarousel';

const ItemPage = () => {
    const navigate  = useNavigate()
    const handleBack = () => {
        navigate(-1);
    };

    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    useEffect(() => {
        const fetchDataAndSetWidth = async () => {
        const fetchedData = await dispatch(fetchData());
        };    
        fetchDataAndSetWidth();
    }, [dispatch]);

    const [ showFeatures, setShowFeatures ] = useState(false);
    const featuresHandle = () => {
            setShowFeatures(true);
        }
    const overviewHandle = () => {
            setShowFeatures(false)
        }

    return(
        <Fragment>
            {data.length ? 
            <div>
                <HeaderWithoutTitle/>
                <p className={classes.price}>{data[0].price.replace(/^\$/, "USD ")}</p>
                <h1 className={classes.productName}>{data[0].name}</h1>
                <div>
                <button className={classes.btn} onClick={overviewHandle}>Overview</button>
                <button className={classes.btn} onClick={featuresHandle}>Features</button>
                </div>
                {showFeatures ?  <FeaturesContainer
                        feature={data[0].description}
                        category={data[0].category}
                        />
                :
                <div>
                    <ItemPicCarousel/>
                    <div className={classes.reviewsContainer}>
                        <p className={classes.review}>Reviews</p>
                        <Reviews
                            name={data[0].reviews[0].user}
                            description={data[0].reviews[0].description}
                            rating={data[0].reviews[0].rating}
                        />
                    </div>
                    <div className={classes.anotherProductsCarousel}>
                        <div className={classes.anotherProductsContainer}>
                            <p className={classes.anotherProducts}>Another Products</p>
                            <Link className={classes.link} to='/products'>See All</Link>
                        </div>
                            <CarouselFeaturedProducts/>
                    </div>
                </div>}
                <button className={classes.addToCartBtn}><Link className={classes.link2}>Add to Cart</Link></button>
            </div>
            :
            <Loading/>}
        </Fragment>
    )
};

export default ItemPage;