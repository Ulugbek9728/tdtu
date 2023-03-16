import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import Layout from "@/layout/Layout";
import React, { useEffect } from "react";
import Fakultet from "@/components/home/fakultetlar/Fakultet";
import { useTranslation } from "react-i18next";
import bg from "../../../assets/images/home/number.jpg"


const Fakultetlar = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Layout>
        <BigFotoBack
          img={bg}
          text={t("header.header__bottom__nav__item__menu.menu-2.item-4")}
        />
        <Fakultet />
      </Layout>
    </>
  );
};

export default Fakultetlar;
