import { useState, useEffect, Fragment, useRef } from "react";
import axios from  'axios';
import { motion } from 'framer-motion';
import CarouselCard from "./CarouselCard";
import classes from './CarouselProducts.module.css'

const CarouselProducts = () => {

    const array = [1, 2, 3, 4, 5];
    const [ productsData, setProductsData ] = useState([]);
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        axios.get("https://run.mocky.io/v3/67f95bf8-97fd-43b9-951b-c8bccd8eb5a7")
            .then(res => setProductsData(res.data))
            setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])

    return (
        <Fragment>
            <motion.div ref={carousel} className={classes.carousel} >
                <motion.div className={classes.inner}
                drag="x"
                dragConstraints={{ right: 0, left: -width}}
                >

                    {array.map(card => (
                        <motion.div className={classes.card} key={Math.random(card)}>
                            <CarouselCard num={card}/>
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>
        </Fragment>
    )
};

export default CarouselProducts;