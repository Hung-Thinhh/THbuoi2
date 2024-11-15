import axios from "../setup/axios";



const fetchListSanPham = (data) => {
    return axios.get(`/api/getListSanPham/${data}`)
}
const fetchSanPham = (id) => {
    return axios.get(`/api/getSanPham/${id}`)
}

export {
    fetchListSanPham, fetchSanPham,
} 