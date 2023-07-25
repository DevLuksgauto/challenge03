import { useState, useEffect, Fragment, useRef } from "react";
import { useSelector } from "react-redux";
import { motion } from 'framer-motion';
import { RootState } from "../../reducers/rootReducer";
import CarouselCard from "../SubComponents/CarouselCard";
import classes from '../../styleModules/CarouselProducts.module.css';

interface Product {
  id: any; 
  name: string;
}
interface CarouselProductsProps {
  filteredData: Product[];
}

const CarouselProducts: React.FC<CarouselProductsProps> = ({ filteredData }) => {
  const data = useSelector((state: RootState) => state.reducer.data);
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

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
