import React from "react";
import "./register.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link, useHistory } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { registerNewUser } from "../../services/userService";
import { UserContext } from "../../context/UserContext";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const Register = (props) => {
  const { user } = useContext(UserContext);
  const [ispass, setIsPass] = useState(true);
  const [ispassNew, setIsPassNew] = useState(true);
  const [ispassCf, setIsCfPassNew] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const defaultValidInput = {
    isValidUsername: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  };
  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);
  let history = useHistory();
  const handleRegister = async (e) => {
    e.preventDefault();
    // let userData = { email, phone, username, password };
    let check = isValid();
    if (check) {
      let response = await registerNewUser(
        username,
        password
      );
      let serverData = response;
      if (serverData.EC === "0") {
        toast.success(serverData.EM);
        history.push("/login");
      } else {
        toast.error(serverData.EM);
      }
    }
  };
  const handleIsPass = () => {
    if (ispass) {
      setIsPass(false);
    } else {
      setIsPass(true);
    }
  };
  const handleIsPassNew = () => {
    if (ispassNew) {
      setIsPassNew(false);
    } else {
      setIsPassNew(true);
    }
  };
  useEffect(() => {
    if (user && user.isAuthenticated === true) {
      console.log("hâh");
      history.push("/");
    }
  }, [user]);
  const isValid = () => {
    setObjCheckInput(defaultValidInput);
    if (!username) {
      toast.error("Username is required !");
      setObjCheckInput({ ...defaultValidInput, isValidUsername: false });

      return false;
    } else if (!password) {
      toast.error("Password is required !");
      setObjCheckInput({ ...defaultValidInput, isValidPassword: false });

      return false;
    } else if (password.length < 6) {
      toast.error("Mật khẩy phải nhiều hơn 6 kí tự !");
      setObjCheckInput({ ...defaultValidInput, isValidPassword: false });

      return false;
    }
    else if (!confirmPassword) {
      toast.error("ConfirmPassword is required !");
      setObjCheckInput({ ...defaultValidInput, isValidConfirmPassword: false });

      return false;
    } else if (password !== confirmPassword) {
      toast.error("Confirm Password is not the same !");
      setObjCheckInput({ ...defaultValidInput, isValidConfirmPassword: false });

      return false;
    }

    return true;
  };
  return (
    <div className="login-container ">
      <div className="container">
        <div className="row mt-5 flex-column justify-content-center">
          <div className="content-left  d-none col-sm-9 d-sm-block text-center ">
            <div className="brand">Hưng Thịnh</div>
            <div className="detail">
              Hưng Thịnh helps you connect and share with people in your life
            </div>
          </div>
          <div className=" col-sm-9  col-12 mt-5 ">
            <div className="brand text-center d-sm-none">Hưng Thịnh</div>

            <div className="content-right p-3 mx-3 d-flex flex-column gap-3">
              <div className="d-flex">
                <div className="col-12">
                  <div className="form-group">
                    <label>User name:</label>
                    <input
                      type="text"
                      className={
                        objCheckInput.isValidUsername
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      placeholder="User name"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input
                      type={ispass ? "password" : "text"}
                      className={
                        objCheckInput.isValidPassword
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      placeholder="Password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    {ispass ? (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        onClick={handleIsPass}
                      />
                    ) : (
                      <FontAwesomeIcon icon={faEye} onClick={handleIsPass} />
                    )}
                  </div>
                  <div className="form-group">
                    <label>Re-enter password:</label>
                    <input
                      type={ispassCf ? "password" : "text"}
                      className={
                        objCheckInput.isValidConfirmPassword
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      placeholder="Re-enter password"
                      value={confirmPassword}
                      onChange={(event) =>
                        setConfirmPassword(event.target.value)
                      }
                    />
                    {ispassCf ? (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        onClick={handleIsPass}
                      />
                    ) : (
                      <FontAwesomeIcon icon={faEye} onClick={handleIsPass} />
                    )}
                  </div>
                  
                </div>
               
              </div>
              <button
                className="btn btn-primary register_btn"
                type="submit"
                onClick={(e) => handleRegister(e)}>
                Register
              </button>

              <hr />
              <div className="text-center">
                <button className="btn btn-success login_btn">
                  <Link to="/login" className="text-white text-decoration-none">
                    I have a account - Login
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

export default Register;
