import React from "react";
import "./nav.scss";
import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../logo.svg";
import { logOutUser } from "../../services/userService";
import { toast } from "react-toastify";
import { fechtNhom } from "../../services/nhom";
const NavHeader = (props) => {
  let history = useHistory();
  let location = useLocation();
  const { user, logoutContext } = useContext(UserContext);
  const [nhom, setNhom] = useState("");
  useEffect(() => {
    fetchNhom();
  }, []);
  const fetchNhom = async () => {
    const data = await fechtNhom();
    if (data && data.EC === "0") {
      console.log("ahhaha");
      setNhom(data.DT);
    }
  };
  const handleLogoutUser = async () => {
    let data = await logOutUser(); //clear cookies
    localStorage.removeItem("jwt"); // clear local storage
    logoutContext(); //clear user in context
    if (data && data.EC === "0") {
      toast.success("Logout successful");
      history.push("/login");
    } else {
      toast.error(data.EM);
    }
  };
  if ((user && user.isAuthenticated === true) || location.pathname === "/") {
    return (
      <>
        <div className="nav-header">
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home" className="logo-name">
                <img
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
                HT-90
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink to="/" exact className="nav-link">
                    Home
                  </NavLink>
                  <NavDropdown
                    title="Nhóm"
                    id="basic-nav-dropdown">
                    
                  {nhom &&
                    nhom.map((nhom) => {
                      return (
                        <>
                        <NavDropdown.Item>
                          <span>
                            <NavLink to={`/nhom/${nhom.id}`} className="nav-link">
                            {nhom.ten}
                            </NavLink>
                          </span>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                        </>
                        
                      );
                    })}
                    </NavDropdown>
                </Nav>
                <Nav>
                  {user && user.isAuthenticated === true ? (
                    <>
                      <Nav.Item className="name-user nav-link ">
                        Hi, {user.account.username}!
                      </Nav.Item>
                      <NavDropdown title="Settings" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                          <span>
                            <NavLink to="/profile" className="nav-link">
                              Profile
                            </NavLink>
                          </span>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                          <span>
                            <NavLink to="/changepass" className="nav-link">
                              Change Password
                            </NavLink>
                          </span>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                          <span onClick={handleLogoutUser}>Log out</span>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </>
                  ) : (
                    <>
                      <NavLink to="/login" className="nav-link">
                        Login
                      </NavLink>
                    </>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default NavHeader;
