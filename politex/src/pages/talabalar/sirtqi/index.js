import React, { useEffect } from "react";
import CustomTitle from "@/components/custom_title";
import TalabalarCard from "@/components/talabalar/talabalar_card";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import Layout from "@/layout/Layout";
import { useQuery } from "react-query";
import { getTalabaSirtqi } from "@/api/general";
import { useTranslation } from "react-i18next";
import bg from "../../../assets/markazlar/bakalavr.jpg"

function Sirtqi() {
  const { data } = useQuery({
    queryKey: "sirtqi-talaba",
    queryFn: () => getTalabaSirtqi(),
  });
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Layout>
      <BigFotoBack
        img={bg}
        text={t("header.header__bottom__nav__item__menu.menu-4.item-4")}
      />
      <CustomTitle
        name={t("header.header__bottom__nav__item__menu.menu-4.item-4")}
      />
      <TalabalarCard data={data?.data?.data} />
    </Layout>
  );
}

export default Sirtqi;
