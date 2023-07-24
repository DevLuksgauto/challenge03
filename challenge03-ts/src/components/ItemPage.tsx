import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../action/fetchAction';
import { addToCartBag } from '../action/cartBagAction';

import classes from './ItemPage.module.css';
import HeaderWithoutTitle from './subComponents/HeaderWithoutTitle';
import Reviews from './SubComponents/Reviews';
import Loading from './SubComponents/Loading';
import CarouselFeaturedProducts from './SubComponents/CarouselFeaturedProducts';
import FeaturesContainer from './SubComponents/FeaturesContainer';
import ItemPicCarousel from './SubComponents/ItemPicCarousel';

interface RootState {
  reducer: {
    data: any[]; // Replace 'any' with the actual data type of your 'data' state
  };
  cart: {
    cartBag: any[]; // Replace 'any' with the actual data type of your 'cartBag' state
  };
}

const ItemPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.reducer.data);
  const cartBag = useSelector((state: RootState) => state.cart.cartBag);
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    const fetchDataAndSetWidth = async () => {
      await dispatch(fetchData());
    };
    fetchDataAndSetWidth();
  }, [dispatch]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleAddToCart = () => {
    dispatch(addToCartBag(data[id]));
  };

  const featuresHandle = () => {
    setShowFeatures(true);
  };
  const overviewHandle = () => {
    setShowFeatures(false);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fragment>
      {data.length ? (
        <div>
          <HeaderWithoutTitle />
          <p className={classes.price}>{data[id].price.replace(/^\$/, 'USD ')}</p>
          <h1 className={classes.productName}>{data[id].name}</h1>
          <div>
            <button className={classes.btn} onClick={overviewHandle}>
              Overview
            </button>
            <button className={classes.btn} onClick={featuresHandle}>
              Features
            </button>
          </div>
          {showFeatures ? (
            <FeaturesContainer
              feature={data[id].description}
              category={data[id].category}
            />
          ) : (
            <div>
              <ItemPicCarousel />
              <div className={classes.reviewsContainer}>
                <p className={classes.review}>Reviews</p>
                {data[id].reviews.map((review: any) => (
                  <Reviews
                    key={review.id}
                    name={data[id].reviews[review.id].user}
                    description={data[id].reviews[review.id].description}
                    rating={data[id].reviews[review.id].rating}
                  />
                ))}
              </div>
              <div className={classes.anotherProductsCarousel}>
                <div className={classes.anotherProductsContainer}>
                  <p className={classes.anotherProducts}>Another Products</p>
                  <Link onClick={scrollToTop} className={classes.link} to='/products'>
                    See All
                  </Link>
                </div>
                <CarouselFeaturedProducts />
              </div>
            </div>
          )}
          <button onClick={handleAddToCart} className={classes.addToCartBtn}>
            <Link className={classes.link2}>Add to Cart</Link>
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </Fragment>
  );
};

export default ItemPage;
