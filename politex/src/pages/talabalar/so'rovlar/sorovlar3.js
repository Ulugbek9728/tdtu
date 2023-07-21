import React, {useEffect} from 'react';
import Layout from "@/locales/en/layout/Layout";
import {useTranslation} from "react-i18next";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import bg from "@/assets/survey.jpg";
import CustomTitle from "@/components/custom_title";

function Sorovlar3(props) {
    const {t} = useTranslation();

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
                text={t("header.header__sub__menu.menu-8.item-3")}
            />
            <CustomTitle name={t("header.header__sub__menu.menu-8.item-3")}/>
            <div className="container">
                <h4>Dear employer!</h4>
                <p>
                    All our activities and movements aim to prepare qualified and competent personnel for the economic
                    networks. If a student completes four years of education in a higher education institution, their
                    future activities will be directly associated with you. Therefore, what are your requirements for
                    students? What should they pay attention to deeply understand the field? We invite you to
                    participate in the survey and provide your answers to these and other questions. We hope that our
                    cooperation will positively impact the quality of our activities. Your opinion is important to us!
                </p>
                <p>
                    You can participate by following the link provided in the survey.
                </p>
                <p>
                    Participation is possible by following the link provided in the survey:
                </p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScmBR9UNKFoCNKNPipZc2LOCPQngNlhRIEnCofwcqQxAlz2Rg/viewform  "
                   className='text-primary' target='_blank'>
                    https://docs.google.com/forms/d/e/1FAIpQLScmBR9UNKFoCNKNPipZc2LOCPQngNlhRIEnCofwcqQxAlz2Rg/viewform
                </a>
            </div>
        </Layout>
    );
}

export default Sorovlar3;