import React from "react";
import { Col, Row } from "antd";
import "./style.css";
function Profile() {
  return (
    <Row className="div">
      <Col className="left" span={8}>
        <div className="avatar">
          <img className="img" src="https://i.pravatar.cc?img=2" />
        </div>
        <a style={{ color: "#fff", display: "block", textAlign: "center", paddingBottom:'6rem' }}>
          Cập nhật ảnh
        </a>
        
        <h3>Xác minh danh tính</h3>
        <p>Xác thực danh tính của bạn với huy hiệu xác minh danh tính</p>
        <button className="button">Nhận huy hiệu</button>

        <hr style={{border:"1px solid #fff"}}/>

        <h3>Du đã xác nhận</h3>


      </Col>




      <Col className="right" span={16}>
        chi tiết
      </Col>
    </Row>
  );
}

export default Profile;
