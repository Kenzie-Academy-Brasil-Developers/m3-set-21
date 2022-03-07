import { useState } from "react";
import { updateUserInfoThunk } from "../../store/modules/user/thunk";

import { Modal, Button, Input, notification } from "antd";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import "./styles.css";

const ModalUpdate = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((store) => store.user);

  const [bio, setBio] = useState("");

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const updateUserBio = () => {
    const data = { bio };

    dispatch(
      updateUserInfoThunk(
        data,
        token,
        successMessageUpdate,
        notSuccessMessageUpdate
      )
    );

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setVisible(false);
      setBio("");
    }, 1000);
  };

  const successMessageUpdate = (type) => {
    notification[type]({
      message: "Biografia atualizada!",
    });
  };

  const notSuccessMessageUpdate = (type) => {
    notification[type]({
      message: "A atualização falhou!",
    });
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Atualizar bio
      </Button>
      <Modal
        visible={visible}
        title="Atualize sua biografia"
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            loading={loading}
            onClick={updateUserBio}
          >
            Atualizar
          </Button>,
        ]}
      >
        <div className="form-update-user-info">
          <Input
            placeholder="Digite a atualização da sua biografia aqui..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
      </Modal>
    </>
  );
};

export default ModalUpdate;