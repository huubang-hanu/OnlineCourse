import React from "react";
import placeholder from "../assets/roadmap.png";
import { Card } from "antd";
import { FolderOutlined, FieldTimeOutlined } from "@ant-design/icons";

export default function Roadmap() {
  return (
    <div className="roadmap-container" style={{marginTop: 15}}>
      <div className="roadmap-logo">
        <img style={{ height: 150 }} alt="roadmap logo" src={placeholder}></img>
      </div>
      <Card
        title="Giới thiệu về chuyên ngành Lập trình Python và Java"
        style={{ width: 400 }}
      >
        <div className="roadmap-card">
          <div className="roadmap-item no-course">
            <FolderOutlined style={{display: "flex", alignItems: "center"}}/>
            <p className="roadmap-no-course">6 courses</p>
          </div>
          <div className="roadmap-item course-time">
            <FieldTimeOutlined style={{display: "flex", alignItems: "center"}}/>
            <p className="course-time-length">2h30</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
