import { useState, useEffect, Fragment, useRef } from "react";
import axios from  'axios';
import { motion } from 'framer-motion';
import CarouselFPCard from "./CarouselFPCard";
import classes from './CarouselFeaturedProducts.module.css'

const CarouselFeaturedProducts = () => {
    const array = [1, 2, 3];
    const [ productsData, setProductsData ] = useState([]);
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        axios.get("https://run.mocky.io/v3/15d284a1-db22-4fa9-970b-a6ba468b93d6")
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
                            <CarouselFPCard
                                num={card}
                                name={productsData.length > 0 ? productsData[card].name : "Product"}
                                price={productsData.length > 0 ? productsData[card].price : "Price"}
                                />
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>
        </Fragment>
    )
};

export default CarouselFeaturedProducts;