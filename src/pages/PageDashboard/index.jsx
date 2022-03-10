import ModalUpdate from "../../components/ModalUpdate";
import { useUser } from "../../providers/User";

import { Card, Button } from "antd";
import { useHistory } from "react-router-dom";

import "./styles.css";

const PageDashboard = () => {
  const { userInfo, token, logout } = useUser();

  const history = useHistory();

  if (!token) {
    history.push("/");
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="container">
      <div className="site-card-border-less-wrapper">
        <Card title={userInfo.name} bordered={false} style={{ width: 300 }}>
          <p>{userInfo.email}</p>
          <p>{userInfo.contact}</p>
          <p>{userInfo.bio}</p>
          <ModalUpdate />
        </Card>
      </div>
      <Button type="primary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default PageDashboard;
