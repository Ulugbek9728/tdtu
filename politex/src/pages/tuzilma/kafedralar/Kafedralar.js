import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import { FakultetWrapper } from "@/components/home/fakultetlar/FakultetWrapper";
import Layout from "@/locales/en/layout/Layout";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {Autoplay, FreeMode, Pagination} from "swiper";
import FakultetCard from "@/components/home/fakultetlar/FakultetCard";
import { useQuery } from "react-query";
import { getKafedra } from "@/api/general";
import { useTranslation } from "react-i18next";
import bg from "../../../assets/images/home/number.jpg"

const Kafedralar = () => {
  const { data } = useQuery("kafedra", getKafedra);
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Layout>
        <BigFotoBack
          img={bg}
          text={t("header.header__bottom__nav__item__menu.menu-2.item-5")}
        />
        <FakultetWrapper>
          <div className="news-head">
            <div className="container">
              <p>{t("header.header__bottom__nav__item__menu.menu-2.item-5")}</p>
            </div>
          </div>
          <div className="container">
            <Swiper
              slidesPerView={4}
              spaceBetween={50}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                1512: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                700: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                10: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              modules={[FreeMode, Pagination,Autoplay]}
              className="mySwiper"
            >
              {data?.data?.data?.map((v, i) => {
                i++;
                if (i % 2 === 0) {
                  return (
                    <SwiperSlide key={i}>
                      <FakultetCard
                        link={"/structure/kafedra/" + v.id}
                        img={v.img}
                        menu={v.menu}
                        icon={v.iconka}
                      />
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
            <div className="line-m"></div>
            <Swiper
              slidesPerView={4}
              spaceBetween={50}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                1512: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                700: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                10: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              modules={[FreeMode, Pagination,Autoplay]}
              className="mySwiper"
            >
              {data?.data?.data?.map((v, i) => {
                i++;
                if (i % 2 !== 0) {
                  return (
                    <SwiperSlide key={i}>
                      <FakultetCard
                        link={"/structure/kafedra/" + v.id}
                        img={v.img}
                        menu={v.menu}
                        icon={v.iconka}
                      />
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
          </div>
        </FakultetWrapper>
      </Layout>
    </div>
  );
};

export default Kafedralar;
