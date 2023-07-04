import { getCenterId } from "@/api/general";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import CustomTitle from "@/components/custom_title";
import RektorCard from "@/components/tuzilma/RektorCard";
import Layout from "@/locales/en/layout/Layout";
import React from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import bg from "../../../assets/markazlar/sanoat.jpg"

const M5 = () => {
  const { data } = useQuery({
    queryKey: ["centerid", 5],
    queryFn: () => getCenterId(5),
  });
  let datas = data?.data?.data[0];
  const { t } = useTranslation();
  return (
    <>
      <Layout>
        <BigFotoBack
          img={bg}
          text={t("header.header__sub__menu.menu-1.item-5")}
        />
        <CustomTitle name={t("header.header__sub__menu.menu-1.item-5")} />
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
        <CustomTitle name={""} />
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: datas?.text }} />{" "}
        </div>
      </Layout>
    </>
  );
};

export default M5;
