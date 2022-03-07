import ModalUpdate from "../../components/ModalUpdate";

import { useHistory } from "react-router-dom";
import { Card } from "antd";
import { useSelector } from "react-redux";

import "./styles.css";

const PageDashboard = () => {
  const { userInfo, token } = useSelector((store) => store.user);

  const history = useHistory();

  if (!token) {
    history.push("/");
  }

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
    </div>
  );
};

export default PageDashboard;
