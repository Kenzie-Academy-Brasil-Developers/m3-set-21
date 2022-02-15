import { Link, useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  console.log(history);

  return (
    <div>
      <h3>Home</h3>
      <ul>
        <li>
          <a href="/signup">link signup</a>
        </li>
        <li>
          <Link to="/signup">link signup</Link>
        </li>
        <li>
          <Link to="/pokemon/pikachu">pokemon</Link>
        </li>
        <li>
          <button onClick={() => history.push("/signup")}>link signup</button>
        </li>
      </ul>
    </div>
  );
};

export default Home;
