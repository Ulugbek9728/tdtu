import React, { useEffect } from "react";
import CustomTitle from "@/components/custom_title";
import TalabalarCard from "@/components/talabalar/talabalar_card";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import Layout from "@/locales/en/layout/Layout";
import { useQuery } from "react-query";
import { getTalabaBakalavr } from "@/api/general";
import { useTranslation } from "react-i18next";
import bg from "../../../assets/markazlar/bakalavr.jpg"

function Bakalavriat() {
  const { data } = useQuery({
    queryKey: "talaba-bak",
    queryFn: () => getTalabaBakalavr(),
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
        text={t("header.header__bottom__nav__item__menu.menu-4.item-41")}
      />
      <CustomTitle
        name={t("header.header__bottom__nav__item__menu.menu-4.item-41")}
      />
      <TalabalarCard data={data?.data?.data} />
    </Layout>
  );
}

export default Bakalavriat;
