import CustomTitle from "@/components/custom_title";
import { NewsIdWrapper } from "@/components/news/NewsPageWrapper";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, FreeMode, Navigation, Pagination} from "swiper";
import Layout from "@/locales/en/layout/Layout";
import { useQuery } from "react-query";
import { getSportsId, imgUrl } from "@/api/general";
import { useTranslation } from "react-i18next";

const SportsId = () => {
  let { id } = useParams();
  const { data } = useQuery({
    queryKey: ["sport", id],
    queryFn: () => getSportsId(id),
  });
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  document.title=data?.data?.data?.title
  return (
    <Layout>
      <CustomTitle name={data?.data?.data?.title} my={true} />
      <NewsIdWrapper>
        <div className="container">
          <img className="fotoGlavni"
            src={imgUrl + data?.data?.data?.img}
            alt="img"
            width={"100%"}
            loading={"lazy"}
          />
          <p dangerouslySetInnerHTML={{ __html: data?.data?.data?.text }} />
          <p dangerouslySetInnerHTML={{ __html: data?.data?.data?.text1 }} />
        </div>
        <CustomTitle name={t("lavhalar")} my={true} />
        <div className="container">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={false}
            modules={[FreeMode, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {data?.data?.data?.imgs?.split(",")?.map((v, i, a) => (
              <SwiperSlide key={i}>
                <img
                  className="img-foto"
                  src={
                    i === 0
                      ? `${imgUrl}${v.substring(1, v.length - 1).substring(1)}`
                      : i === a.length - 1
                      ? `${imgUrl}${v.substring(1, v.length - 1).slice(0, -1)}`
                      : `${imgUrl}${v.substring(1, v.length - 1)}`
                  }
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </NewsIdWrapper>
    </Layout>
  );
};

export default SportsId;
