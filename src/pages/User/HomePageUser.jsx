import { Outlet } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";

const HomePageUser = () => {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
};

export default HomePageUser;
