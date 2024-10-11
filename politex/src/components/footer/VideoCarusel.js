import React, {useState} from "react";
import { UsefulLinksWrapper } from "./FooterWrapper";
import { useTranslation } from "react-i18next";
import arduino from "../../assets/mahoratDarslari/arduino.png"
import proteus from "../../assets/mahoratDarslari/proteusMultisim.png"
import Slider from "react-slick";

const VideoCarusel = () => {
    const [data] = useState([
        {
            img:arduino,
            url:"https://www.youtube.com/watch?v=w7-sqamhxzE"
        },{
            img:proteus,
            url:"https://www.youtube.com/watch?v=edXr0Gt1AVg"
        }
    ]);

    const { t } = useTranslation();
    var settings = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <UsefulLinksWrapper>
            <div className="news-head">
                <div className="container">
                    <p>
                        {t("footer.MahoratDarslik")}

                    </p>
                </div>
            </div>
            <div className="container">
                <Slider {...settings}>
                    {data?.map((v, i) => (
                        <div className="swiper-slide" key={i}>
                            <a href={v?.url} target="blank" className="box-useful-video">
                                <img src={v?.img} alt="usefull links" />
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </UsefulLinksWrapper>
    );
};

export default VideoCarusel;
