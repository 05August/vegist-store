import { Routes, Route, Link } from "react-router-dom";

import { ROUTE } from "./constants/Constants";
import HomePageUser from "./pages/User/HomePageUser.jsx";
import Home from "./components/HomeBody/Home";
import { Empty } from "antd";
import "./styles/style.scss";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path={ROUTE.NOT_FOUND}
          element={
            <Link
              to={ROUTE.HOME}
              style={{
                display: "block",
                margin: "20% auto",
                fontWeight: "bold",
                fontSize: 40,
                width: 475,
              }}
            >
              <Empty />
            </Link>
          }
        />
        <Route path={ROUTE.HOME} element={<HomePageUser />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
