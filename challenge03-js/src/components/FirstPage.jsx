import { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/FetchAction';
import { Link } from 'react-router-dom'
import { AlignLeft } from 'react-feather';

import Loading from './subComponents/Loading';
import CarouselProducts from './subComponents/CarouselProducts';
import SearchBar from "./subComponents/SearchBar";
import ItensCategory from "./subComponents/ItensCategory";
import CarouselFeaturedProducts from "./subComponents/CarouselFeaturedProducts";
import MenuPopUp from './subComponents/MenuPopUp';

import classes from './FirstPage.module.css'
import greenIcon from '../assets/greenIcon.png'

const FirstPage = () => {
    const [ menuBar, setMenuBar ] = useState(false);
    const showMenuHandler = () => {
        menuBar ? setMenuBar(false) : setMenuBar(true)
    }

    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    useEffect(() => {
        const fetchDataAndSetWidth = async () => {
        const fetchedData = await dispatch(fetchData());
        };    
        fetchDataAndSetWidth();
    }, [dispatch]);
    

    return (
        <Fragment>
            {data.length > 0 ?
            <div>
                <header className={classes.header}>
                    <button onClick={showMenuHandler} className={classes.btnNoStyle}><AlignLeft/></button>
                    <p><img src={greenIcon}/> Audio</p>
                    <p>Photo</p>
                </header>
                {menuBar ? <MenuPopUp /> : <p></p>}
                {/* Mudar o Fetch do produto pelo fecth do usuario */}
                {data.length > 0 ? <p className={classes.salute}>Hi, {data[0].reviews[0].user}</p> : <p>Loading name</p>}
                <h1 className={classes.title}>What are you looking for today?</h1>
                <SearchBar/>
                <div className={classes.carousselContainer}>
                    <ItensCategory/>
                    <CarouselProducts/>
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