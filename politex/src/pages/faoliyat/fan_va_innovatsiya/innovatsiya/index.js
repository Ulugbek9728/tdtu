import React from "react";
import Layout from "@/locales/en/layout/Layout";
import CustomTitle from "@/components/custom_title";
import { InnovatsiyaWrapper } from "./style";
import { useQuery } from "react-query";
import { getFaoliyatInnov } from "@/api/general";
import { useTranslation } from "react-i18next";

function Innovatsiya() {
  const { data } = useQuery({
    queryKey: "innov",
    queryFn: () => getFaoliyatInnov(),
  });
  const { t } = useTranslation();

  document.title=t("header.header__sub__menu.menu-4.item-2")

  return (
    <Layout>
      <InnovatsiyaWrapper>
        <CustomTitle name={t("header.header__sub__menu.menu-4.item-2")} />
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: data?.data?.data.text }}
        />
      </InnovatsiyaWrapper>
    </Layout>
  );
}

export default Innovatsiya;
