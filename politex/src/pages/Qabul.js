import { getQabul } from "@/api/general";
import CustomTitle from "@/components/custom_title";
import PdfContent from "@/components/ilmiy_faoliyat/pdf_content";
import Layout from "@/locales/en/layout/Layout";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import styled from "styled-components";

const QabulWrapper = styled.div``;

const Qabul = () => {
  const { t } = useTranslation();
  const { data } = useQuery("rectoeat", getQabul);
  let datas = data?.data?.data.reverse();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  document.title=t("footer.Qabul")

  return (
    <Layout>
      <QabulWrapper>
        <CustomTitle name={t("footer.Qabul")} my={true} />
        <div className="container">
          {datas?.map((v) => (
            <PdfContent data={v} />
          ))}
        </div>
      </QabulWrapper>
    </Layout>
  );
};

export default Qabul;
