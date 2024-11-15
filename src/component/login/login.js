import React from "react";
import "./login.scss";
import { Link, useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../../services/userService";
import { useRef, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const Login = (props) => {
  const { loginContext, user } = useContext(UserContext);

  const [valueLogin, setValueLogin] = useState("");
  const [password, setPassword] = useState("");
  const [ispass, setIsPass] = useState(true);
  const handleIsPass = () => {
    if (ispass) {
      setIsPass(false);
    } else {
      setIsPass(true);
    }
  };
  const defaultValidInput = {
    isValidValueLogin: true,
    isValidPassword: true,
  };
  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);
  let history = useHistory();
  useEffect(() => {
    if (user && user.isAuthenticated === true) {
      console.log("hâh");
      history.push("/");
    }
  }, [user]);
  const handleLogin = async () => {
    setObjCheckInput(defaultValidInput);
    if (!valueLogin) {
      setObjCheckInput({ ...defaultValidInput, isValidValueLogin: false });

      toast.error("Please enter your email address or phone number");
      return;
    }
    if (!password) {
      setObjCheckInput({ ...defaultValidInput, isValidPassword: false });

      toast.error("Please enter your password");
      return;
    }
    let response = await loginUser(valueLogin, password);
    let serverData = response;
    console.log(serverData);
    if (response && response.EC === "0") {
      let role = response.DT.role;
      let username = response.DT.name;
      let token = response.DT.access_token;
      let data = {
        isAuthenticated: true,
        token: token,
        account: { role, username },
      };
      localStorage.setItem("jwt", token);

      loginContext(data);
      toast.success(serverData.EM);
      window.location.reload();
      history.push("/");
    } else {
      toast.error(serverData.EM);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-container ">
      <div className="container">
        <div className="row">
          <div className="content-left  d-none col-sm-7 d-sm-block ">
            <div className="brand">Hưng Thịnh</div>
            <div className="detail">
              Hưng Thịnh helps you connect and share with people in your life
            </div>
          </div>
          <div className=" col-sm-5  col-12 ">
            <div className="brand text-center d-sm-none">Hưng Thịnh</div>

            <div className="content-right p-3 mx-3 d-flex flex-column gap-3">
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="email"
                  className={
                    objCheckInput.isValidValueLogin
                      ? "form-control"
                      : "form-control is-invalid password"
                  }
                  value={valueLogin}
                  onChange={(event) => setValueLogin(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type={ispass ? "password" : "text"}
                  className={
                    objCheckInput.isValidPassword
                      ? "form-control"
                      : "form-control is-invalid password"
                  }
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  onKeyPress={(e) => handleKeyPress(e)}
                />
                {ispass ? (
                  <FontAwesomeIcon icon={faEyeSlash} onClick={handleIsPass} />
                ) : (
                  <FontAwesomeIcon icon={faEye} onClick={handleIsPass} />
                )}
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={(e) => {
                  handleLogin(e);
                }}>
                Login
              </button>
              <span className="text-center">
                <a href="#" className="link-primary">
                  Forgot your password?
                </a>
              </span>
              <hr />
              <div className="text-center">
                <button className="btn btn-success">
                  <Link
                    to="/register"
                    className="text-white text-decoration-none">
                    Create new account
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
