import React from 'react';
import THE from "@/assets/images/header/THE-logo-2023.png";
import QS from "@/assets/images/header/QS.png";
import {Link} from "react-router-dom";
import Blazon from "@/assets/images/header/blazon.png";
import Flag from "@/assets/images/header/flag-uz.png";
import Music from "@/assets/images/header/music.png";

function SwiperFlag(props) {
    return (
        <div className="d-flex h-100 w-100 align-items-center">
            <li className={"header__top__list__item icon"}>
                <a href="https://www.timeshighereducation.com/world-university-rankings/tashkent-state-technical-university"
                   target={"_blank"}>
                    <img src={THE} alt="QS"/>
                </a>
            </li>
            <li className={"header__top__list__item icon"}>
                <a href="https://www.topuniversities.com/universities/tashkent-state-technical-university-named-after-islam-karimov"
                   target={"_blank"}>
                    <img src={QS} alt="QS"/>
                </a>
            </li>
            <li className={"header__top__list__item icon"}>
                <Link to="/gerb">
                    <img src={Blazon} alt="blazon"/>
                </Link>
            </li>
            <li className={"header__top__list__item icon"}>
                <Link to="/flag">
                    <img src={Flag} alt="uz flag"/>
                </Link>
            </li>
            <li className={"header__top__list__item icon"}>
                <Link to="/madhiya">
                    <img src={Music} alt="music"/>
                </Link>
            </li>
        </div>
    );
}

export default SwiperFlag;