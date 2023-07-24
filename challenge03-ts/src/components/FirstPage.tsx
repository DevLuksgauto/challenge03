import { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../action/fetchAction';
import { Link } from 'react-router-dom';
import { AlignLeft } from 'react-feather';

import Loading from './SubComponents/Loading';
import CarouselProducts from './SubComponents/CarouselProducts';
import SearchBar from "./SubComponents/SearchBar";
import ItensCategory from "./SubComponents/ItensCategory";
import CarouselFeaturedProducts from "./SubComponents/CarouselFeaturedProducts";
import MenuPopUp from './SubComponents/MenuPopUp';

import classes from '../styleModules/FirstPage.module.css';
import greenIcon from '../assets/greenIcon.png';

interface RootState {
  reducer: {
    data: any[]; // Replace 'any' with the actual data type of your 'data' state
  };
}

const FirstPage: React.FC = () => {
  const [menuBar, setMenuBar] = useState<boolean>(false);
  const showMenuHandler = () => {
    setMenuBar((prev) => !prev);
  };

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
          <header className={classes.header}>
            <button onClick={showMenuHandler} className={classes.btnNoStyle}>
              <AlignLeft />
            </button>
            <p>
              <img src={greenIcon} alt="Logo" /> Audio
            </p>
            <p>Photo</p>
          </header>
          {menuBar ? <MenuPopUp /> : <p></p>}
          {/* Mudar o Fetch do produto pelo fecth do usuario */}
          {/* {data.length > 0 ? <p className={classes.salute}>Hi, {data[0].reviews[0].user}</p> : <p>Loading name</p>} */}
          <p className={classes.salute}>Hi, Lucas</p>
          <h1 className={classes.title}>What are you looking for today?</h1>
          <SearchBar />
          <div className={classes.carousselContainer}>
            <ItensCategory />
            <CarouselProducts />
            <div className={classes.FPContainer}>
              <h2 className={classes.FeaturedProducts}>Featured Products</h2>
              <Link className={classes.link} to='/products'>See All</Link>
            </div>
            <CarouselFeaturedProducts />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Fragment>
  );
};

export default FirstPage;
