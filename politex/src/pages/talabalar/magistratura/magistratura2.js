import React, {useEffect, useState} from 'react';
import Layout from "@/locales/en/layout/Layout";
import {useTranslation} from "react-i18next";
import CustomTitle from "@/components/custom_title";

function Magistratura2(props) {
    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <Layout>
            <CustomTitle name={t("header.header__sub__menu.menu-9.item-2")}/>

            <div className="container">
                <table className="table table-bordered ">
                    <thead>
                    <tr>
                        <th>Learning Outcome (critical units of competence)</th>
                        <th colSpan={2}>Module name</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            LO 1 Able to competently express his speeches in Uzbek, Russian and foreign languages
                        </td>
                        <td>O’RT1206</td>
                        <td>Uzbek (Russian) language</td>
                    </tr>
                    <tr>
                        <td>LO 1 Able to competently express his speeches in Uzbek, Russian and foreign languages</td>
                        <td>XT1408</td>
                        <td>Foreign language</td>
                    </tr>
                    <tr>
                        <td>LO 2 Able to make decisions based on information of philosophical and historical content,
                            methods of discussion and polemics, engineering psychology and pedagogy
                        </td>
                        <td>O’EYT1104</td>
                        <td>The newest history of Uzbekistan</td>
                    </tr>
                    <tr>
                        <td>LO 2 Able to make decisions based on information of philosophical and historical content,
                            methods of discussion and polemics, engineering psychology and pedagogy
                        </td>
                        <td>FAL3504</td>
                        <td>Philosophy</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}

export default Magistratura2;