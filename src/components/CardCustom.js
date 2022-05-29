import React from "react";
import placeholder from "../assets/placeholder.png";
import { CalendarOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

export default function CardCustom(props) {
  return (
    <Card
      className="custom-card"
      style={{marginTop: 15}}
      hoverable
      cover={<img alt="example" src={placeholder} />}
    >
      <Meta
        title="Giới thiệu vềLập trình với chuyên ngành Python và Java"
        description="Mô tả các khái niệm lập trình Python cốt lỗi, bao gôm cấu hình..."
      />
      <div className="course-time-container">
        <div className="course-start-date">
          <CalendarOutlined style={{display: "flex", alignItems: "center"}} />
          <p className="course-begin-date">24/05/2022</p>
        </div>

        <div className="course-length">
          <FieldTimeOutlined style={{display: "flex", alignItems: "center"}}/>
          <p className="course-time-length">2h30</p>
        </div>

      </div>
    </Card>
  );
}
