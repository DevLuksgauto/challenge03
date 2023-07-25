import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../action/fetchAction';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../action/types'

import LogoutPopUp from './SubComponents/LogoutPopUp';
import Loading from './SubComponents/Loading';
import CarouselProducts from './SubComponents/CarouselProducts';
import SearchBar from "./SubComponents/SearchBar";
import ItensCategory from "./SubComponents/ItensCategory";
import CarouselFeaturedProducts from "./SubComponents/CarouselFeaturedProducts";
import MenuPopUp from './SubComponents/MenuPopUp';
import { AlignLeft } from 'react-feather';

import classes from '../styleModules/FirstPage.module.css';
import userUnknow from '../assets/cryingCat404.jpg';
import greenIcon from '../assets/greenIcon.png';

interface Product {
  imageUrl: string;
  rating: number;
  price: string;
  name: string;
  description: string;
  category: string;
  created_at: string;
  reviews: Review[];
  id: number;
}

interface Review {
  user: string;
  description: string;
  rating: number;
  date: string;
  id: number;
}

interface RootState {
  reducer: {
    data: Product[];
  };
}

const FirstPage: React.FC = () => {
  const [user] = useAuthState(auth);
  const username = user?.displayName || '';
  const usuario = user?.email?.split('@')[0] || '';
  const userPhoto = user?.photoURL;

  const navigate = useNavigate();
  const [menuBar, setMenuBar] = useState(false);
  const showMenuHandler = () => {
    setMenuBar((prevState) => !prevState);
  };
  const [logout, setLogout] = useState(false);
  const userLogoutHandler = () => {
    setLogout((prevState) => !prevState);
  };
  const logoutHandler = () => {
    auth.signOut();
    navigate('/');
  };

  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.reducer.data);
  useEffect(() => {
    const fetchDataAndSetWidth = async () => {
      await dispatch(fetchData());
    };
    fetchDataAndSetWidth();
  }, [dispatch]);

  const [filteredData, setFilteredData] = useState<Product[]>(data);
  const categoryHeadphoneHandler = () => {
    setFilteredData(data.filter((item) => item.category === 'Headphones'));
  };
  const categoryheadbandHandler = () => {
    setFilteredData(data.filter((item) => item.category === 'Headsets'));
  };

  return (
    <Fragment>
      {filteredData.length > 0 ? (
        <div>
          <header className={classes.header}>
            <button onClick={showMenuHandler} className={classes.btnNoStyle}><AlignLeft/></button>
            <p><img src={greenIcon} alt='Logo'/> Audio</p>
            <button onClick={userLogoutHandler} className={classes.btnNoStyle}>
              <img className={classes.userPhoto} src={userPhoto || userUnknow} alt="UserPhoto" referrerPolicy='no-referrer'/>
            </button>
          </header>
          {logout ? <LogoutPopUp handleLogout={logoutHandler} /> : <p></p>}
          {menuBar ? <MenuPopUp /> : <p></p>}
          <p className={classes.salute}>Hi, {username || usuario}</p>
          <h1 className={classes.title}>What are you looking for today?</h1>
          <SearchBar/>
          <div className={classes.carousselContainer}>
            <ItensCategory
              headphone={categoryHeadphoneHandler}
              headband={categoryheadbandHandler}
            />
            <CarouselProducts filteredData={filteredData}/>
            <div className={classes.FPContainer}>
              <h2 className={classes.FeaturedProducts}>Featured Products</h2>
              <Link className={classes.link} to='/products'>See All</Link>
            </div>
            <CarouselFeaturedProducts/>
          </div>
        </div>
      ) : (
        <Loading/>
      )}
    </Fragment>
  );
};

export default FirstPage;
