import { getHomeFacts } from "@/api/general";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { NumberInstWrapper } from "./NumberInstWrapper";
import {Parallax} from 'react-parallax';

import React, {useEffect, useState,} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import NUMBERIMG from "@/assets/images/home/number.jpg";

import CountUp from 'react-countup';


const NumberInst = () => {
  const { data } = useQuery("home-facts", getHomeFacts);
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init()

  });

  const [statistika, setStatistika] = useState(false);

  function chengStatixtka() {
    if (window.scrollY>=5500){
      setStatistika(true)
    }
  }
  window.addEventListener('scroll',chengStatixtka);

  return (
      <Parallax bgImage={NUMBERIMG} className="parallax" strength={300}>
        <NumberInstWrapper>
          <div className="container">
            <div className="content">
              <div className="box box-1"
                   data-aos="zoom-in"
                   data-aos-duration="800"
                   data-aos-easing="ease-in-sine">
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
              <div className="box box-2"
                   data-aos="zoom-in"
                   data-aos-duration="800"
                   data-aos-easing="ease-in-sine">
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
              <div className="box box-3"
                   data-aos="zoom-in"
                   data-aos-duration="800"
                   data-aos-easing="ease-in-sine">
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
              <div className="box box-4"
                   data-aos="zoom-in"
                   data-aos-duration="800"
                   data-aos-easing="ease-in-sine">
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
              <div className="box box-5"
                   data-aos="zoom-in"
                   data-aos-duration="800"
                   data-aos-easing="ease-in-sine">
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
      </Parallax>

  );
};

export default NumberInst;
