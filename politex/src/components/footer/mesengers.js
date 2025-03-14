import React from 'react';
import TEL from "@/assets/images/footer/tel.png";
import INS from "@/assets/images/footer/Ins.png";
import YT from "@/assets/images/footer/youtube2.png";
import FB from "@/assets/images/footer/fb.png";
import {useQuery} from "react-query";
import {getHomeContact} from "@/api/general";
import "./mesenger.css"

function Mesengers(props) {
    const { data } = useQuery("contact", getHomeContact);
    return (
        <div className="mesengers">
            <a href={data?.data?.data[0]?.telegram}>
                <img src={TEL} alt="" />
            </a>
            <a href={data?.data?.data[0].instagram}>
                <img src={INS} alt="" />
            </a>
            <a href={data?.data?.data[0].twitter}>
                <img src={YT} alt="" />
            </a>
            <a href={data?.data?.data[0].facebook}>
                <img src={FB} alt="" />
            </a>
        </div>
    );
}

export default Mesengers;