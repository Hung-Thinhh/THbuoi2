import axios from "../setup/axios";


const registerNewUser = (username,password) => {
    return axios.post('/api/signup', {
        username,password
        })
}

const loginUser = (valueLogin, password) => {
    return axios.post('/api/login', {
        username:valueLogin, password    
        })
}

const getUserAccount = () => {
    return axios.get(`/api/account`) 
}
const logOutUser = () => {
    return axios.get(`/api/logout`) 

}
const getUserProfile = () => {
    return axios.get(`/api/profile`) 
}


export {
    registerNewUser,
    loginUser,
    getUserAccount,
    logOutUser,
    getUserProfile
} 