import React from "react";
import { InteractiveServicesWrapper } from "./InteractiveServicesWrapper";
import XIZMATLAR from "@/assets/images/home/xizmatlar.svg";
import SMS from "@/assets/images/home/sms.svg";
import PAPER from "@/assets/images/home/paper.svg";
import BOOK from "@/assets/images/home/book.svg";
import schedule from "@/assets/images/home/schedule.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const InteractiveServices = () => {
  const { t } = useTranslation();
  return (
    <InteractiveServicesWrapper>
      <div className="news-head">
        <div className="container">
          <p>{t('home.Interaktiv')}</p>
          {/* <ButtonHeigthWrapper>{t("barchasi")}</ButtonHeigthWrapper> */}
        </div>
      </div>
      <div className="container">
        <div className="card-servise">
          <a
              href={"/students/schedule"}
              className="card-box"
          >
            <img src={schedule} alt="" className="icon" />
            <div className="content">
              <p className="text-1">
                {t("header.header__bottom__nav__item__menu.menu-4.item-40")}
              </p>
              <p className="text-2">
                {t("header.header__bottom__nav__item__menu.menu-4.item-40")}

              </p>
            </div>
          </a>
          <a href="http://Webmail.tdtu.uz" target='_blank' className="card-box">
            <img src={SMS} alt="" className="icon" />
            <div className="content">
              <p className="text-1">{t("pochta")}</p>
              <p className="text-2">https://webmail.tdtu.uz/</p>
            </div>
          </a>

          <Link
            to={"/university/rector-virtual-reception"}
            className="card-box"
          >
            <img src={PAPER} alt="" className="icon" />
            <div className="content">
              <p className="text-1">
                {t("pages.university.rector-virtual-reception-title")}
              </p>
              <p className="text-2">
                {t("pages.university.rector-virtual-reception-title")}
              </p>
            </div>
          </Link>
          <a href="https://t.me/tdtu_arm" className="card-box">
            <img src={BOOK} alt="" className="icon" />
            <div className="content">
              <p className="text-1">{t("Onlayn")}</p>
              <p className="text-2">https://t.me/tdtu_arm</p>
            </div>
          </a>
          <a
            href="https://student.tdtu.uz/dashboard/login"
            className="card-box"
          >
            <img src={PAPER} alt="" className="icon" />
            <div className="content">
              <p className="text-1">HEMIS</p>
              <p className="text-2">HEMIS Student axborot tizimi</p>
            </div>
          </a>
        </div>
        <img src={XIZMATLAR} alt="" className="img-humans" />
      </div>
    </InteractiveServicesWrapper>
  );
};

export default InteractiveServices;
