import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TeachrCard from "../components/TeachrCard";
import "../styles/Teachr.css";

function Teachrs() {
  const [subject, setSubject] = useState("");
  const [users, setUsers] = useState([]);
  const API_URl = "https://www.data.gouv.fr/api/1";

  let getUsers = () => {
    fetch(`${API_URl}/users`)
      .then((response) => response.json())
      .then((response) => {
        setUsers(response.data);
      });
  };

  function handleSearch(event) {
    event.preventDefault();
    const vowels = "aeiouAEIOU";
    vowels.indexOf(event.target.searchBar.value[0]) !== -1
      ? setSubject(`d'${event.target.searchBar.value}`)
      : setSubject(`de ${event.target.searchBar.value}`);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="Container">
      <Sidebar />
      <div className="main">
        <h4>En quelle matière avez-vous besoins d'aide ?</h4>
        <form onSubmit={handleSearch} className="searchBar">
          <input
            type="text"
            id="searchBar"
            placeholder="SVT, piano, anglais, math..."
          />
          <button type="submit">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
        <h4>Les Teach'rs {subject} qui pourraient vous correspondre</h4>
        <div className="teachrs">
          {users.map((user) => {
            return <TeachrCard user={user} key={user.id} />;
          })}
        </div>
        <div className="Buttons">
          <button className="btn_outline">PRECEDENT</button>
          <button className="btn">SUIVANT</button>
        </div>
      </div>
    </div>
  );
}

export default Teachrs;
