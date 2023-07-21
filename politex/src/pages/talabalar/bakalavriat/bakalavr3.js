import React, {useEffect} from 'react';
import Layout from "@/locales/en/layout/Layout";
import {useTranslation} from "react-i18next";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import bg from "@/assets/survey.jpg";
import CustomTitle from "@/components/custom_title";


function Bakalavr3(props) {

    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <Layout>
            <CustomTitle name={t("header.header__sub__menu.menu-6.item-3")}/>



        </Layout>
    );
}

export default Bakalavr3;