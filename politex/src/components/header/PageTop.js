import React from "react";
import {Link} from "react-router-dom";
import Blazon from "@/assets/images/header/blazon.png";
import Flag from "@/assets/images/header/flag-uz.png";
import Music from "@/assets/images/header/music.png";
import QS from "@/assets/images/header/QS.png";
import THE from "@/assets/images/header/THE-logo-2023.png";
import {AiOutlineMail} from "react-icons/ai";
import Guidelines from "@/components/GuideLines";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PageTopStyle from "@/assets/styles/components/PageTopStyle";
import {useQuery} from "react-query";
import {getHomeContact} from "@/api/general";
import {useTranslation} from "react-i18next";
// swiper
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {Autoplay, FreeMode, Pagination} from "swiper";
import SwiperFlag from "@/components/header/swiper_Flag";
import Mesengers from "@/components/footer/mesengers";




const PageTop = () => {
    const {t} = useTranslation();
    const {data} = useQuery("contact", getHomeContact);
    return (
        <PageTopStyle>
            <div className="header__top">
                <div className="container">
                    <div className="header__top__icons">
                        <Swiper
                            direction={'vertical'}
                            slidesPerView={1}
                            spaceBetween={1}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                                reverseDirection: true,

                            }}
                            modules={[ Autoplay]}
                            className="mySwiper"
                            style={{
                                height:"50px",
                                width:"300px",
                            }}>

                            <SwiperSlide>
                                <SwiperFlag/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Mesengers/>
                            </SwiperSlide>

                        </Swiper>


                    </div>
                    <ul className={"header__top__list"}>
                        <div className="phoe_and_email">
                            <li className={"header__top__list__item"}>
                                <a href={`tel:${data?.data?.data[0].phone}`}>
                                    <p>{t("footer.Contact")}</p>
                                    <span>{data?.data?.data[0].phone}</span>
                                </a>
                            </li>
                            <li className={"header__top__list__item"}>
                                <a target={"_blank"} href={`${data?.data?.data[0].email}`}>
                                    <AiOutlineMail/>
                                    <span>{data?.data?.data[0].email}</span>
                                </a>
                            </li>
                        </div>

                        <li className={"header__top__list__item"}>
                            <Guidelines/>
                        </li>

                        <div className="swiperLinks header__top__list__item right">
                            <Swiper
                                direction={'vertical'}
                                slidesPerView={1}
                                spaceBetween={1}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                    reverseDirection: true,

                                }}
                                modules={[ Autoplay]}
                                className="mySwiper"
                                style={{
                                    height:"50px",
                                    width:"300px",
                                    }}>

                                <SwiperSlide>
                                    <SwiperFlag/>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <Mesengers/>
                                </SwiperSlide>

                            </Swiper>
                        </div>


                        <li className={`header__top__list__item lang`}>
                            <LanguageSwitcher/>
                        </li>
                    </ul>
                </div>
            </div>
        </PageTopStyle>
    );
};

export default PageTop;
