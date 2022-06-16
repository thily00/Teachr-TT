import man from "../assets/images/man.png";
import mortarboard from "../assets/icons/mortarboard.svg";
import check from "../assets/icons/check.svg";
import Langue from "../assets/icons/message.svg";
import localisaton from "../assets/icons/localisaton.svg";
import Rating from "./Rating";
import "../styles/TeacherCard.css";

function TeacherCard({ user }) {
  return (
    user && (
      <div className="teachr">
        <img src={man} className="tearchr__avatar" alt="logo" />
        <h5 className="tearchr__name">
          {user.first_name} {user.last_name}
        </h5>
        <Rating average={5} />
        <p className="tearchr__hours">20 heures données</p>

        <div className="tearchr__informations">
          <div className="tearchr__information">
            <img src={mortarboard} alt={mortarboard} />
            <span>HEC, 1ère année</span>
          </div>

          <div className="tearchr__information">
            <img src={Langue} alt={Langue} />
            <span>BIllingue</span>
          </div>

          <div className="tearchr__information">
            <img src={check} alt={check} />
            <span>Diplome vérifié</span>
          </div>

          <div className="tearchr__information">
            <img src={localisaton} alt={localisaton} />
            <span>Paris</span>
          </div>
        </div>

        <div className="tearchr__descriptionContainer">
          <span className="tearchr__descriptionTitle">Description</span>
          <p className="tearchr__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>

        <button className="teachr_button">CHOISIR</button>
      </div>
    )
  );
}

export default TeacherCard;
