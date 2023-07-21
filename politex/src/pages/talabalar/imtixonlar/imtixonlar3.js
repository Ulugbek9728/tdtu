import React, {useEffect} from 'react';
import Layout from "@/locales/en/layout/Layout";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import bg from "@/assets/exams.jpg";
import CustomTitle from "@/components/custom_title";
import TalabalarCard from "@/components/talabalar/talabalar_card";
import {useTranslation} from "react-i18next";


function Imtixonlar3(props) {
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
                text={t("header.header__sub__menu.menu-7.item-3")}
            />
            <CustomTitle name={t("header.header__sub__menu.menu-7.item-3")}/>
            <div className="container">
                <p>
                    The defence of a diploma project or final qualification work (master's thesis) or the final state
                    certification in mandatory subjects can be carried out in the branches of the department established
                    on the production base, with the involvement of leading industry specialists.
                </p>
                <p>
                    The topics of the final qualification work and master's thesis are formed within the framework of
                    technological problems of industrial enterprises. In particular, it is strictly defined that a
                    master's thesis must be completed within a specific enterprise. Qualified specialists of the
                    production enterprise can be attached to the masters as consultants. Constant communication is
                    established between the supervisor appointed by the university and students, and timely control and
                    high-quality performance of this task are ensured.
                </p>
                <p>
                    The procedure for conducting Graduation Project is provided in the following regulatory document.
                </p>
                <a href="https://test.tdtu.uz/storage/pages/July2023/j6TruaJBVOMWp3c0Xid3.pdf" className='text-primary' target="_blank">
                    ON APPROVAL OF THE REQUIREMENTS FOR THE PERFORMANCE OF THE FINAL QUALIFYING WORK OF BACHELORS IN
                    HIGHER EDUCATIONAL INSTITUTIONS
                </a>
            </div>

        </Layout>
    );
}

export default Imtixonlar3;