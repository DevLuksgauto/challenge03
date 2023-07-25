import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SubComponents/SearchBar";
import Loading from "./SubComponents/Loading";
import PopularProducts from "./SubComponents/PopularProducts";
import { ChevronLeft, ShoppingCart } from "react-feather";
import classes from "../styleModules/SearchPage.module.css";

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/home");
  };

  const data = useSelector((state: any) => state.reducer.data);

  const popularProducts: number[] = [];
  if (data.length > 0) {
    data.filter((item: any) => {
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
            <button
              aria-label="Comeback"
              onClick={handleBack}
              className={classes.btnNoStyle}
            >
              <ChevronLeft />
            </button>
            <h1 className={classes.title}>Search</h1>
            <button
              aria-label="Go to ShoppingCart"
              className={classes.btnNoStyle}
            >
              <ShoppingCart />
            </button>
          </header>
          <SearchBar />
          <h2 className={classes.popularProducts}>Popular Product</h2>
          {popularProducts.map((item) => (
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
