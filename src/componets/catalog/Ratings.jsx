import { useEffect, useState } from "react";
import classes from "./Ratings.module.css";

const Ratings = (props) => {
  const [stars, setStars] = useState([]);
  let star = [];
  const getFullStars = (rating) => {
    let fullStarCount = Math.floor(rating);
    for (let i = 0; i < fullStarCount; i++) {
      star.push({ id: i + "f", class: "bi bi-star-fill" });
    }
  };

  const getHalfStars = (rating) => {
    let halfStarCount = Math.ceil(rating) - Math.floor(rating);
    for (let i = 0; i < halfStarCount; i++) {
      star.push({ id: i + "h", class: "bi bi-star-half" });
    }
  };

  const getEmptyStars = (rating) => {
    let emptyStarCount = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStarCount; i++) {
      star.push({ id: i + "e", class: "bi bi-star" });
    }
  };

  useEffect(() => {
    if (star.length < 5) {
      getFullStars(props.rating);
      getHalfStars(props.rating);
      getEmptyStars(props.rating);
      setStars(star);
    }
  }, []);

  return (
    <div className={`${classes.rating} ${classes[props.size]}`}>
      {stars.map((star) => (
        <i key={star.id} className={star.class}></i>
      ))}
      <p>from {props.reviews} reviews</p>
    </div>
  );
};

export default Ratings;
