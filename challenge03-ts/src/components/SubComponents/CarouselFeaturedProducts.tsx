import { useState, useEffect, Fragment, useRef } from "react";
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { RootState } from "../../reducers/rootReducer"; 
import CarouselFPCard from "../SubComponents/CarouselFPCard";
import classes from '../../styleModules/CarouselFeaturedProducts.module.css';

const CarouselFeaturedProducts: React.FC = () => {
  const data = useSelector((state: RootState) => state.reducer.data);
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const SetWidth = async () => {
      setWidth(carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0);
    };
    SetWidth();
  }, []);

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

