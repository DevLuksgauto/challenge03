import { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/FetchAction';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';

import LogoutPopUp from './subComponents/LogoutPopUp';
import Loading from './subComponents/Loading';
import CarouselProducts from './subComponents/CarouselProducts';
import SearchBar from "./subComponents/SearchBar";
import ItensCategory from "./subComponents/ItensCategory";
import CarouselFeaturedProducts from "./subComponents/CarouselFeaturedProducts";
import MenuPopUp from './subComponents/MenuPopUp';
import { AlignLeft } from 'react-feather';
import { FacebookAuthProvider } from 'firebase/auth';

import classes from './FirstPage.module.css';
import userUnknow from '../assets/cryingCat404.jpg';
import greenIcon from '../assets/greenIcon.png'; 

const FirstPage = () => {
    const [ user ] = useAuthState(auth);
    const username = user.displayName;
    const usuario = user.email.split('@')[0]
    const userPhoto = user.photoURL;

    const navigate =useNavigate();
    const [ menuBar, setMenuBar ] = useState(false);
    const showMenuHandler = () => {
        menuBar ? setMenuBar(false) : setMenuBar(true)
    }
    const [ logout, setLogout] = useState(false)
    const userLogoutHandler = () => {
        logout ? setLogout(false) : setLogout(true)
    }
    const logoutHandler = () => {
        auth.signOut();
        navigate('/');
    }

    const dispatch = useDispatch();
    const data = useSelector((state) => state.reducer.data);
    useEffect(() => {
        const fetchDataAndSetWidth = async () => {
        const fetchedData = await dispatch(fetchData());
        };    
        fetchDataAndSetWidth();
    }, [dispatch]);
    
    const [filteredData, setFilteredData] = useState(data);
    const categoryHeadphoneHandler = () => {
        setFilteredData(data.filter(item => item.category === 'Headphones'))
    }
    const categoryheadbandHandler = () => {
        setFilteredData(data.filter(item => item.category === 'Headsets'))
    }


    return (
        <Fragment>
            {data.length > 0 ?
            <div>
                <header className={classes.header}>
                    <button onClick={showMenuHandler} className={classes.btnNoStyle}><AlignLeft/></button>
                    <p><img src={greenIcon}/> Audio</p>
                    <button onClick={userLogoutHandler} className={classes.btnNoStyle}>
                        <img className={classes.userPhoto} src={userPhoto || userUnknow} alt="UserPhoto" referrerPolicy='no-refferrer'/>
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
            : <Loading/>}
        </Fragment>
    )
};

export default FirstPage;