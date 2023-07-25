import { useState, useEffect, Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from '../../action/fetchAction';
import { motion } from 'framer-motion';
import CarouselCard from "../SubComponents/CarouselCard";
import classes from '../../styleModules/CarouselProducts.module.css';

interface CarouselProductsProps {
  filteredData: { id: string }[]; // ou { id: number }[], dependendo do tipo do ID no seu sistema
}

const CarouselProducts: React.FC<CarouselProductsProps> = ({ filteredData }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducer.data);
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const fetchDataAndSetWidth = async () => {
      const fetchedData = await dispatch(fetchData());
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
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
          {filteredData.map((card) => (
            <motion.div className={classes.card} key={Math.random()}>
              <CarouselCard name={data[card.id].name} id={data[card.id].id} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default CarouselProducts;
