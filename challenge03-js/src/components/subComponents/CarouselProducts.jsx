import { useState, useEffect, Fragment, useRef } from "react";
import { useSelector } from "react-redux";
import { motion } from 'framer-motion';
import CarouselCard from "./CarouselCard";
import classes from './CarouselProducts.module.css'

const CarouselProducts = ({ filteredData }) => {

    const data = useSelector((state) => state.reducer.data);
    const carousel = useRef();
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
        const SetWidth = async () => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
        };    
        SetWidth();
    }, []);

    return (
        filteredData.length > 0 ?
            <Fragment>
                <motion.div ref={carousel} className={classes.carousel}>
                    <motion.div className={classes.inner}
                    drag="x"
                    dragConstraints={{ right: 0, left: -width}}
                    >

                        {filteredData.map(card => (
                            <motion.div className={classes.card} key={Math.random(card)}>
                                <CarouselCard
                                    name={data[card.id].name}
                                    id={data[card.id].id}
                                    />
                            </motion.div>
                        ))}

                    </motion.div>
                </motion.div>
            </Fragment>
        :
        <Fragment>
            <motion.div ref={carousel} className={classes.carousel}>
                <motion.div className={classes.inner}
                drag="x"
                dragConstraints={{ right: 0, left: -width}}
                >

                    {data.map(card => (
                        <motion.div className={classes.card} key={Math.random(card)}>
                            <CarouselCard
                                name={data[card.id].name}
                                id={data[card.id].id}
                                />
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>
        </Fragment>
    )
};

export default CarouselProducts;