import star_full from "../assets/icons/star_full.svg";
import star from "../assets/icons/star.svg";
import "../styles/Rating.css";

function Rating(props) {
  return (
    <div className="Rating">
      <span>
        <img src={star_full} className="star" alt="star" />
      </span>
      <span>
        <img src={star_full} className="star" alt="star" />
      </span>
      <span>
        <img src={star_full} className="star" alt="star" />
      </span>
      <span>
        <img src={star_full} className="star" alt="star" />
      </span>
      <span>
        <img src={star} className="star" alt="star" />
      </span>
    </div>
  );
}

export default Rating;
