import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

const PrivateRoutes = (props) => {
  const { user } = useContext(UserContext);

  if (user && user.isAuthenticated === true) {
    return (
      <>
        <Route path={props.path} component={props.component} />
      </>
    );
  } else {
    return <Redirect to="/login"></Redirect>;
  }
};
export default PrivateRoutes;
