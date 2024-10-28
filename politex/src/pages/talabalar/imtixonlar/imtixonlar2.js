import React, {useEffect} from 'react';
import Layout from "@/locales/en/layout/Layout";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import bg from "@/assets/exams.jpg";
import CustomTitle from "@/components/custom_title";
import TalabalarCard from "@/components/talabalar/talabalar_card";
import {useTranslation} from "react-i18next";

function Imtixonlar2(props) {
    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    document.title=t("header.header__sub__menu.menu-7.item-2")

    return (
        <Layout>
            <BigFotoBack
                img={bg}
                text={t("header.header__sub__menu.menu-7.item-2")}
            />
            <CustomTitle name={t("header.header__sub__menu.menu-7.item-2")}/>
            <div className="container">
                <p>
                    The final state attestation in the form of final state attestation in compulsory subjects
                    (interdisciplinary) or defence of a diploma project or defence of a final qualification work
                    (master's work) is determined by the decision of the Council of Tashkent State Technical University
                    based on the talent, the desire of graduates and the nature of education.
                </p>
                <p>
                    The form of final state certification determined by the decision of the Council of the Tashkent
                    State
                    Technical University does not change during one academic year. Final state attestation is conducted
                    based on the schedule of final state attestations drawn up by the dean of the faculty or the
                    educational and methodological department and approved by the Vice-rector for Academic Affairs of
                    Tashkent State Technical University within the time limits specified in the schedule of the
                    educational process.
                </p>
                <p>
                    With the involvement of experienced teachers, Tashkent State Technical University develops programs
                    and criteria for evaluating final state attestations and approves them by the University Council and
                    informs students at least three months before the start of final state attestations.
                </p>
                <p>
                    Final state attestation tests are organized by written, test or oral method, and this procedure is
                    determined by the rector of Tashkent State Technical University based on a decision of the Council
                    of the Higher Educational institution and brought to the attention of students three months before
                    the start of the final state attestation. Students are provided with programs of tested subjects,
                    and the necessary conditions are created for their preparation and counselling. Students who have
                    completed the relevant curriculum and subject programs and successfully passed all the exams
                    provided for in the curriculum are allowed to participate in the final state certification.
                </p>
                <p>
                    Final state attestations and defence of a diploma project or final qualification work (master's
                    thesis) or final state attestation in mandatory subjects are held at open meetings of final state
                    attestation commissions with the participation of at least two-thirds of the members, as well as
                    under the chairmanship of the deputy chairman in the absence of the chairman.
                </p>
                <p>
                    The procedure for conducting Final state certification is provided in the following regulatory
                    document
                </p>
                <a href="https://test.tdtu.uz/storage/pages/July2023/bMsIsMcqU1sivGKSzZdW.pdf" className='text-primary' target="_blank">
                    ON AMENDMENTS TO THE REGULATION ON THE FINAL STATE CERTIFICATION OF GRADUATES OF HIGHER EDUCATIONAL
                    INSTITUTIONS OF THE REPUBLIC OF UZBEKISTAN
                </a>
            </div>

        </Layout>
    );
}

export default Imtixonlar2;