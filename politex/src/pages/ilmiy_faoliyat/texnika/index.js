import React, { useState } from "react";
import PdfContent from "@/components/ilmiy_faoliyat/pdf_content";
import { IlmiyFaoliyatWrapper } from "@/pages/ilmiy_faoliyat/style";
import Layout from "@/locales/en/layout/Layout";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import CustomTitle from "@/components/custom_title";
import { useQuery } from "react-query";
import { getTexnika, imgUrl } from "@/api/general";
import { useTranslation } from "react-i18next";
import bg from "../../../assets/markazlar/ilmiyFaoliyat.jpg"

function Texnika() {
  const id = "Texnika yulduzlari";
  const { data } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTexnika(id),
  });
  const [img, setimg] = useState("");
  const { t } = useTranslation();

  return (
    <Layout>
      <IlmiyFaoliyatWrapper>
        <BigFotoBack
          img={bg}
          text={t("header.header__bottom__nav__item__menu.menu-5.item-1")}
        />
        <CustomTitle
          name={t("header.header__bottom__nav__item__menu.menu-5.item-1")}
        />
        <div className="container">
          <div className="wrapper ">
            <div className="left-content">
              <div className="image-box">
                <img
                  src={
                    img
                      ? imgUrl + img
                      : "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                  }
                  alt=""
                />
              </div>
              <div className="pdf-box">
                {data?.data?.data?.map((v, i) => {
                  i++;
                  if (i % 2 != 0)
                    return (
                      <div onClick={() => setimg(v.img)}>
                        <PdfContent data={v} />
                      </div>
                    );
                })}
              </div>
            </div>
            <div className="right-content">
              <div className="pdf-box">
                {data?.data?.data?.map((v, i) => {
                  i++;
                  if (i % 2 == 0)
                    return (
                      <div onClick={() => setimg(v.img)}>
                        <PdfContent data={v} />
                      </div>
                    );
                })}
              </div>
            </div>
          </div>
        </div>
      </IlmiyFaoliyatWrapper>
    </Layout>
  );
}

export default Texnika;
