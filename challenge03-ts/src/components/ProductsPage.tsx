import { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { RootState, Item } from '../reducers/rootReducer';

import FilterButton from './SubComponents/FilterButton';
import CarouselFPCard from './SubComponents/CarouselFPCard';
import Loading from './SubComponents/Loading';
import classes from '../styleModules/ProductsPage.module.css';
import HeaderWithoutTitle from './SubComponents/HeaderWithoutTitle';

const ProductsPage: React.FC = () => {
  const data = useSelector((state: RootState) => state.reducer.data);
  const [filteredData, setFilteredData] = useState<Item[]>(data);
  const handleFilter = (filteredData: Item[]) => { 
    setFilteredData(filteredData);
  };

  return (
    <Fragment>
      {filteredData.length > 0 ?
        <div>
          <HeaderWithoutTitle />
          <p className={classes.title}>Featured products</p>
          <p className={classes.subTitle}>See all products</p>
          <FilterButton
            allData={data}
            onFilter={handleFilter}
          />
          <div className={classes.ProductsContainer}>
            {filteredData.map(item => (
              <div className={classes.productsFilter} key={item.id}>
                <CarouselFPCard
                  name={item.name}
                  price={item.price.toString()}
                  id={item.id.toString()}
                />
              </div>
            ))}
          </div>
        </div> : <Loading />}
    </Fragment>
  )
};

export default ProductsPage;
