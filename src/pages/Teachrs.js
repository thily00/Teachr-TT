import Sidebar from "../components/Sidebar";
import TeachrCard from "../components/TeachrCard";
import "../styles/Teachr.css";

function Teachrs() {
  return (
    <div className="Container">
      <Sidebar />
      <div className="main">
        <h3>En quelle matière avez-vous besoins d'aide ?</h3>
        <input
          className="searchBar"
          type="text"
          placeholder="SVT, piano, anglais, math..."
        />
        <h3>Les Teach'rs d'Anglais qui pourraient vous correspondre</h3>
        <div className="teachrs">
          <TeachrCard />
        </div>
        <div className="Buttons">
          <button>PRECEDENT</button>
          <button>SUIVANT</button>
        </div>
      </div>
    </div>
  );
}

export default Teachrs;
