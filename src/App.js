import { useState, useEffect } from "react";
import "./App.css";
import Counter from "./components/Counter";
import axios from "axios";

function App() {
  const [count, setCount] = useState(34);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState("");
  const [error, setError] = useState(false);

  /* useEffect com as 3 situações, pode ser necessário se tudo tiver interligado*/
  // useEffect(() => {
  //   if (count === 0) {
  //     console.log("Montagem"); // "Montagem"
  //   }

  //   if (count > 0) {
  //     console.log(count); // 0
  //     console.log("Atualização");
  //   }

  //   return () => {
  //     console.log("Desmontagem");
  //   };
  // }, [count]);

  useEffect(() => {
    // fetch(`https://kenzie-habits.herokuapp.com/groups/?page=${count}`)
    //   .then((response) => response.json())
    //   .then((response) => {
    //     setNext(response.next);
    //     setLoading(false);
    //     setGroups(response.results);
    //   })
    //   .catch((err) => {
    //     setError(true);
    //     setGroups([]);
    //   });

    async function fetchGroups() {
      if (count > 0) {
        const response = await axios
          .get(`https://kenzie-habits.herokuapp.com/groups/?page=${count}`)
          .catch((err) => {
            setError(true);
            setGroups([]);
          });

        setLoading(false);
        setGroups(response.data.results);
      }
    }

    fetchGroups();
  }, [count]);

  const nextPage = () => {
    setLoading(true);
    setCount(count + 1);
  };

  const previousPage = () => {
    if (count > 1) {
      setLoading(true);
      setCount(count - 1);
    }
  };

  if (error) {
    return (
      <div>
        <h2>Ops... Página inválida, deseja retornar ao inicio?</h2>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        {count <= 10 ? (
          <Counter count={count} />
        ) : (
          <span>A contagem está maior q 10 = {count}</span>
        )}

        <button onClick={nextPage}>Próxima página</button>
        <button onClick={previousPage}>Página anterior</button>

        <ul>
          {loading ? (
            <h2>Carregando...</h2>
          ) : (
            groups.map((group) => <li key={group.id}>{group.name}</li>)
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
