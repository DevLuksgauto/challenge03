import { useState, useEffect, Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from '../../actions/FetchAction';
import { motion } from 'framer-motion';
import CarouselCard from "./CarouselCard";
import classes from './CarouselProducts.module.css';

interface DataItem {
  id: number;
  name: string;
  // Adicione outros campos da estrutura de dados, se houver
}

const CarouselProducts: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: { reducer: { data: DataItem[] } }) => state.reducer.data);
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const fetchDataAndSetWidth = async () => {
      const fetchedData = await dispatch(fetchData());
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth || 0);
    };
    fetchDataAndSetWidth();
  }, [dispatch]);

  return (
    <Fragment>
      <motion.div ref={carousel} className={classes.carousel}>
        <motion.div
          className={classes.inner}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {data.map((card) => (
            <motion.div className={classes.card} key={card.id}>
              <CarouselCard
                name={card.name}
                id={card.id}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default CarouselProducts;
