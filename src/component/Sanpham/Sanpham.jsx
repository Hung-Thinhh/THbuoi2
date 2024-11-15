import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSanPham } from "../../services/sanpham"
import "./Sp.scss"
import { Link } from "react-router-dom";
const ListSanpham = () => {
    const [Sp, setSp] = useState('')
    let { id } = useParams();
    console.log(id);
    useEffect(() => {
        fetchSp(id)
    }, [])
    const fetchSp = async (id) => {
        const data = await fetchSanPham(id)
        if (data && data.EC === "0") {
            setSp(data.DT)
        }
    }
    return (
        <div className="sp_container">
            <div className="listsp_container_wrap">
                {Sp &&
                    <div className="list_item">
                        <div className="list_item_ctn">
                            <div className="item_img">
                                <img src={Sp.hinhanh} alt="" />
                            </div>
                            <div className="item_conten">
                                <Link to={`/chitiet/${Sp.id}`} className="item_name">
                                    {Sp.ten}
                                </Link>
                                <div className="item_price">
                                    ${Sp.gia}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default ListSanpham