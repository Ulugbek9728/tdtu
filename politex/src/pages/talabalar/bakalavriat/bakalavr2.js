import React, {useEffect, useState} from 'react';
import Layout from "@/locales/en/layout/Layout";
import {useTranslation} from "react-i18next";
import CustomTitle from "@/components/custom_title";


function Bakalavr2(props) {

    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    document.title=t("header.header__sub__menu.menu-6.item-2")

    return (
        <Layout>
            <CustomTitle name={t("header.header__sub__menu.menu-6.item-2")}/>

            <div className="container">

                <table className="table table-bordered " width="1346">
                    <tbody>
                    <tr>
                        <td colSpan="3" width="1346">
                            <p><strong>BACHELOR&rsquo;S EDUCATIONAL PROGRAM
                                607</strong><strong>12100</strong><strong> - </strong><strong>METALLURGY</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td width="212">
                            <p><strong>Educational objectives of the EP</strong></p>
                        </td>
                        <td colSpan="2" width="1134">
                            <p>&nbsp;</p>
                            <p>Training of highly qualified specialists in metallurgy with the knowledge to work at
                                enterprises and organizations in the metallurgical industry in production processes for
                                processing raw materials and creating products based on technological regulations.</p>
                        </td>
                    </tr>
                    <tr>
                        <td width="212">
                            <p><strong>The objects of professional activity of bachelor in EP BА
                                60712100 &ndash; Metallurgy</strong></p>
                        </td>
                        <td colSpan="2" width="1134">
                            <p><strong>&nbsp;</strong></p>
                            <p>- processes of metallurgical processing of ores of ferrous and non-ferrous metals.;</p>
                            <p>- fundamentals of technological processes development;</p>
                            <p>- thermal units in metallurgy;</p>
                            <p>- physicochemical fundamentals of metallurgical processes;</p>
                            <p>- mechanical machines and technologies of metallurgical plants;</p>
                            <p>- processes of extraction of composite and powder metals;</p>
                            <p>- means of technical support of scientific and production activities;</p>
                            <p>- means of technical support of scientific and production activities; educational process
                                in professional colleges.</p>
                        </td>
                    </tr>
                    <tr>
                        <td width="212">
                            <p><strong>Requirements for the professional competence of bachelor in the educational
                                program </strong><strong>EP BА 60712100 &ndash; Metallurgy</strong></p>
                            <p><strong>&nbsp;</strong></p>
                        </td>
                        <td colSpan="2" width="1134">
                            <p><strong>&nbsp;</strong></p>
                            <p>acquisition of skills of search, analysis of normative legal acts and their use in
                                professional activity;</p>
                            <p>to acquire skills in automated development based on the system approach in the design of
                                metallurgical plants;</p>
                            <p>to be able to develop and study mathematical, information and simulation models on the
                                subject of experimental construction and practical work;</p>
                            <p>to have skills in the development of design and programme documentation;</p>
                            <p>to be able to master international and professional standards of information
                                technologies, modern paradigms and methodologies, instrumental and computer means in
                                practice, according to the speciality of training;</p>
                            <p>acquisition of skills in execution, organisation and mastering of metallurgical
                                processes;</p>
                            <p>to be able to control compliance with technological discipline in the design of
                                metallurgical processes for customers;</p>
                            <p>to have the skills to observe the code of professional ethics;</p>
                            <p>to be able to develop and implement measures for rational utilisation of metallurgical
                                raw materials and resources;</p>
                            <p>to acquire skills of resource planning necessary to ensure continuity of work with
                                customers in metallurgy.</p>
                            <p><strong>&nbsp;</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td width="212">
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>Professional responsibilities of </strong><strong>BА
                                60712100 &ndash; Metallurgy</strong></p>
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>&nbsp;</strong></p>
                        </td>
                        <td colSpan="2" width="1134">
                            <p>The assumed profile of competencies achieved in the educational program allows one to
                                engage in professional activities in the following fields:</p>
                            <p><strong>In engineering and research and design activities</strong>:</p>
                            <p>- to have an understanding of the structure, physical and chemical properties of
                                metal-containing raw materials and materials, technical and economic indicators of pyro
                                metallurgical and hydrometallurgical processes, material and heat balance of
                                metallurgical production, technological modes and norms, main (technological) and
                                auxiliary functions of production, ability to select production processes based on
                                technical regulations, process raw materials and create a project of production of
                                products;</p>
                            <p>- development and research of mathematical, information and simulation models for
                                experimental construction and practical work;</p>
                            <p>- development of design and program documentation;</p>
                            <p>- mastering the skills of applying international and professional standards of
                                information technologies, modern paradigms and methodologies, instrumental and
                                computational tools in practice per the speciality being trained;</p>
                            <p>.</p>
                            <p>&nbsp; <strong> In production and technological activities</strong>:</p>
                            <p>- Effective use of objects, processes, systems, equipment and technical means in the
                                field of engineering works;</p>
                            <p>- participation in the development of systems, technological processes, their elements
                                and technological documents as part of the management staff;</p>
                            <p>- ensuring safe operation of facilities, processes, systems, equipment and technical
                                means;</p>
                            <p>- development of technological solutions for the organisation and improvement of
                                production;</p>
                            <p>- technical and economic analysis.</p>
                            <p>-selection and application of effective methods of production organization</p>
                            <p>-observance of the rules of professional ethics</p>
                            <p><strong>In organisational and management activities</strong>:</p>
                            <p>- development of methods and mechanisms for control and quality assessment of
                                technological processes of construction production related to the creation and use of
                                modern information technology systems;</p>
                            <p>- control of production processes on the basis of environmental and labour safety
                                compliance requirements;</p>
                            <p>- quality control in the production process;</p>
                            <p>- organising the work of a team of performers;</p>
                            <p>- making managerial decisions in conditions of diversity of opinions;</p>
                            <p>- organising and managing the work of the main production unit;</p>
                            <p>- drawing up a work plan for the activities to be performed and assessing the results
                                achieved during its execution, control and implementation;</p>
                            <p>- skills of control over compliance of production processes with the requirements of
                                environmental protection, fire safety, technical safety and labour protection.</p>
                            <p><strong>In-service and maintenance activities</strong>:</p>
                            <p>- organisation of testing, maintenance and repair of objects, processes, systems,
                                equipment and technical means related to the field of engineering education;</p>
                            <p>- development and application of standard technological processes of maintenance and
                                repair of objects, processes, systems, equipment and technical means related to
                                engineering education.</p>
                            <p>&nbsp; In research and development activities:</p>
                            <p>- participation in analysing the state of the objects of activity using modern methods
                                and means;;</p>
                            <p>- participation in the design, development, testing and effective use of objects,
                                processes, systems, equipment and technical means in the field of engineering works;</p>
                            <p>- participation in research to reduce unproductive time, labour and material resources,
                                selection of rational technological processes;</p>
                            <p>- the study of special literature, scientific and technical information in the field of
                                engineering, scientific sources of information in the field of science and technology
                                received abroad and in our republic;</p>
                            <p>- preparation of data for analyses, reports and scientific publications</p>
                            <p>- participation in the collection, processing, analysis of scientific and technical
                                information on the topic (task) and systematisation of the obtained data;</p>
                            <p>- participation in the realisation of results of research and developments in
                                practice.</p>
                            <p><strong>&nbsp;</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td width="212">
                            <p><strong>Curriculum for Bachelor&rsquo;s </strong><strong>EP BА
                                60712100 &ndash; Metallurgy</strong></p>
                        </td>
                        <td colSpan="2" width="1134">
                            <a style={{color: "blue"}}
                               href="https://test.tdtu.uz/storage/pages/October2024/xnTNxnlVGuXnuEju50W3.pdf">
                                <p>
                                    <strong>Curriculum for Bachelors of Educational program BA 60712100-Metallurgy</strong>
                                </p>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td width="212">
                            <p><strong>Learning Outcome Matrix &ndash;Modules to </strong><strong>EP BА
                                60712100 &ndash; Metallurgy</strong></p>
                        </td>
                        <td colSpan="2" width="1134">
                            <a href="https://test.tdtu.uz/storage/pages/October2024/RChufoHtrQjPkLP2TYRz.pdf"
                               style={{color: "blue"}}>
                                <p><strong>Learning Outcome Matrix –Modules to EP BA 60712100 – Metallurgy</strong></p>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="2" width="212">
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>Module </strong></p>
                            <p><strong>Handbooks</strong></p>
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>&nbsp;</strong></p>
                        </td>
                        <td width="536">
                            <p><strong>Mandatory</strong> <strong>module</strong></p>
                        </td>
                        <td width="599">
                            <p><strong>Choice module</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td width="536">
                            <p><strong>Handbooks</strong></p>

                            <strong>
                                <ul style={{listStyle: "none"}}>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/TAGhOmBXp9fkbsGErA7I.pdf">
                                            THE NEWEST HISTORY OF UZBEKISTAN
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/bbPE5gvuXyhqIUIEIwUC.pdf">
                                            INFORMATION TECHNOLOGIES IN TECHNICAL SYSTEMS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/WbNdsgSMW556mlGOG3aR.pdf">
                                            ENGINEERING AND COMPUTER GRAPHICS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/nTz1uCKE1XetvPGJiJGR.pdf">
                                            PHYSICS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/ht0G1iMUOMlR29AzBGGS.pdf">
                                            HIGHER MATHEMATICS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/xurz7h6uzJX69AsqOjPK.pdf">
                                            FUNDAMENTALS OF METALLURGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/K3XnlJTiQQTxFQVZgl1O.pdf">
                                            GENERAL AND INORGANIC CHEMISTRY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/GftrLwH3eGXqCk9vTjB8.pdf">
                                            FOREIGN LANGUAGE
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/0yAYAjScJ1yzTSMnx0EX.pdf">
                                            RELIGIOUS STUDIES
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/Fij6vDFhLhKqudrSApKT.pdf">
                                            METAL SCIENCE
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/Zq8JAm0FMEzz8KV1NQuQ.pdf">
                                            HEAT AND MASS TRANSFER IN METALLURGICAL
                                            PROCESSES
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/84lXTDopu2PEPHVg5K5I.pdf">
                                            METROLOGY AND STANDARDIZATION
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/UD2ZYzg1vp97qnM4ZlVz.pdf">
                                            COST ENGINEERING
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/tmoRv8yqFTLtTwDcByVh.pdf">
                                            THEORY OF PYROMETALLURGICAL PROCESSES
                                            MODULE HANDBOOK
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/lCl9rY871cZpBttLoSCQ.pdf">
                                            PREPARATION OF ORES FOR PROCESSING
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/Zhg98kCkCjq1v8ND25N4.pdf">
                                            THEORY OF HYDROMETALLURGICAL PROCESSES
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/ZJg5IqJ4p9UIJUuGxWFn.pdf">
                                            PHILOSOPHY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/hMoI0mpWfJ6SCpMIaQhE.pdf">
                                            ECOLOGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/GOnqO98Mbi6b70N12eB6.pdf">
                                            DIRECT EXTRACTION OF IRON FROM ORE
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/P0UT4J3TA6VFTGwRJBkU.pdf">
                                            INDUSTRY ECONOMY AND MANAGEMENT
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/yKaw34kTubutvIjWrRZ9.pdf">
                                            STEEL PRODUCTION TECHNOLOGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/zzIpGVERlfnU9d0HXZ8k.pdf">
                                            METALLURGY OF HEAVY NON-FERROUS
                                            METALS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/ejBlUeRPrpvLnGnec4a0.pdf">
                                            METALLURGY OF RARE METALS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/FdiuOMhfHxbsKP0g9xns.pdf">
                                            METALS RECYCLING
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/f9buN2OFqxMIVWTxP7XS.pdf">
                                            LIFE SAFETY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/1O1po3ReTVwlU4t9YU5A.pdf">
                                            MECHANICAL EQUIPMENT OF METALLURGICAL
                                            FACTORY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/OknF9WQF0CwDDoR7oNhN.pdf">
                                            COMPLEX USE OF RAW MATERIALS IN METALLURGY
                                        </a>
                                    </li>
                                </ul>
                            </strong>
                        </td>
                        <td width="599">
                            <p><strong>Handbooks</strong></p>

                            <strong>
                                <ul style={{listStyle: "none"}}>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/WN9FnqXssmQ0mvuWqVGo.pdf"
                                        >
                                            INTRODUCTION TO METALLURGICAL ENGINEERING
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/QxY5ACVKAy74OhMmwkfB.pdf"
                                        >
                                            GENERAL METALLURGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/tIgYf5sWc3D4ethZxgBy.pdf"
                                        >
                                            RESOURCE-SAVING TECHNOLOGIES IN METALLURGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/TJw3XePCXNz3nEyiOvxC.pdf"
                                        >
                                            COMPARATIVE ENGINEERING
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/ZbR6g7CigPVrZIxBSkU6.pdf"
                                        >
                                            BIOTECHNOLOGICAL PROCESSES IN METALLURGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/wOzLwLZ8WEQOUUPM27kw.pdf"
                                        >
                                            DESIGN OF METALLURGICAL PLANTS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/Hf0dwaSM0Te7j3eDW9rE.pdf"
                                        >
                                            CIVIL DEFENCE
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/M2QsdYMJPgWP07wMWLgn.pdf"
                                        >
                                            BASICS OF MEDICAL KNOWLEDGE
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/SXznWIG5hrIvcLV0VVlg.pdf"
                                        >
                                            ENGINEERING PSYCHOLOGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/VNR4SFM9vclkRYvgcoEG.pdf"
                                        >
                                            GENERAL PEDAGOGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/DMd2K3Mqh1dIIIzCouIl.pdf"
                                        >
                                            METALLURGY OF RARE AND RADIOACTIVE METALS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/LgG1oI9SZdYjHHU8RqCE.pdf"
                                        >
                                            STEEL AND FERROALLOYS ELECTROMETALLURGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/sYpp5sGrybgaknGouLnM.pdf"
                                        >
                                            PRECIOUS METAL METALLURGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/orJx2rfmFFzBrJG7jeDy.pdf"
                                        >
                                            METALLURGY OF LIGHTWEIGHT METALS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/gdoMKSqlnsxkZ2tdlTaB.pdf"
                                        >
                                            For interdisciplinary (general and specialized subjects)
                                            graduates of the bachelor's degree in 60712100 –
                                            metallurgy
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/October2024/sti9w3RQTxCKtYidZGdV.pdf"
                                        >
                                            60712100 - Metallurgy the direction of education
                                        </a>
                                    </li>

                                </ul>
                            </strong>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}

export default Bakalavr2;