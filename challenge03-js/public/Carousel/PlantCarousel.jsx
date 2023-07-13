import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fragment } from 'react';
import classes from './PlantCarousel.module.css';

import PlantCard from './PlantCard';

const plantCard = [0, 1, 2, 3,1,1,1,1,1,1,1,]

const PlantCarousel = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(()=>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])

    return (
        <Fragment>
            <motion.div ref={carousel} className={classes.carousel} whileTap={{cursor: 'grabbing'}}>
                <motion.div className={classes.inner}
                    drag="x"
                    dragConstraints={{ right: 0, left: -width}}
                    initial={{x: 100}}
                    animate={{x: 0}}
                    transition={{duration: 0.8}}
                    >
                    {plantCard.map(plantImgs => (
                        <motion.div className={classes.item} key={Math.random(plantImgs)}>
                            <PlantCard num={plantImgs}/>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Fragment>
    )
};

export default PlantCarousel;