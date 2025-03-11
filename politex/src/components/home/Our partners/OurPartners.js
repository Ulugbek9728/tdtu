import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {Autoplay, FreeMode, Pagination} from "swiper";
import {useTranslation} from "react-i18next";
import {OurAlumniWrapper} from "@/components/home/ourAlumni/OurAlumniWrapper";
import OurPartnersCard from "@/components/home/Our partners/OurPartnersCard";
//img
import img1 from "@/components/home/Our partners/img/1.jpg";
import img2 from "@/components/home/Our partners/img/2.JPG";
import img3 from "@/components/home/Our partners/img/3.jpg";
import img4 from "@/components/home/Our partners/img/4.jpg";
import img5 from "@/components/home/Our partners/img/5.jpg";
import img6 from "@/components/home/Our partners/img/6.jpg";
import img7 from "@/components/home/Our partners/img/7.jpg";
import img8 from "@/components/home/Our partners/img/8.jpg";
import img9 from "@/components/home/Our partners/img/9.jpg";
import img10 from "@/components/home/Our partners/img/10.jpg";
import img11 from "@/components/home/Our partners/img/11.jpg";
import img12 from "@/components/home/Our partners/img/12.jpg";
import img13 from "@/components/home/Our partners/img/13.jpg";
import img14 from "@/components/home/Our partners/img/14.jpg";
import img15 from "@/components/home/Our partners/img/15.jpg";
import img16 from "@/components/home/Our partners/img/16.jpg";
import img17 from "@/components/home/Our partners/img/17.jpg";
import img18 from "@/components/home/Our partners/img/18.jpg";
import img19 from "@/components/home/Our partners/img/19.jpg";
import img20 from "@/components/home/Our partners/img/20.jpg";
import img21 from "@/components/home/Our partners/img/21.jpg";
import img22 from "@/components/home/Our partners/img/22.jpg";
import img23 from "@/components/home/Our partners/img/23.jpg";
import img24 from "@/components/home/Our partners/img/24.jpg";


function OurPartners(props) {
    const {t} = useTranslation();

    const [data] = useState([
        {
            img: img1,
            url: "https://www.ku.ac.ae"
        },
        {
            img: img2,
            url: "https://en.nagoya-u.ac.jp/"
        },
        {
            img: img3,
            url: "https://www.kyushu-u.ac.jp/en/"
        },
        {
            img: img4,
            url: "https://www.uni-obuda.hu"
        },
        {
            img: img5,
            url: "https://www.tu.berlin/en"
        },
        {
            img: img6,
            url: "https://satbayev.university/ru"
        },
        {
            img: img7,
            url: "https://www.kstu.kz/?lang=en"
        },
        {
            img: img8,
            url: "https://www.tuhh.de/tuhh/en/startpage"
        },
        {
            img: img9,
            url: "https://www.tu-freiberg.de"
        },
        {
            img: img10,
            url: "https://www.bntu.by"
        },
        {
            img: img11,
            url: "https://www.bstu.by"
        },
        {
            img: img12,
            url: "https://www.bmstu.ru"
        },
        {
            img: img13,
            url: "https://www.spbstu.ru"
        },
        {
            img: img14,
            url: "https://www.czu.cz/en"
        },
        {
            img: img15,
            url: "https://www.itu.edu.tr"
        },
        {
            img: img16,
            url: "https://www.hacettepe.edu.tr"
        },
        {
            img: img17,
            url: "https://www.unicam.it"
        },
        {
            img: img18,
            url: "https://www.agh.edu.pl"
        },
        {
            img: img19,
            url: "https://en.ncut.edu.cn"
        },
        {
            img: img20,
            url: "http://en.xjtu.edu.cn"
        },
        {
            img: img21,
            url: "https://www.um.edu.my"
        },
        {
            img: img22,
            url: "https://web.ttu.tj/ru"
        },
        {
            img: img23,
            url: "https://www.tongmyong.ac.kr"
        },
        {
            img: img24,
            url: "https://mpei.ru"
        },

    ])

    return (
        <OurAlumniWrapper>
            <div className="news-head">
                <div className="container">
                    <p>{t("Partners")}</p>
                </div>
            </div>

            <div className="container">
                <Swiper
                    slidesPerView={5}
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
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1200: {
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
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {data?.map((v, i) => (
                        <SwiperSlide key={i}>
                            <OurPartnersCard img={v.img} url={v.url}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </OurAlumniWrapper>
    );
}

export default OurPartners;