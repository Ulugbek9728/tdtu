import React, {useEffect} from 'react';
import Layout from "@/locales/en/layout/Layout";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import bg from "@/assets/exams.jpg";
import CustomTitle from "@/components/custom_title";
import TalabalarCard from "@/components/talabalar/talabalar_card";
import {useTranslation} from "react-i18next";


function Imtixonlar(props) {
    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    document.title=t("header.header__sub__menu.menu-7.item-1")

    return (
        <Layout>
            <BigFotoBack
                img={bg}
                text={t("header.header__sub__menu.menu-7.item-1")}
            />
            <CustomTitle name={t("header.header__sub__menu.menu-7.item-1")}/>
            <div className="container">
                <p>
                    Exams assess the degree of achievement of the set goals and learning outcomes. Exams relate to
                    specific
                    disciplines. They provide students with feedback on the competencies they have acquired. Exam types
                    (with possible alternatives) are specified for each discipline. Students are informed about the
                    conditions for completing the discipline (coursework, exams, etc.) at the latest at the beginning of
                    studying the discipline. There are transparent rules for admission to the discipline,
                    non-attendance,
                    cases of illness, and compensation for unfavourable conditions for students with disabilities or
                    special
                    needs (for example, pregnancy, child care, and family care), etc. The number and distribution of
                    exams
                    ensure a sufficient workload, as well as sufficient time for preparation. The organization of exams
                    ensures a smooth learning process. Exams are evaluated according to transparent criteria. Students
                    have
                    the opportunity to consult with their teachers about the results of their exams. It is regularly
                    checked
                    whether exams can adequately determine the achievement of learning outcomes, whether the
                    requirements
                    correspond to the level of the educational program, and whether students have enough time to prepare
                    and
                    pass exams.
                </p>
                <p>
                    In the credit-module system, students are evaluated on a 5-point system according to the forms of
                    current and intermediate control. Professors-teachers who conduct seminars, practical or laboratory
                    classes will set "admission" if the student completes all the tasks assigned for the final control.
                    Admittance can be in the form of "allow" or"do not allow". The final control can be oral, written,
                    or test-based, depending on the nature of the subject. The assessment obtained at the final control
                    is the main result of evaluating the student's knowledge of the subject and is recorded in the
                    learning statement.
                </p>
                <p>
                    The teacher who did not conduct the training carries out the final type of control and assessment of
                    the student's knowledge of this type of control.
                </p>
                <p>
                    A professor who has conducted training in the relevant subject is prohibited from participating in
                    the final form of control.
                </p>
                <p>
                    Professors and teachers of other higher educational institutions in the relevant subject may be
                    involved in conducting the final type of control based on the contract.
                </p>
                <p>
                    The procedure for conducting Intermediate Examination, Mid-term Examination, and Final Examination
                    is provided in the following regulatory document
                </p>
                <a href="https://test.tdtu.uz/storage/pages/July2023/2v9galHSr0mckQJEbXD3.pdf "
                   className='text-primary' target="_blank">
                    ON APPROVAL OF THE REGULATION ON THE SYSTEM OF CONTROL AND EVALUATION OF STUDENTS' KNOWLEDGE IN
                    HIGHER EDUCATION INSTITUTIONS
                </a>
            </div>

        </Layout>

    );
}

export default Imtixonlar;