import { useState, useRef, Fragment, useEffect } from 'react';
import { motion } from 'framer-motion';
import foto1 from '../../assets/HeadPhonePic.png';
import foto2 from '../../assets/HeadphoneClose.png';
import classes from '../../styleModules/ItemPicCarousel.module.css';

const ItemPicCarousel: React.FC = () => {
    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        const SetWidth = async () => {
        setWidth(carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0);
        };
        SetWidth();
    }, []);

    const pictures: string[] = [foto1, foto2];

    return (
        <Fragment>
            <motion.div ref={carousel} className={classes.carousel}>
                <motion.div
                    className={classes.inner}
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                >
                    {pictures.map((pic) => (
                        <motion.div className={classes.pic} key={Math.random()} drag="x">
                            <img src={pic} alt="Foto do produto" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Fragment>
    );
};

export default ItemPicCarousel;
