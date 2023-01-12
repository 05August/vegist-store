import { Outlet } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";

const Home = () => {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
};

export default Home;
