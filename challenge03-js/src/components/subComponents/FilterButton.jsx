import { useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet';
import { X, Sliders } from 'react-feather';
import ItensCategory from './ItensCategory';

import 'react-spring-bottom-sheet/dist/style.css';
import classes from './FilterButton.module.css';

const FilterButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpenBottomSheet = () => {
    !open ? setOpen(true) : setOpen(false)
  };

  return (
    <>
      <button onClick={handleOpenBottomSheet} className={classes.btnFilter}><Sliders size={17}/>Filter</button>
      <BottomSheet open={open}>
        <div className={classes.filterContainer}>
              <h1 className={classes.title}>Filter <button onClick={handleOpenBottomSheet} className={classes.btnNoStyle}><X/></button></h1>
              <div className={classes.categoryContainer}>
                  <p>Category</p>
                  <ItensCategory/>
              </div>
              <p className={classes.sortP}>Sort By</p>
              <div className={classes.sortByContainer}>
                  <button className={classes.SortBy}>Popularity</button>
                  <button className={classes.SortBy}>Newest</button>
                  <button className={classes.SortBy}>Oldest</button>
                  <button className={classes.SortBy}>High Price</button>
                  <button className={classes.SortBy}>Low Price</button>
                  <button className={classes.SortBy}>Review</button>
              </div>
              <button className={classes.btnApplyFilter}>Apply Filter</button>
          </div>
      </BottomSheet>
    </>
  )
}

export default FilterButton;