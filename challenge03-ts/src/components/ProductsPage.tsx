
import { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addToCartBag } from '../actions/cartBagAction';
import { fetchData } from '../action/fetchAction';
import { RootState } from '../reducers'; // Importe o tipo RootState

import FilterButton from './SubComponents/FilterButton';
import CarouselFPCard from './SubComponents/CarouselFPCard';
import Loading from './SubComponents/Loading';
import classes from '../styleModules/ProductsPage.module.css';
import HeaderWithoutTitle from './SubComponents/HeaderWithoutTitle';

const ProductsPage: React.FC = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.reducer.data); // Use o tipo RootState para tipar o useSelector
  const [filteredData, setFilteredData] = useState(data);
  const handleFilter = (filteredData: Item[]) => { // Adicione o tipo 'Item[]' para o parâmetro 'filteredData'
    setFilteredData(filteredData);
  };

  useEffect(() => {
    const fetchDataAndSetWidth = async () => {
      const fetchedData = await dispatch(fetchData());
    };
    fetchDataAndSetWidth();
  }, [dispatch]);

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
                  name={item.name} // Use 'item.name' em vez de 'data[item.id].name'
                  price={item.price} // Use 'item.price' em vez de 'data[item.id].price'
                  id={item.id} // Use 'item.id' em vez de 'data[item.id].id'
                />
              </div>
            ))}
          </div>
        </div> : <Loading />}
    </Fragment>
  )
};

export default ProductsPage;
