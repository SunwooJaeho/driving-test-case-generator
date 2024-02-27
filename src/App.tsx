import { Outlet } from "react-router-dom";
import Layout from "./layout/Layout";
import "./App.css";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
