import React, { useEffect, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { X, Sliders } from 'react-feather';
import ItensCategory from '../SubComponents/ItensCategory';

import 'react-spring-bottom-sheet/dist/style.css';
import classes from '../../styleModules/FilterButton.module.css';

interface Item {
  id: number;
  name: string;
  category: string;
  rating: number;
  created_at: string;
  price: string;
}

interface FilterButtonProps {
  allData: Item[];
  onFilter: (filteredData: Item[]) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ allData, onFilter }) => {
  const [open, setOpen] = useState(false);
  const handleOpenBottomSheet = () => {
    setOpen(!open);
  };

  const [filteredData, setFilteredData] = useState<Item[]>(allData);
  const categoryHeadphoneHandler = () => {
    setFilteredData(allData.filter(item => item.category === 'Headphones'));
  };
  const categoryheadbandHandler = () => {
    setFilteredData(allData.filter(item => item.category === 'Headsets'));
  };

  const [sortBy, setSortBy] = useState<string | null>(null);
  const handleSort = (sortType: string) => {
    setSortBy(sortType);
  };

  useEffect(() => {
    const sortData = (data: Item[]) => {
      switch (sortBy) {
        case 'popularity':
          return data.sort((a, b) => b.rating - a.rating);
        case 'newest':
          return data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        case 'oldest':
          return data.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
        case 'highPrice':
          return data.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
        case 'lowPrice':
          return data.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));  
        case 'review':
          return data.sort((a, b) => b.rating - a.rating);
        default:
          return data;
      }
    };

    setFilteredData(sortData([...allData]));
  }, [sortBy, allData]);

  const popularityHandler = () => {
    handleSort('popularity');
  };
  const newestHandler = () => {
    handleSort('newest');
  };
  const oldestHandler = () => {
    handleSort('oldest');
  };
  const highPriceHandler = () => {
    handleSort('highPrice');
  };
  const lowPriceHandler = () => {
    handleSort('lowPrice');
  };
  const reviewHandler = () => {
    handleSort('review');
  };

  const apllyFilterHandler = () => {
    onFilter(filteredData);
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenBottomSheet} className={classes.btnFilter}><Sliders size={17} />Filter</button>
      <BottomSheet open={open}>
        <div className={classes.filterContainer}>
          <h1 className={classes.title}>Filter <button onClick={handleOpenBottomSheet} className={classes.btnNoStyle}><X /></button></h1>
          <div className={classes.categoryContainer}>
            <p>Category</p>
            <ItensCategory
              headphone={categoryHeadphoneHandler}
              headband={categoryheadbandHandler}
            />
          </div>
          <p className={classes.sortP}>Sort By</p>
          <div className={classes.sortByContainer}>
            <button className={classes.SortBy} onClick={popularityHandler}>Popularity</button>
            <button className={classes.SortBy} onClick={newestHandler}>Newest</button>
            <button className={classes.SortBy} onClick={oldestHandler}>Oldest</button>
            <button className={classes.SortBy} onClick={highPriceHandler}>High Price</button>
            <button className={classes.SortBy} onClick={lowPriceHandler}>Low Price</button>
            <button className={classes.SortBy} onClick={reviewHandler}>Review</button>
          </div>
          <button className={classes.btnApplyFilter} onClick={apllyFilterHandler}>Apply Filter</button>
        </div>
      </BottomSheet>
    </>
  );
};

export default FilterButton;
