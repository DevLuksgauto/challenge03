import { useState, useEffect, Fragment, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../action/fetchAction';
import { motion } from 'framer-motion';
import { RootState } from "../../store"; // Certifique-se de importar o tipo RootState corretamente de onde ele estiver definido.
import CarouselFPCard from "../SubComponents/CarouselFPCard";
import classes from '../../styleModules/CarouselFeaturedProducts.module.css';

const CarouselFeaturedProducts: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.reducer.data);
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
            <motion.div className={classes.card} key={Math.random()}>
              <CarouselFPCard
                name={data[card.id].name}
                price={data[card.id].price}
                id={data[card.id].id}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default CarouselFeaturedProducts;

