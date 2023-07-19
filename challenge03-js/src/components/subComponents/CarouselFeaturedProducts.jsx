import { useState, useEffect, Fragment, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../actions/FetchAction';
import { motion } from 'framer-motion';
import CarouselFPCard from "../subComponents/CarouselFPCard";
import classes from '../subComponents/CarouselFeaturedProducts.module.css';

const CarouselFeaturedProducts = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    const carousel = useRef();
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
                <motion.div className={classes.inner}
                drag="x"
                dragConstraints={{ right: 0, left: -width}}
                >

                    {data.map(card => (
                        <motion.div className={classes.card} key={Math.random(card)}>
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