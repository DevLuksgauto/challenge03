import foto1 from '../../assets/luks1.png';
import foto2 from '../../assets/luks2.png';
import foto3 from '../../assets/luks3.png';
import rating1 from '../../assets/Rating1.png';
import rating2 from '../../assets/Rating2.png';
import rating3 from '../../assets/Rating3.png';
import rating4 from '../../assets/Rating4.png';
import rating5 from '../../assets/Rating5.png';

import classes from '../../styleModules/Reviews.module.css';

function RatingComponent(props) {
  switch (props.rating) {
    case 5:
      return <img src={rating5} alt="5 stars" />;
    case 4:
      return <img src={rating4} alt="4 stars" />;
    case 3:
      return <img src={rating3} alt="3 stars" />;
    case 2:
      return <img src={rating2} alt="2 stars" />;
    case 1:
      return <img src={rating1} alt="1 star" />;
    default:
      return <p>No rating</p>;
  }
}

const Reviews = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.UserPicContainer}>
        <img className={classes.userPic} src={foto1} alt="User's photo" />
      </div>
      <div className={classes.reviewDataContainer}>
        <p>{props.name}</p>
        <RatingComponent rating={props.rating} />
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Reviews;