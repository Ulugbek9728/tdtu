import {getHomeFacts} from "@/api/general";
import {useTranslation} from "react-i18next";
import {useQuery} from "react-query";
import {NumberInstWrapper} from "./NumberInstWrapper";

import React, {useState,} from 'react';
import "aos/dist/aos.css";
import video from "@/assets/video.mp4";

import CountUp from 'react-countup';

const NumberInst = () => {
    const {data} = useQuery("home-facts", getHomeFacts);
    const {t} = useTranslation();


    const [statistika, setStatistika] = useState(false);

    function chengStatixtka(e) {
        console.log(window.scrollY)

        if (window.scrollY >= 5500) {
            setStatistika(true)
        }
    }

    window.addEventListener('scroll', chengStatixtka);
    return (

        <NumberInstWrapper>
            <video autoPlay muted loop id='myVideo'>
                <source src={video} type='video/mp4'/>
                Your browser does not support HTML5 video.
            </video>
            <div className="container ">
                <div className="content">
                    <div className="box box-1">
                        <CountUp
                            start={statistika ? 0 : null}
                            end={data?.data?.data[0].chairs}
                            delay={0}
                            duration={4}>
                            {({countUpRef}) => (
                                <p className="CountUp m-0" ref={countUpRef}></p>
                            )}
                        </CountUp>
                        <p>{t("home.Kafedralar")}</p>
                    </div>
                    <div className="box box-2">
                        <CountUp
                            start={statistika ? 0 : null}
                            end={data?.data?.data[0].faculties}
                            delay={0}
                            duration={4}>
                            {({countUpRef}) => (
                                <p className="CountUp m-0" ref={countUpRef}></p>
                            )}
                        </CountUp>
                        <p>{t("home.Fakultetlar")}</p>
                    </div>
                    <div className="box box-3">
                        <div className="d-flex align-items-center ">
                            <CountUp
                                start={statistika ? 0 : null}
                                end={data?.data?.data[0].professor}
                                delay={0}
                                duration={4}>
                                {({countUpRef}) => (
                                    <p className="CountUp m-0" ref={countUpRef}></p>
                                )}
                            </CountUp><p className="m-0">+</p>
                        </div>

                        <p>{t("home.Professor")}</p>
                    </div>
                    <div className="box box-4">
                        <div className="d-flex align-items-center">
                            <CountUp
                                start={statistika ? 0 : null}
                                end={data?.data?.data[0].doctoral}
                                delay={0}
                                duration={4}>
                                {({countUpRef}) => (
                                    <p className="CountUp m-0" ref={countUpRef}></p>
                                )}
                            </CountUp>
                            <p className="m-0">+</p>
                        </div>

                        <p>{t("home.Doktarantlar")}</p>
                    </div>
                    <div className="box box-5">
                        <div className="d-flex m-0">
                            <CountUp
                                start={statistika ? 0 : null}
                                end={data?.data?.data[0].students}
                                delay={0}
                                duration={4}>
                                {({countUpRef}) => (
                                    <p className="CountUp m-0" ref={countUpRef}></p>
                                )}
                            </CountUp>
                            <p className="m-0">+</p>

                        </div>

                        <p>{t("home.Talabalar")}</p>
                    </div>
                </div>
            </div>
        </NumberInstWrapper>


    );
};

export default NumberInst;
