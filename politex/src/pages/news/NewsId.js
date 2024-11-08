import CustomTitle from "@/components/custom_title";
import {NewsIdWrapper} from "@/components/news/NewsPageWrapper";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, FreeMode, Navigation, Pagination} from "swiper";
import Layout from "@/locales/en/layout/Layout";
import {getNewsId, imgUrl} from "@/api/general";
import {useQuery} from "react-query";
import {useTranslation} from "react-i18next";
import Announcements from "@/components/news/Announcements";
import {Helmet} from "react-helmet";

function getTexFromHtml(str) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return doc.body.textContent.trim()
}

const NewsId = () => {
    let {id} = useParams();


    const {data} = useQuery({
        queryKey: ["todos", id],
        queryFn: () => getNewsId(id),
    });
    const {t} = useTranslation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    let desc = getTexFromHtml(data?.data?.data?.text1).split('.')[0];
    let LDJson = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: data?.data?.data?.title,
        image: {
            '@type': 'ImageObject',
            url: imgUrl + data?.data?.data?.img,
            width: '1920',
            height: '1080'
        },
        datePublished: data?.data?.data?.created_at,
        dateModified: data?.data?.data?.updated_at,
        description: desc,
        author: [{
            "@type": "Organization",
            name: "TDTU",
            url: "https://tdtu.uz"
        }]
    }
    console.log(data)

    return (
        <Layout>
            <Helmet>
                <title>{data?.data?.data?.title}</title>
                <meta name="description" content={`${desc}`}/>
                <link rel="canonical" href={`https://tdtu.uz/new/news/${id}`}/>
                <meta property="og:title" content={`${data?.data?.data?.title}`}/>
                <meta property="og:url" content={`https://tdtu.uz/new/news/${id}`}/>
                <meta property="og:description" content={`${desc}`}/>
                <meta property="og:image" content={imgUrl + data?.data?.data?.img}/>
                <script type='application/ld+json'>
                    {JSON.stringify(LDJson)}
                </script>
            </Helmet>
            <NewsIdWrapper>
                <div className="container  mt-lg-5 mt-3">
                    <div className="content-news">
                        <div className="">
                            <h1 className="text1">{data?.data?.data?.title} </h1>

                            <img
                                className="fotoGlavni"
                                src={imgUrl + data?.data?.data?.img}
                                alt={data?.data?.data?.title}
                                title={data?.data?.data?.title}
                            />
                        </div>
                        <Announcements/>
                    </div>

                    <p dangerouslySetInnerHTML={{__html: data?.data?.data?.text1}}/>
                </div>
                <CustomTitle name={t("lavhalar")} my={true}/>
                <div className="container">
                    <Swiper
                        breakpoints={{
                            140: {
                                slidesPerView: 2,
                            },

                            1200: {
                                slidesPerView: 3,

                            },
                        }}
                        slidesPerView={3}
                        spaceBetween={10}
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

export default NewsId;
