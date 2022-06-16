import "../styles/Sidebar.css";
import logo from "../assets/logo.png";

function SideBar() {
  return (
    <div className="sideBar">
      <img src={logo} className="logo" alt="logo" />
      <div className="stepper">
        <div className="step">
          <span>
            <i className="fa fa-check-circle" aria-hidden="true"></i>
          </span>
          <span style={{ color: "black" }}>Votre demande</span>
        </div>
        <div className="step">
          <span className="stepIcon">2</span>
          <span>Nos propositions</span>
        </div>
        <div className="step">
          <span className="stepIcon">3</span>
          <span>Paiement</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
