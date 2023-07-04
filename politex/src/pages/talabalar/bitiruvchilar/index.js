import React, { useEffect } from "react";
import CustomTitle from "@/components/custom_title";
import TalabalarCard from "@/components/talabalar/talabalar_card";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import Layout from "@/locales/en/layout/Layout";
import { useQuery } from "react-query";
import { getTalabaBitiruv } from "@/api/general";
import { useTranslation } from "react-i18next";
import bg from "../../../assets/markazlar/bitiruvchi.jpg"

function Bitiruvchilar() {
  const { data } = useQuery({
    queryKey: "bitiruv",
    queryFn: () => getTalabaBitiruv(),
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
        text={t("header.header__bottom__nav__item__menu.menu-4.item-5")}
      />
      <CustomTitle
        name={t("header.header__bottom__nav__item__menu.menu-4.item-5")}
      />
      <TalabalarCard data={data?.data?.data} />
    </Layout>
  );
}

export default Bitiruvchilar;
