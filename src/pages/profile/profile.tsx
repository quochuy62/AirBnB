import React from "react";
import { Col, Row } from "antd";
import "./style.css";
import CheckIcon from "../../assets/icons/check-icon";
function Profile() {
  return (
    <Row className="divProfile">
      <Col className="left" span={8}>
        <div className="avatar">
          <img className="img" src="https://i.pravatar.cc?img=2" />
        </div>
        <a className="a" style={{ display: "block", textAlign: "center", paddingBottom:'6rem' }}>
          Cập nhật ảnh
        </a>
        

        <div style={{borderBottom:'solid 1px #444343', margin:'2rem'}}>
         <CheckIcon/>
        <h3>Xác minh danh tính</h3>
        <p>Xác thực danh tính của bạn với huy hiệu xác minh danh tính</p>
        <button className="button">Nhận huy hiệu</button>

        </div>

        

        <h3 style={{margin: '0 2rem'}}>Du đã xác nhận</h3>


      </Col>




      <Col className="right" span={16}>
       <h2>Xin chào, tôi là Du</h2>
       <a className="a">Chỉnh sửa hồ sơ</a>

       <h2>Phòng đã thuê</h2>


       <Row className="room">
        <Col  >
        <img className="imgRoom" src="https://i.pravatar.cc?img=2"/>
        </Col>

        <Col span={12} className="inRoom">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi tempora quis provident. Placeat consequuntur laboriosam natus aliquid voluptas vitae! Quae debitis veniam aut dolore aliquam vitae, animi maxime repellat.
        <h3 className="gia">
          giá/tháng
        </h3>
        </Col>

       </Row>

      </Col>
    </Row>
  );
}

export default Profile;
