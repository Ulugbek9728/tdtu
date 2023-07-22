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
                            <a href="Curriculum for Bachelor’s EP">
                                <p>
                                    <strong>Curriculum for Bachelor’s EP</strong>
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
                            <p><strong>ИЛОВА Б</strong></p>
                            <p><strong>ЖАДВАЛ КЎРИНИШИДА ТУШИШИ КЕРАК</strong></p>
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
                            <p><strong>1.01&nbsp; </strong><strong>ДАН 1.2</strong><strong>6</strong><strong> ГАЧА (Г
                                ИЛОВА)</strong></p>
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>БУ ЕРДА ФАНЛАР РЎЙХАТИ БЎЛИШИ КЕРАК. ФАНЛАР УСТИГА БОСГАНДА ФАН ДАСТУРИГА БОРИШИ
                                КЕРАК</strong></p>
                        </td>
                        <td width="599">
                            <p><strong>2.01 ДАН MA18</strong><strong>2</strong><strong>9(4) ГАЧА (Д ИЛОВА)</strong></p>
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>БУ ЕРДА ФАНЛАР РЎЙХАТИ БЎЛИШИ КЕРАК. ФАНЛАР УСТИГА БОСГАНДА ФАН ДАСТУРИГА БОРИШИ
                                КЕРАК</strong></p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}

export default Bakalavr2;