import React from 'react';
import Layout from "@/locales/en/layout/Layout";
import CustomTitle from "@/components/custom_title";
import {useTranslation} from "react-i18next";

function GreenUniversitet(props) {
    const {t} = useTranslation();
    // document.title=t("bayrog1")
    return (
        <Layout>
            <CustomTitle name={"Yashil universitet"} my={true}/>
        </Layout>
    );
}

export default GreenUniversitet;