import { getfacultetId } from "@/api/general";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import CustomTitle from "@/components/custom_title";
import RektorCard from "@/components/tuzilma/RektorCard";
import Layout from "@/locales/en/layout/Layout";
import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

const F1 = () => {
  const { data } = useQuery({
    queryKey: ["facultet", 1],
    queryFn: () => getfacultetId(1),
  });
  const data2 = useQuery({
    queryKey: ["facultet-about", 1],
    queryFn: () => getfacultetId(1),
  });
  let datas = data?.data?.data[0];
  const { t } = useTranslation();

  useEffect(() => {
    window.location.href = "https://tdtuof.uz/";
  }, []);
  return (
    <>
      {/*<Layout>*/}
      {/*  <BigFotoBack*/}
      {/*    img={*/}
      {/*      "https://st.hzcdn.com/simgs/pictures/home-offices/new-orleans-inspired-on-yarrow-point-kristi-spouse-interiors-img~90913ed1071c0b05_14-5020-1-7953493.jpg"*/}
      {/*    }*/}
      {/*    text={t("header.header__sub__menu.menu-3.item-1")}*/}
      {/*  />*/}
      {/*  <CustomTitle name={t("header.header__sub__menu.menu-3.item-1")} />*/}
      {/*  <div className="container">*/}
      {/*    <RektorCard*/}
      {/*      key={datas?.id}*/}
      {/*      time={datas?.acceptance}*/}
      {/*      degree={datas?.degree}*/}
      {/*      position={datas?.position}*/}
      {/*      name={datas?.directorname}*/}
      {/*      img={datas?.director_img}*/}
      {/*      address={datas?.email}*/}
      {/*      phone={datas?.phone}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <CustomTitle name={""} />*/}
      {/*  <div className="container">*/}
      {/*    <div dangerouslySetInnerHTML={{ __html: datas?.text }} />*/}
      {/*  </div>*/}
      {/*</Layout>*/}
    </>
  );
};

export default F1;
