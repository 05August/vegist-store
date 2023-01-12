import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Slider from "./components/Slider/Slider.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";

import { ROUTE } from "./constants/Constants";
import "./styles/style.scss";
import Home from "./pages/User/Home.jsx";
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
              404 NOT FOUND
            </Link>
          }
        />
        <Route path={ROUTE.HOME} element={<Home />}>
          <Route index element={<Slider />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
