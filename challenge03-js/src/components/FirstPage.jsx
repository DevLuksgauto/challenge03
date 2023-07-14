import { useState, useEffect, Fragment } from "react";
import { AlignLeft } from 'react-feather';
import axios from "axios";

import CarouselProducts from './subComponents/CarouselProducts';
import SearchBar from "./subComponents/SearchBar";
import ItensCategory from "./subComponents/ItensCategory";
import CarouselFeaturedProducts from "./subComponents/CarouselFeaturedProducts";

import classes from './FirstPage.module.css'
import greenIcon from '../assets/greenIcon.png'

const FirstPage = () => {
    const [ productsData, setProductsData ] = useState([]);

    useEffect(() => {
        axios.get("https://run.mocky.io/v3/15d284a1-db22-4fa9-970b-a6ba468b93d6")
            .then(res => setProductsData(res.data))
    },[])

    return (
        <Fragment>
            <header className={classes.header}>
                <button className={classes.btnNoStyle}><AlignLeft/></button>
                <p><img src={greenIcon}/> Audio</p>
                <p>Photo</p>
            </header>
            {/* Mudar o Fetch do produto pelo fecth do usuario */}
            {productsData.length > 0 ? <p className={classes.salute}>Hi, {productsData[0].reviews[0].user}</p> : <p>Loading name</p>}
            <h1 className={classes.title}>What are you looking for today?</h1>
            <SearchBar/>
            <div className={classes.carousselContainer}>
                <ItensCategory/>
                <CarouselProducts/>
                <div className={classes.FPContainer}>
                    <h2 className={classes.FeaturedProducts}>Featured Products</h2>
                    <p>See All</p>
                </div>
                    <CarouselFeaturedProducts/>
            </div>
        </Fragment>
    )
};

export default FirstPage;