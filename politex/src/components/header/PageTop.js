import React from "react";
import { Link } from "react-router-dom";
import Blazon from "@/assets/images/header/blazon.png";
import Flag from "@/assets/images/header/flag-uz.png";
import Music from "@/assets/images/header/music.png";
import QS from "@/assets/images/header/QS.png";
import THE from "@/assets/images/header/THE-logo-2023.png";
import { AiOutlineMail } from "react-icons/ai";
import Guidelines from "@/components/GuideLines";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PageTopStyle from "@/assets/styles/components/PageTopStyle";
import { useQuery } from "react-query";
import { getHomeContact } from "@/api/general";
import {useTranslation} from "react-i18next";

const PageTop = () => {
  const { t } = useTranslation();
  const { data } = useQuery("contact", getHomeContact);
  return (
    <PageTopStyle>
      <div className="header__top">
        <div className="container">
          <div className="header__top__icons">
            <a href="https://www.timeshighereducation.com/world-university-rankings/tashkent-state-technical-university"
            target={"_blank"}>
              <img src={THE} alt="QS" />
            </a>
            <a href="https://www.topuniversities.com/universities/tashkent-state-technical-university-named-after-islam-karimov"
               target={"_blank"}>
              <img src={QS} alt="QS" />
            </a>
            <Link to="/gerb"><img src={Blazon} alt="blazon"/></Link>
            <Link to="/flag">
              <img src={Flag} alt="uz flag" />
            </Link>
            <Link to="/madhiya">
              <img src={Music} alt="music" />
            </Link>
          </div>
          <ul className={"header__top__list"}>
            <li className={"header__top__list__item"}>
              <a href={`tel:${data?.data?.data[0].phone}`}>
                <p>{t("footer.Contact")}</p>
                <span>{data?.data?.data[0].phone}</span>
              </a>
            </li>
            <li className={"header__top__list__item"}>
              <a  target={"_blank"} href={`${data?.data?.data[0].email}`}>
                <AiOutlineMail />
                <span>{data?.data?.data[0].email}</span>
              </a>
            </li>
            <li className={"header__top__list__item"}>
              <Guidelines />
            </li>
            <li className={"header__top__list__item icon"}>
              <a href="https://www.timeshighereducation.com/world-university-rankings/tashkent-state-technical-university"
                 target={"_blank"}>
                <img src={THE} alt="QS" />
              </a>
            </li>
            <li className={"header__top__list__item icon"}>
              <a href="https://www.topuniversities.com/universities/tashkent-state-technical-university-named-after-islam-karimov"
                 target={"_blank"}>
                <img src={QS} alt="QS" />
              </a>
            </li>
            <li className={"header__top__list__item icon"}>
              <Link to="/gerb">
                <img src={Blazon} alt="blazon" />{" "}
              </Link>
            </li>
            <li className={"header__top__list__item icon"}>
              <Link to="/flag">
                <img src={Flag} alt="uz flag" />
              </Link>
            </li>
            <li className={"header__top__list__item icon"}>
              <Link to="/madhiya">
                <img src={Music} alt="music" />
              </Link>
            </li>
            <li className={`header__top__list__item lang`}>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </PageTopStyle>
  );
};

export default PageTop;
