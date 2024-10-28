import React, {useEffect} from 'react';
import Layout from "@/locales/en/layout/Layout";
import {useTranslation} from "react-i18next";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import bg from "@/assets/survey.jpg";
import CustomTitle from "@/components/custom_title";

function SoRovlar(props) {
    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    document.title=t("header.header__sub__menu.menu-8.item-1")

    return (
        <Layout>
            <BigFotoBack
                img={bg}
                text={t("header.header__sub__menu.menu-8.item-1")}
            />
            <CustomTitle name={t("header.header__sub__menu.menu-8.item-1")}/>
            <div className="container">
                <h4>Dear student!</h4>
                <p>
                    Your opinion is very important to us to improve the quality of education in a higher educational
                    institution, and to improve the training of mature specialists in all aspects. Therefore, we ask you
                    to answer the questions in the questionnaire. In each question, circle the answer you choose, and
                    write the answer in the appropriate places. The survey is confidential, it is not necessary to
                    reveal your name. Your opinion will be seen only as a generalization and will help to raise the
                    scientific-pedagogical and spiritual-educational level of professors of the higher education
                    institution. Thank you in advance for your honest and sincere answers!
                </p>
                <p>
                    Participation is possible by following the link provided in the survey:
                </p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdD1YneRl5k0F8upIRpeMdmy59RjDonzell6LFHwMT4QjI7zg/viewform "
                   className='text-primary' target='_blank'>
                    https://docs.google.com/forms/d/e/1FAIpQLSdD1YneRl5k0F8upIRpeMdmy59RjDonzell6LFHwMT4QjI7zg/viewform
                </a>
            </div>
        </Layout>
    );
}

export default SoRovlar;