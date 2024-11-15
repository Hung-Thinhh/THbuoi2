import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchListSanPham } from "../../services/sanpham"
import "./listSp.scss"
import { Link } from "react-router-dom";
const ListSanpham = () => {
    const [listSp, setListSp] = useState('')
    let { id } = useParams();
    console.log(id);
    useEffect(() => {
        fetchListSp(id)
    }, [id])
    const fetchListSp = async (id) => {
        const data = await fetchListSanPham(id)
        if (data && data.EC === "0") {
            setListSp(data.DT)
        }
    }
    return (
        <div className="listsp_container">
            <div className="listsp_container_wrap">
                {listSp && listSp.map((sanpham) => {
                    return (
                        <div className="list_item">
                            <div className="list_item_ctn">
                                <div className="item_img">
                                    <img src={sanpham.hinhanh} alt="" />
                                </div>
                                <div className="item_conten">
                                    <Link to={`/chitiet/${sanpham.id}`} className="item_name">
                                        {sanpham.ten}
                                    </Link>
                                    <div className="item_price">
                                        ${sanpham.gia}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ListSanpham