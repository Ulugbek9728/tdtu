import React, {useState} from "react";
import PdfContent from "@/components/ilmiy_faoliyat/pdf_content";
import {IlmiyFaoliyatWrapper} from "@/pages/ilmiy_faoliyat/style";
import Layout from "@/locales/en/layout/Layout";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import CustomTitle from "@/components/custom_title";
import {useQuery} from "react-query";
import {getTexnika, imgUrl} from "@/api/general";
import {useTranslation} from "react-i18next";
import bg from "../../../assets/markazlar/ilmiyFaoliyat.jpg"

function Texnika() {
    // const id = "Texnika yulduzlari";
    // const { data } = useQuery({
    //   queryKey: ["todos", id],
    //   queryFn: () => getTexnika(id),
    // });
    // const [img, setimg] = useState("");
    const {t} = useTranslation();

    return (
        <Layout>
            <IlmiyFaoliyatWrapper>
                <BigFotoBack
                    img={bg}
                    text={t("header.header__bottom__nav__item__menu.menu-3.item-6")}
                />
                <CustomTitle
                    name={t("header.header__bottom__nav__item__menu.menu-3.item-6")}
                />
                <div className="container">
                    <p className='border-bottom'>{t("Magazines.item1")}</p>
                    <ul className="mt-3">
                        <li>
                            <a href="https://online.anyflip.com/koxwe/ahjm/index.html" target={"_blank"}>1/2024</a>
                        </li>
                    </ul>

                </div>
            </IlmiyFaoliyatWrapper>
        </Layout>
    );
}

export default Texnika;
