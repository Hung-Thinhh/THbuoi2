import { Switch, Route } from "react-router-dom";
import Login from "../component/login/login";
import Register from "../component/register/register";
import ListSanpham from "../component/listSanpham/listSanpham";
import Sanpham from "../component/Sanpham/Sanpham";
import Profile from "../component/profile/profile";
import PrivateRoutes from "../router/PrivateRoutes";
import Home from "../component/home/home";

const AppRoutes = (props) => {
  return (
    <>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <PrivateRoutes path={"/profile"} component={Profile} />
        <Route path="/nhom/:id">
          <ListSanpham/>
        </Route>
        <Route path="/chitiet/:id">
          <Sanpham/>
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*" exact>
          404 not found
        </Route>
      </Switch>
    </>
  );
};

export default AppRoutes;
