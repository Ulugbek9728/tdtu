import React  from "react";
import Layout from "@/locales/en/layout/Layout";
import CustomTitle from "@/components/custom_title";
import { MoliyaviyFaoliatWrapper } from "./style";
import { useQuery } from "react-query";
import { getFaoliyatMoliyaviy } from "@/api/general";
import { useTranslation } from "react-i18next";
import PdfContent from "@/components/ilmiy_faoliyat/pdf_content";

function MoliyaviyFaoliat() {
  const { data } = useQuery({
    queryKey: "moliyaviy",
    queryFn: () => getFaoliyatMoliyaviy(),
  });


  const { t } = useTranslation();
  
  document.title=t("header.header__bottom__nav__item__menu.menu-3.item-2")
  
  return (
    <Layout>
      <MoliyaviyFaoliatWrapper>
        <CustomTitle
          name={t("header.header__bottom__nav__item__menu.menu-3.item-2")}
        />
        <div className="container">
          {data?.data?.data?.map((v, i) => (<PdfContent key={v?.id} data={v} />)).reverse()}
        </div>

      </MoliyaviyFaoliatWrapper>
    </Layout>
  );
}

export default MoliyaviyFaoliat;
