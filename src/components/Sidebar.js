import "../styles/Sidebar.css";
import logo from "../assets/logo.png";

function SideBar() {
  return (
    <div className="sideBar">
      <img src={logo} className="logo" alt="logo" />
      <div className="stepper">
        <div className="step">
          <span className="stepIcon">1</span>
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
