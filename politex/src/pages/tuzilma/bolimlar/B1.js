import { getBulimId } from "@/api/general";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import CustomTitle from "@/components/custom_title";
import RektorCard from "@/components/tuzilma/RektorCard";
import Layout from "@/locales/en/layout/Layout";
import React from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import bg from "@/assets/bolimlar/callcenter.jpg";
import {HodimlarWrapper} from "@/components/tuzilma/TuzilmaWrapper";

import { imgUrl } from "@/api/general";


const B1 = () => {
  const { data } = useQuery({
    queryKey: ["bulim", 34],
    queryFn: () => getBulimId(34),
  });
  let datas = data?.data?.data[0];

  const  departmentInfo2  = useQuery({
    queryKey: ["bulim", 33],
    queryFn: () => getBulimId(33),
  });
  let department2 = departmentInfo2?.data?.data?.data[0]

  const  departmentInfo1  = useQuery({
    queryKey: ["bulim", 32],
    queryFn: () => getBulimId(32),
  });
  let department1 = departmentInfo1?.data?.data?.data[0]
  const { t } = useTranslation();

  document.title=t("header.header__sub__menu.menu-2.item-1")

  return (
      <>
        <Layout>
          <BigFotoBack
              img={bg}
              text={t("header.header__sub__menu.menu-2.item-1")}
          />

          <CustomTitle name={t("header.header__sub__menu.menu-2.item-1")} />
          <div className="container">
            <RektorCard
                key={datas?.id}
                time={datas?.acceptance}
                degree={datas?.degree}
                position={datas?.position}
                name={datas?.directorname}
                img={datas?.director_img}
                address={datas?.email}
                phone={datas?.phone}
            />
          </div>
          <HodimlarWrapper>
            <div className="news-head">
              <div className="container">
                <p>{t("header.header__bottom__nav__item__menu.menu-2.item-3")}</p>
              </div>
            </div>
            <div className="container">
              <div className="card-news">
                <div key={department2?.id} className="box-hodimlar">
                  <img src={(imgUrl+department2?.director_img)} alt=""/>
                  <div className="text-box">
                    <p className="bold">
                      {department2?.directorname}
                    </p>
                    <p>
                      <span className="bold">{t("person.Lavozimi")}</span> {department2?.position}
                    </p>
                    <p>
                      <span className="bold">{t("person.darajasi")}</span> {department2?.degree}
                    </p>
                    <p>
                      <span className="bold">{t("person.Telefon")}</span> {department2?.phone}
                    </p>
                    <p>
                      <span className="bold">{t("person.mail")} </span> {department2?.email}
                    </p>
                  </div>
                </div>
                <div key={department1?.id} className="box-hodimlar">
                  <img src={(imgUrl+department1?.director_img)} alt=""/>
                  <div className="text-box">
                    <p className="bold">
                      {department1?.directorname}
                    </p>
                    <p>
                      <span className="bold">{t("person.Lavozimi")}</span> {department1?.position}
                    </p>
                    <p>
                      <span className="bold">{t("person.darajasi")}</span> {department1?.degree}
                    </p>
                    <p>
                      <span className="bold">{t("person.Telefon")}</span> {department1?.phone}
                    </p>
                    <p>
                      <span className="bold">{t("person.mail")} </span> {department1?.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </HodimlarWrapper>
          <CustomTitle name={""} />
          <div className="container">
            <div dangerouslySetInnerHTML={{ __html: datas?.text }} />
          </div>
        </Layout>
      </>
  );
};

export default B1;
