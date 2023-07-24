import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/FetchAction';
import { addToCartBag } from '../actions/cartBagAction';

import classes from './ItemPage.module.css';
import HeaderWithoutTitle from './subComponents/HeaderWithoutTitle';
import Reviews from './subComponents/Reviews';
import Loading from './subComponents/Loading';
import CarouselFeaturedProducts from './subComponents/CarouselFeaturedProducts'
import FeaturesContainer from './subComponents/FeaturesContainer';
import ItemPicCarousel from './subComponents/ItemPicCarousel';

const ItemPage = () => {
    const navigate  = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.reducer.data);
    const cartBag = useSelector((state) => state.cart.cartBag);
    const [ showFeatures, setShowFeatures ] = useState(false);
    
    useEffect(() => {
        const fetchDataAndSetWidth = async () => {
            const fetchedData = await dispatch(fetchData());
        };    
        fetchDataAndSetWidth();
    }, [dispatch]);
    
    const handleBack = () => {
        navigate(-1);
    };

    const handleAddToCart = () => {
        dispatch(addToCartBag(data[id]));
    }

    const featuresHandle = () => {
            setShowFeatures(true);
        }
    const overviewHandle = () => {
            setShowFeatures(false)
        }
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };


    return(
        <Fragment>
            {data.length ? 
            <div>
                <HeaderWithoutTitle/>
                <p className={classes.price}>{data[id].price.replace(/^\$/, "USD ")}</p>
                <h1 className={classes.productName}>{data[id].name}</h1>
                <div>
                <button className={classes.btn} onClick={overviewHandle}>Overview</button>
                <button className={classes.btn} onClick={featuresHandle}>Features</button>
                </div>
                {showFeatures ?  <FeaturesContainer
                        feature={data[id].description}
                        category={data[id].category}
                        />
                :
                <div>
                    <ItemPicCarousel/>
                    <div className={classes.reviewsContainer}>
                        <p className={classes.review}>Reviews</p>
                        {data[id].reviews.map((review) =>
                        <Reviews
                        key={review.id}
                        name={data[id].reviews[review.id].user}
                        description={data[id].reviews[review.id].description}
                        rating={data[id].reviews[review.id].rating}
                    />
                        )}
                    </div>
                    <div className={classes.anotherProductsCarousel}>
                        <div className={classes.anotherProductsContainer}>
                            <p className={classes.anotherProducts}>Another Products</p>
                            <Link onClick={scrollToTop} className={classes.link} to='/products'>See All</Link>
                        </div>
                            <CarouselFeaturedProducts/>
                    </div>
                </div>}
                <button onClick={()=>handleAddToCart(data[id])} className={classes.addToCartBtn}><Link className={classes.link2}>Add to Cart</Link></button>
            </div>
            :
            <Loading/>}
        </Fragment>
    )
};

export default ItemPage;