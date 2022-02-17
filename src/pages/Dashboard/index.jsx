import { useEffect, useState } from "react";
import api from "../../services/api";
import { Redirect, useHistory } from "react-router-dom";

const Dashboard = ({ auth, setAuth }) => {
  const [token] = useState(
    localStorage.getItem("@NomeDaAplicação:token") || ""
  );

  useEffect(() => {
    async function getPersonalData() {
      const response = await api.get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
    }

    getPersonalData();
  }, []);

  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    setAuth(false);
    history.push("/");
  };

  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      Dashboard
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
