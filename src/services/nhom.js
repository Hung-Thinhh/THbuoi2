import axios from "../setup/axios";



const fechtNhom = (data) => {
    return axios.get(`/api/getNhom`)
}


export {
    fechtNhom
} 