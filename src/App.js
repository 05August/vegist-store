import { Routes, Route, Link } from "react-router-dom";

import { ROUTE } from "./constants/Constants";
import DefaultLayout from "./layouts/DefaultLayout";
import HomeBody from "./pages/User/Home/Home.jsx";
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
        <Route path={ROUTE.HOME} element={<DefaultLayout />}>
          <Route index element={<HomeBody />} />
          <Route path={ROUTE.ACCOUNT} element={<Empty />} />
          <Route path={ROUTE.LOGIN} element={<h1>Login</h1>} />
          <Route path={ROUTE.REGISTER} element={<h1>Register</h1>} />
          <Route path={ROUTE.PRODUCT} element={<h1>PRODUCT</h1>} />
          <Route path={ROUTE.PRODUCT_DETAIL} element={<h1>PRODUCT_DETAIL</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
