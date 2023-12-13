import React, { useState } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Modal } from "antd";
import SignIn from "../../../../pages/login/login"
import Register from "../../../../pages/register/register";
import "./drop.css";


// const Drop: React.FC = () => (
function Drop() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a onClick={showModal}>Sign In</a>,
    },
    {
      key: "2",
      label: <a onClick={showModal}>Sign Up</a>,
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space style={{ color: "white" }}>
            Welcome Airbnb
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
      <Modal  className="modal" width={800}  footer={null} open={isModalOpen}  onCancel={handleCancel}>
        <SignIn/>
      </Modal>
      <Modal  className="modal" width={800}  footer={null} open={isModalOpen} onCancel={handleCancel}>
        <Register/>
      </Modal>
    </>
  );
}

export default Drop;
