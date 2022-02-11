import { useState, useEffect } from "react";
import "./App.css";
import { api } from "./services/api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [count, setCount] = useState(34);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState("");
  const [error, setError] = useState(false);

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    async function fetchUsers() {
      if (count > 0) {
        const response = await api.get(`/users/?page=${count}`).catch((err) => {
          setError(true);
          setUsers([]);
        });

        setLoading(false);
        setUsers(response.data.results);
      }
    }

    fetchUsers();
  }, [count]);

  if (error) {
    return (
      <div>
        <h2>Ops... Página inválida, deseja retornar ao inicio?</h2>
      </div>
    );
  }

  const createUser = async (e) => {
    e.preventDefault();

    const user = {
      username,
      email,
      password,
    };

    const response = await api.post("/users/", user).catch((err) => {
      toast.error("Esse nome de usuário já está em uso");
    });

    console.log(response);

    setUsers([...users, response.data]);
  };

  return (
    <>
      <ToastContainer />
      <div className="App">
        <header className="App-header">
          <ul>
            {loading ? (
              <h2>Carregando...</h2>
            ) : (
              users.map((user) => <li key={user.id}>{user.username}</li>)
            )}
          </ul>

          <form onSubmit={createUser}>
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Criar um usuário novo</button>
          </form>
        </header>
      </div>{" "}
    </>
  );
}

export default App;
