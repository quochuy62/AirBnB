import React, { useState } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Modal } from "antd";
import LogIn from "../../../../pages/login/login";
import Register from "../../../../pages/register/register";
import "./drop.css";
import { NavLink } from "react-router-dom";


// const Drop: React.FC = () => (
function Drop() {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a onClick={() => setModal1Open(true)}>Sign In</a>,
    },
    {
      key: "2",
      label: <a onClick={() => setModal2Open(true)}>Sign Up</a>,
    },
    {
      key: "3",
      label: <NavLink to="/">user</NavLink>,
    },
    {
      key: "4",
      label: <NavLink to="quanlynguoidung">Admin</NavLink>,
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
      <Modal className="modal" width={800}  footer={null}  open={modal1Open}  onCancel={() => setModal1Open(false)}>
        <LogIn setModal1Open = {setModal1Open}
        setModal2Open = {setModal2Open}
          />
      </Modal>
      <Modal  className="modal" width={800}  footer={null}  open={modal2Open} onCancel={() => setModal2Open(false)}>
        <Register setModal1Open = {setModal1Open}
        setModal2Open = {setModal2Open}/>
      </Modal>
    </>
  );
}

export default Drop;
