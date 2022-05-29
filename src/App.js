import "./App.css";
import "antd/dist/antd.min.css";
import CardCustom from "./components/CardCustom";
import Roadmap from "./components/Roadmap";
import { Layout, Button } from "antd";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Content style={{ padding: "0 100px", marginTop: 64 }}>
          <div className="popular-roadmaps">
            <div className="popular-roadmaps-title">
              <h2>Roadmaps phổ biến</h2>
              <p>Hơn 10.000 khóa học trực tuyến</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Roadmap />
                <Roadmap />
                <Roadmap />
                <Roadmap />
              </div>
              <div style={{display: 'flex', justifyContent:'center', marginTop: 20}}>
                <Button style={{borderRadius: 5}} danger>Xem tất cả</Button>
              </div>
              
            </div>
          </div>

          <div className="latest-courses">
            <h2>Những khóa học mới nhất</h2>
            <p>Hơn 10.000 khóa học trực tuyến</p>
            <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <CardCustom />
                <CardCustom />
                <CardCustom />
                <CardCustom />
                <CardCustom />
                <CardCustom />
                <CardCustom />
                <CardCustom />
              </div>

              <div style={{display: 'flex', justifyContent:'center', marginTop: 20}}>
                <Button style={{borderRadius: 5}} danger>Xem tất cả</Button>
              </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
