import { getBulimId } from "@/api/general";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import CustomTitle from "@/components/custom_title";
import RektorCard from "@/components/tuzilma/RektorCard";
import Layout from "@/locales/en/layout/Layout";
import React from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import bg from "@/assets/bolimlar/KREDIT.jfif";

const B9 = () => {
  const { data } = useQuery({
    queryKey: ["bulim", 19],
    queryFn: () => getBulimId(19),
  });
  let datas = data?.data?.data[0];
  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <BigFotoBack
            img={bg}
          text={t("header.header__sub__menu.menu-2.item-9")}
        />

        <CustomTitle name={t("header.header__sub__menu.menu-2.item-9")} />
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
          <div dangerouslySetInnerHTML={{ __html: datas?.text }} />
        </div>
      </Layout>
    </>
  );
};

export default B9;
