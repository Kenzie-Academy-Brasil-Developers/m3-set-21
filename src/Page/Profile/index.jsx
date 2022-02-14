import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({})

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://kenziehub.herokuapp.com/users/${id}`)
      .then((response) => response.json())
      .then((response) => setUser(response));
  }, []);


  return <div>
    <h3>{user.name}</h3>
    <p>{user.bio}</p>
  </div>;
};

export default Profile;
