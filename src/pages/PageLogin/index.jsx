import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import { useUser } from "../../providers/User";

import "./styles.css";

const PageLogin = () => {
  const { signIn } = useUser();

  const history = useHistory();

  const onSubmit = (data) => {
    signIn(data, history);
  };

  return (
    <div className="container">
      <Form name="normal_login" className="login-form" onFinish={onSubmit}>
        <Form.Item name="email">
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item name="password">
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Logar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PageLogin;
