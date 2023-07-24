import { useState, useRef, Fragment, useEffect } from 'react';
import { motion } from 'framer-motion';
import foto1 from '../../assets/HeadPhonePic.png';
import foto2 from '../../assets/HeadphoneClose.png';
import classes from './ItemPicCarousel.module.css';

const pictures: string[] = [foto1, foto2];

const ItemPicCarousel: React.FC = () => {
    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, []);

    return (
        <Fragment>
            <motion.div ref={carousel} className={classes.carousel}>
                <motion.div
                    className={classes.inner}
                    drag="x"
                    dragConstraints={{ right: 0, left: -260 }}
                >
                    {pictures.map((pic) => (
                        <motion.div className={classes.pic} key={Math.random()}>
                            <img src={pic} alt="Foto do produto" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Fragment>
    );
};

export default ItemPicCarousel;
