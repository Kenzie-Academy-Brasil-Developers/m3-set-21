import { Link, useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  console.log(history);

  return (
    <div>
      <h3>Home</h3>
      <ul>
        <li>
          <a href="/login">link login</a>
        </li>
        <li>
          <Link to="/login">link login</Link>
        </li>
        <li>
          <Link to="/pokemon/pikachu">pokemon</Link>
        </li>
        <li>
          <button onClick={() => history.push("/login")}>link login</button>
        </li>
      </ul>
    </div>
  );
};

export default Home;
