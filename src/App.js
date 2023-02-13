import { Routes, Route, Link, useSearchParams } from "react-router-dom";
import { ROUTE } from "./constants/Constants";
import DefaultLayout from "./layouts/DefaultLayout";
import HomeBody from "./pages/User/Home/Home.jsx";
import ScrollToTop from "./until/scrollToTop";
import { Empty } from "antd";
import "./styles/style.scss";
function App() {
  const [searchParams] = useSearchParams();
  return (
    <div className="App">
      <ScrollToTop />
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
          <Route
            path={ROUTE.ACCOUNT}
            element={
              <div
                style={{ textAlign: "center", padding: "100px 0px", fontSize: "50px" }}
              >
                <h1>Account Coming Soon...</h1>
              </div>
            }
          />
          <Route
            path={ROUTE.LOGIN}
            element={
              <div
                style={{ textAlign: "center", padding: "100px 0px", fontSize: "50px" }}
              >
                <h1>Login Coming Soon...</h1>
              </div>
            }
          />
          <Route
            path={ROUTE.REGISTER}
            element={
              <div
                style={{ textAlign: "center", padding: "100px 0px", fontSize: "50px" }}
              >
                <h1>Register Coming Soon...</h1>
              </div>
            }
          />
          <Route
            path={ROUTE.PRODUCT}
            element={
              <div
                style={{ textAlign: "center", padding: "100px 0px", fontSize: "50px" }}
              >
                <h1>Product Coming Soon...</h1>
              </div>
            }
          />
          <Route
            path={ROUTE.WISHLIST}
            element={
              <div
                style={{ textAlign: "center", padding: "100px 0px", fontSize: "50px" }}
              >
                <h1>Wish List Coming Soon...</h1>
              </div>
            }
          />
          <Route
            path={ROUTE.PRODUCT_DETAIL}
            element={
              <div
                style={{ textAlign: "center", padding: "100px 0px", fontSize: "50px" }}
              >
                <h1>Product Detail Coming Soon...</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
