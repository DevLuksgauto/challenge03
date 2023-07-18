import { useState, useRef, Fragment, useEffect } from 'react';
import { motion } from 'framer-motion';
import foto1 from '../../assets/HeadPhonePic.png';
import foto2 from '../../assets/HeadphoneClose.png';
import classes from './ItemPicCarousel.module.css';


const ItemPicCarousel = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    },[])

    const pictures = [ foto1, foto2 ];
    return (
        <Fragment>
            <motion.div ref={carousel} className={classes.carousel}>
                <motion.div className={classes.inner}
                drag="x"
                dragConstraints={{ right: 0, left: -width}}
                >

                    {pictures.map(pic => (
                        <motion.div className={classes.pic} key={Math.random(pic)}>
                            <img src={pic} alt="Foto do produto" />
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>
        </Fragment>
    )
};

export default ItemPicCarousel;