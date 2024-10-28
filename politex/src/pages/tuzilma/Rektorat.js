import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import Layout from "@/locales/en/layout/Layout";
import CustomTitle from "@/components/custom_title/index";
import React, { useEffect } from "react";
import RektorCard from "@/components/tuzilma/RektorCard";
import { useQuery } from "react-query";
import { getRectorat } from "@/api/general";
import { useTranslation } from "react-i18next";
import bg from "../../assets/rectorat.jpg"

const Rektorat = () => {
  const { data } = useQuery("rectoeat", getRectorat);
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

    document.title=t("header.header__bottom__nav__item__menu.menu-2.item-1")
  return (
    <Layout>
      <BigFotoBack
        img={bg}
        text={t("header.header__bottom__nav__item__menu.menu-2.item-1")}
      />
      <CustomTitle
        name={t("header.header__bottom__nav__item__menu.menu-2.item-1")}
        my={true}
      />
      <div className="container">
        {data?.data?.data?.map((v) => (
          <RektorCard
            key={v.id}
            // point={false}
            // link={`/structure/rectorate/${v.id}`}
            time={v.qabul}
            degree={v.degree}
            position={v.position}
            name={v.name}
            img={v.img}
            address={v.address}
            phone={v.phone}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Rektorat;
