import { Link, useParams } from 'react-router-dom';
import { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartBag } from '../action/cartBagAction';
import { RootState } from '../reducers/rootReducer';

import classes from '../styleModules/ItemPage.module.css';
import HeaderWithoutTitle from './SubComponents/HeaderWithoutTitle';
import Reviews from './SubComponents/Reviews';
import Loading from './SubComponents/Loading';
import CarouselFeaturedProducts from './SubComponents/CarouselFeaturedProducts';
import FeaturesContainer from './SubComponents/FeaturesContainer';
import ItemPicCarousel from './SubComponents/ItemPicCarousel';

interface Review {
  id: string;
  user: string;
  description: string;
  rating: number;
}
interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  category: string;
  reviews: Review[];
}

const ItemPage: React.FC = () => {
  const {id}: any = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.reducer.data);
  const [showFeatures, setShowFeatures] = useState(false);

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
          <p className={classes.price}>{data[id].price.replace(/^\$/, "USD ")}</p>
          <h1 className={classes.productName}>{data[id].name}</h1>
          <div>
            <button className={classes.btn} onClick={overviewHandle}>Overview</button>
            <button className={classes.btn} onClick={featuresHandle}>Features</button>
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
                {data[id].reviews.map((review: Review) =>
                  <Reviews
                    key={review.id}
                    name={review.user}
                    description={review.description}
                    rating={review.rating}
                  />
                )}
              </div>
              <div className={classes.anotherProductsCarousel}>
                <div className={classes.anotherProductsContainer}>
                  <p className={classes.anotherProducts}>Another Products</p>
                  <Link onClick={scrollToTop} className={classes.link} to='/products'>See All</Link>
                </div>
                <CarouselFeaturedProducts />
              </div>
            </div>
          )}
          <button onClick={handleAddToCart} className={classes.addToCartBtn}><Link to='' className={classes.link2}>Add to Cart</Link></button>
        </div>
      ) : (
        <Loading />
      )}
    </Fragment>
  )
};

export default ItemPage;

