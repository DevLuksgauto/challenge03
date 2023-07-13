import { Fragment, useEffect, useState } from "react"
import classes from './PlantCard.module.css'
import { Link } from "react-router-dom";

import foto1 from '../../assets/plant-slide.png';
import foto2 from '../../assets/plant-slide-2.png';
import foto3 from '../../assets/plant-slide-3.png';
import foto4 from '../../assets/plant-slide-4.png';

const PlantCard = (props) => {
    const [details, setDetails] = useState([]);

    const pictures = [foto1, foto2, foto3, foto4]

    useEffect(() => {
        fetch('http://localhost:3000/plants')
        .then(res => res.json())
        .then(res => {
            setDetails(res);
        })
        .catch((error => console.log("Erro do fetch: ", error)))
    },[])

    return (
        <Fragment>
            <div className={classes.container}>
            {details.length > 0 ? (
                <Fragment>
                    <img src={pictures[props.num]} alt="Imagem da planta" />
                    {details[props.num] && (
                    <Fragment>
                        <Link className={classes.link} to={`/products/${details[props.num].id}`}>
                            <p className={classes.name}>{details[props.num].name}</p>
                        </Link>
                        {props.discount ? (
                            <Fragment>
                                <div className={classes.pricesSale}>
                                    <p className={classes.price}>${(details[props.num].price - details[props.num].price * details[props.num].discountPercentage / 100).toFixed(2)}</p>
                                    <p className={classes.priceDiscarded}>${details[props.num].price}</p>
                                </div>
                                <p className={classes.label}>{details[props.num].label[0]}</p>
                            </Fragment>
                ) : (
                <Fragment>
                    <p className={classes.price}>${details[props.num].price}</p>
                    <p className={classes.label}>{details[props.num].label[0]}</p>
                </Fragment>
                )}
            </Fragment>
            )}
        </Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  </Fragment>
)
};

export default PlantCard;