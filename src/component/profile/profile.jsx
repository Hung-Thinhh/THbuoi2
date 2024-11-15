import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getUserProfile } from "../../services/userService";
import './profile.scss'

const Profile = () => {

    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [username, setUsername] = useState("");
    const [home, setHome] = useState("");

    useEffect( () => {
        fetchProfile()
    }, [])

    const fetchProfile = async() => {
        let response = await getUserProfile();
        let serverData = response;
        if (serverData.EC === "0") {
            setUsername(serverData.DT.username)
            setGender(serverData.DT.gender)
            setHome(serverData.DT.home)
        } else {
            toast.error(serverData.EM);
        }
}
    return (
        <div className="profile">

            <div className="login-container ">
                <div className="container">
                    <div className="row">

                        <div className="   col-12 ">
                            <h3>Edit profile</h3>
                            <div className="content-right  d-flex  row">
                              
                                <div className="profile_main ">
                                    <div className="form-group">
                                        <label>User name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="User name"
                                            value={username}
                                            disabled
                                        />
                                    </div>


                                    <div className="form-group">
                                        <label>Họ và tên:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder=" "
                                            value={fullname}
                                            onChange={(event) => setFullname(event.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Giới tính</label>
                                        <div className="form-check">
                                            <label>
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="gender"
                                                    id="nam"
                                                    value='nam'
                                                    checked={gender === 'nam'}
                                                    onChange={(event) => setGender(event.target.value)}
                                                />
                                                <span>Nam</span>
                                            </label>

                                            <label>
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="gender"
                                                    value='nu'
                                                    id="nu"
                                                    checked={gender === 'nu'}
                                                    onChange={(event) => setGender(event.target.value)}
                                                />
                                                <span>Nữ</span>
                                            </label>
                                        </div>

                                    </div>
                                    <div className="input_row">
                                        
                                        <div className="form-group">
                                            <label>Quê quán:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder=" "
                                                value={home}
                                                onChange={(event) => setHome(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                   
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Profile