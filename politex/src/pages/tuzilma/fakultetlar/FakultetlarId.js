import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import CustomTitle from "@/components/custom_title";
import HodimlarCard from "@/components/tuzilma/HodimlarCard";
import RektorCard from "@/components/tuzilma/RektorCard";
import Layout from "@/locales/en/layout/Layout";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {Autoplay, FreeMode, Pagination} from "swiper";
import { FakultetWrapper } from "@/components/home/fakultetlar/FakultetWrapper";
import FakultetCard from "@/components/home/fakultetlar/FakultetCard";
import { getFacultetId } from "@/api/general";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
import bg from "../../../assets/images/home/number.jpg"
import {t} from "i18next";

const FakultetlarId = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { data } = useQuery({
    queryKey: ["facultet-id", id],
    queryFn: () => getFacultetId(id),
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  document.title=data?.data?.data?.facult?.menu

  return (
    <Layout>
      <BigFotoBack
        img={bg}
        text={data?.data?.data?.facult?.menu}
      />
      <CustomTitle name={data?.data?.data?.facult?.menu} my={true} />
      <div className="container">
        <RektorCard
          img={data?.data?.data.facultdirector?.[0]?.director_img}
          time={data?.data?.data.facultdirector?.[0]?.acceptance}
          degree={data?.data?.data.facultdirector?.[0]?.degree}
          position={data?.data?.data.facultdirector?.[0]?.position}
          name={data?.data?.data.facultdirector?.[0]?.directorname}
          address={data?.data?.data.facultdirector?.[0]?.email}
          phone={data?.data?.data.facultdirector?.[0]?.phone}
        />
      </div>
      <HodimlarCard link={false} data={data?.data?.data?.facultmember} />
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
            {data?.data?.data?.kafedra?.map((v) => (
              <SwiperSlide>
                <FakultetCard
                  link={`/structure/kafedra/${v.id}`}
                  img={v.img}
                  menu={v.menu}
                  icon={v.iconka}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <CustomTitle name={t("FakultetHaqida")} my={true} />
        <div className="container">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.data?.data?.facultabout?.[0]?.text,
            }}
          />
        </div>
      </FakultetWrapper>
    </Layout>
  );
};

export default FakultetlarId;
