import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartBag } from '../actions/cartBagAction';
import { fetchData } from '../action/fetchAction';

import FilterButton from './SubComponents/FilterButton';
import CarouselFPCard from './SubComponents/CarouselFPCard';
import Loading from './SubComponents/Loading';
import classes from './ProductsPage.module.css';
import HeaderWithoutTitle from './SubComponents/HeaderWithoutTitle';

interface RootState {
  reducer: {
    data: any[]; // Replace 'any' with the actual data type of your 'data' state
  };
}

const ProductsPage: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.reducer.data);

  useEffect(() => {
    const fetchDataAndSetWidth = async () => {
      await dispatch(fetchData());
    };
    fetchDataAndSetWidth();
  }, [dispatch]);

  return (
    <Fragment>
      {data.length > 0 ? (
        <div>
          <HeaderWithoutTitle />
          <p className={classes.title}>Featured products</p>
          <p className={classes.subTitle}>See all products</p>
          <FilterButton />
          <div className={classes.ProductsContainer}>
            {data.map((item) => (
              <div className={classes.productsFilter} key={item.id}>
                <CarouselFPCard
                  name={data[item.id].name}
                  price={data[item.id].price}
                  id={data[item.id].id}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Fragment>
  );
};

export default ProductsPage;
