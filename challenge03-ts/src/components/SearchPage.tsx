import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchData } from '../actions/FetchAction';
import SearchBar from "./subComponents/SearchBar";
import Loading from './subComponents/Loading';
import PopularProducts from './subComponents/PopularProducts';
import { ChevronLeft, ShoppingCart } from "react-feather";
import classes from './SearchPage.module.css';

interface RootState {
  reducer: {
    data: any[]; // Replace 'any' with the actual data type of your 'data' state
  };
}

const SearchPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home');
  }

  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.reducer.data);

  useEffect(() => {
    const fetchDataAndSetWidth = async () => {
      await dispatch(fetchData());
    };
    fetchDataAndSetWidth();
  }, [dispatch]);

  const popularProducts: number[] = [];
  if (data.length > 0) {
    data.filter((item) => {
      if (item.rating > 4) {
        popularProducts.push(item.id);
      }
    });
  }

  return (
    <Fragment>
      {data.length > 0 ? (
        <div>
          <header className={classes.header}>
            <button onClick={handleBack} className={classes.btnNoStyle}><ChevronLeft /></button>
            <h1 className={classes.title}>Search</h1>
            <button className={classes.btnNoStyle}><ShoppingCart /></button>
          </header>
          <SearchBar />
          <h2 className={classes.popularProducts}>Popular Product</h2>
          {popularProducts.map(item => (
            <PopularProducts
              key={data[item].id}
              name={data[item].name}
              price={data[item].price}
              rating={data[item].rating}
              reviews={data[item].reviews}
              id={data[item].id}
            />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </Fragment>
  );
};

export default SearchPage;