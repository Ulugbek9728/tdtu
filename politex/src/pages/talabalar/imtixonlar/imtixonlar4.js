import React, {useEffect} from 'react';
import Layout from "@/locales/en/layout/Layout";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import bg from "@/assets/exams.jpg";
import CustomTitle from "@/components/custom_title";
import TalabalarCard from "@/components/talabalar/talabalar_card";
import {useTranslation} from "react-i18next";

function Imtixonlar4(props) {

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
                text={t("header.header__sub__menu.menu-7.item-4")}
            />
            <CustomTitle name={t("header.header__sub__menu.menu-7.item-4")}/>
            <div className="container">
                <p>
                    The topics of the master's thesis are determined by the department of a higher educational
                    institution that trains specialists, taking into account the prospects for the development of the
                    industry and modern achievements in science, education, technology, technology and economics, as
                    well as the requirements of personnel customers and the consent of the partner enterprise.
                </p>
                <p>
                    Master's dissertation is formed within the framework of technological problems of partner
                    enterprises, economic contracts and scientific projects being carried out at the Department.
                </p>
                <p>
                    The master's thesis topic is provided to the student during the first semester. The work is carried
                    out under the scientific supervision of a teacher who has an academic degree and academic title and
                    works in this educational institution for the assignment of the scientific degree of Doctor of
                    Sciences in the relevant speciality or department that trains specialists. Highly qualified
                    specialists from the Academy of Sciences of the Republic of Uzbekistan and industry research
                    institutes, design institutes, as well as from partner enterprises can be involved as scientific
                    consultants.
                </p>
                <p>
                    The content of the master's thesis should record the initial foundations of scientific research( or
                    scientific and technical solutions), its implementation and the results obtained in a systematic
                    form. At the same time, it is necessary to analyze the scientific basis (or scientific and technical
                    solutions) from all sides, consider existing alternatives and choose one of them.
                </p>
                <p>
                    The information obtained by the results of the master's thesis is fixed in the form of a text or
                    visual material, in which the author proves the theoretical or practical significance of the topic.
                    The size and content of the volume of text and demonstration material are determined by the
                    department that trains specialists, depending on the direction of the topic of the master's thesis
                    (scientific or scientific-technical) and the requirements of the customer specialist.
                </p>
                <p>
                    A master's thesis completed within the prescribed period must be submitted to the State Attestation
                    Commission together with the conclusion of the scientific supervisor, an external review of the
                    researcher or specialist in this field, and a certificate on the implementation of the personal plan
                    of the master's educational program of the relevant speciality.
                </p>
                <p>
                    The Master's thesis is publicly defended before the State Attestation Commission and the staff.
                </p>
                <p>
                    The procedure for conducting a Master's Dissertation is provided in the following regulatory
                    document
                </p>
                <a href="https://test.tdtu.uz/storage/pages/July2023/5koDhfgRYLnE25hGpqcy.pdf" className='text-primary' target="_blank">
                    ON THE APPROVAL OF THE REGULATIONS ON THE MAGISTRACY
                </a>
            </div>

        </Layout>
    );
}

export default Imtixonlar4;