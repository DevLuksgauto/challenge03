import { Fragment } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchBar from "./subComponents/SearchBar";
import Loading from './subComponents/Loading'


import PopularProducts from './subComponents/PopularProducts';
import { ChevronLeft, ShoppingCart } from "react-feather";
import classes from './SearchPage.module.css'

const SearchPage = () => {
    const data = useSelector((state) => state.reducer.data);
    const navigate  = useNavigate()
    const handleBack = () => {
        navigate('/home')
    }

const popularProducts = [];
    if (data.length > 0){
        data.filter((item) => {
            if ( item.rating > 4){
                popularProducts.push(item.id)
            }
        })
    }

    return (
        <Fragment>
            {data.length > 0 ?
            <div>
                <header className={classes.header}>
                    <button onClick={handleBack} className={classes.btnNoStyle}><ChevronLeft/></button>
                    <h1 className={classes.title}>Search</h1>
                    <button className={classes.btnNoStyle}><ShoppingCart/></button>
                </header>
                <SearchBar/>
                    <h2 className={classes.popularProducts}>Popular Product</h2>
                    {popularProducts.map(item =>(
                        <PopularProducts
                        key={data[item].id}
                        name={data[item].name}
                        price={data[item].price}
                        rating={data[item].rating}
                        reviews={data[item].reviews}
                        id={data[item].id}
                        />
                    ))
                    }
            </div>
            :
            <Loading/>}
        </Fragment>
    )
};

export default SearchPage;