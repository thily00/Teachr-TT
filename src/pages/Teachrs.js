import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TeachrCard from "../components/TeachrCard";
import "../styles/Teachr.css";

function Teachrs() {
  const [users, setUsers] = useState([]);
  const API_URl = "https://www.data.gouv.fr/api/1";

  let getUsers = () => {
    fetch(`${API_URl}/users`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="Container">
      <Sidebar />
      <div className="main">
        <h3>En quelle matière avez-vous besoins d'aide ?</h3>
        <div className="searchBar">
          <label>
            <i class="fa fa-search" aria-hidden="true"></i>
          </label>
          <input type="text" placeholder="SVT, piano, anglais, math..." />
        </div>
        <h3>Les Teach'rs d'Anglais qui pourraient vous correspondre</h3>
        <div className="teachrs">
          {users.map((user) => {
            return <TeachrCard user={user} key={user.id} />;
          })}

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
