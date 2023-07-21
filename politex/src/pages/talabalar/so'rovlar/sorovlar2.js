import React, {useEffect} from 'react';
import Layout from "@/locales/en/layout/Layout";
import {useTranslation} from "react-i18next";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import bg from "@/assets/survey.jpg";
import CustomTitle from "@/components/custom_title";

function Sorovlar2(props) {
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
                text={t("header.header__sub__menu.menu-8.item-2")}
            />
            <CustomTitle name={t("header.header__sub__menu.menu-8.item-2")}/>
            <div className="container">
                <h4>Dear professor-teacher!</h4>
                <p>
                    Your opinion is very important to us to improve the quality of the educational process in the higher
                    education institution. Therefore, we ask you to answer the questions in the questionnaire. Answer
                    each question. The survey is confidential, it is not necessary to reveal your name. Your opinion
                    will be considered only as a generalization and will help the higher education institution to
                    improve the quality of education. Thank you in advance for your honest and sincere answers!
                </p>
                <p>
                    Participation is possible by following the link provided in the survey:
                </p>
                <a href="https://docs.google.com/forms/d/1VigNp0cBDYLZzOczHNumHPsMToX_7YuCzHzgvMeYjcw/edit "
                   className='text-primary' target='_blank'>
                    https://docs.google.com/forms/d/1VigNp0cBDYLZzOczHNumHPsMToX_7YuCzHzgvMeYjcw/edit
                </a>
            </div>
        </Layout>
    );
}

export default Sorovlar2;