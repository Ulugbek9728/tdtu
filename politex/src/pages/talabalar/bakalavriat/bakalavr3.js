import React, {useEffect} from 'react';
import Layout from "@/locales/en/layout/Layout";
import {useTranslation} from "react-i18next";

import CustomTitle from "@/components/custom_title";


function Bakalavr3(props) {

    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    document.title=t("header.header__sub__menu.menu-6.item-3")

    return (
        <Layout>
            <CustomTitle name={t("header.header__sub__menu.menu-6.item-3")}/>
            <div className="container">
                <table className="table table-bordered " width="1346">
                    <tbody>
                    <tr>
                        <td colSpan="3" width="1346">
                            <p><strong>BACHELOR&rsquo;S EDUCATIONAL PROGRAM 60710600 - Electrical power engineering
                                (electrical supply)</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td width="212">
                            <p><strong>Educational objectives of the EP</strong></p>
                        </td>
                        <td colSpan="2" width="1134">
                            <p>&nbsp;</p>
                            <p>Training of qualified specialists in the field of the electric power industry, possessing
                                knowledge and competencies in demand for work at enterprises and organisations of the
                                power
                                industry related to production, transmission, and consumption of electric power, as well
                                as
                                in design and research organisations of technical profile.</p>
                        </td>
                    </tr>
                    <tr>
                        <td width="212">
                            <p><strong>The objects of professional activity of bachelor in EP
                                B</strong><strong>А</strong><strong> 60710600-Electrical Power Engineering (Power
                                Supply)
                                are:</strong></p>
                        </td>
                        <td colSpan="2" width="1134">
                            <p><strong>&nbsp;</strong></p>
                            <p>- state and non-state organisations, enterprises and institutions, companies (firms),
                                production associations, etc.;</p>
                            <p>- processes of production, transformation, transmission, distribution and consumption of
                                electric power;</p>
                            <p>- consumers of electric energy;</p>
                            <p>- equipment used in the power supply system and their designs;</p>
                            <p>- means of technical support of scientific and production activity; educational process
                                in
                                professional colleges.</p>
                        </td>
                    </tr>
                    <tr>
                        <td width="212">
                            <p><strong>Requirements for the professional competence of bachelor in the educational
                                program
                                BA 60710600 - Electrical Power Engineering (Power Supply):</strong></p>
                            <p><strong>&nbsp;</strong></p>
                        </td>
                        <td colSpan="2" width="1134">
                            <p><strong>&nbsp;</strong></p>
                            <p>acquiring skills in searching and analysing normative legal acts and their use in
                                professional activities;</p>
                            <p>to possess skills in the automated development of the project of details and parts and
                                assembly units of electric power plants based on the system approach;</p>
                            <p>to be able to develop and investigate mathematical, information and simulation models on
                                the
                                subject of performed experimental design and practical works;</p>
                            <p>to acquire skills in the development of design and program documentation;</p>
                            <p>to develop skills of execution, normalisation and mastering of processes of the power
                                supply
                                system;</p>
                            <p>to be able to control the observance of technological discipline in the design of the
                                power
                                supply of consumers;</p>
                            <p>to know the development and implementation of measures for the rational use of energy
                                resources in the power supply system;</p>
                            <p>to acquire skills in studying special literature, scientific and technical information in
                                the
                                field of electric power engineering, achievements in the field of science and technology
                                achieved abroad and in our republic;</p>
                            <p>to know the rules and technology of assembly, adjustment, testing and commissioning of
                                electric power systems and equipment;</p>
                            <p>to possess the skills of inspection of power plant equipment, technical condition of
                                structures and equipment and assessment of residual resources.</p>
                            <p><strong>&nbsp;</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td width="212">
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>Professional responsibilities of BA 60710600 - Electrical Power Engineering
                                (Power
                                Supply).</strong></p>
                            <p><strong>&nbsp;</strong></p>
                        </td>
                        <td colSpan="2" width="1134">
                            <p>The assumed profile of competencies achieved in the educational program allows engaging
                                in
                                professional activities in the following areas:</p>
                            <p>In engineering and design activities:</p>
                            <p>- possibilities of automated design development of parts, components and assembly units
                                of
                                electric power plants based on system approach;</p>
                            <p>- development and research of mathematical, informational and simulation models on the
                                subject of performed experimental and practical works;</p>
                            <p>- development of design and program documentation;</p>
                            <p>- the possibility of carrying out tests to determine the operating parameters of electric
                                power plants;</p>
                            <p>- mastering the skills of the practical application of international and professional
                                standards of information technologies, modern paradigms and methodologies and
                                instrumental
                                and computational means by the preparatory speciality.</p>
                            <p>&nbsp; In production engineering activities:</p>
                            <p>- effective use of objects, processes, systems, equipment and technical means at the
                                front of
                                engineering works;</p>
                            <p>- participation in the team of performers in the development of systems, technological
                                processes, their elements and technological documentation;</p>
                            <p>- ensuring the operational safety of objects, processes, systems, equipment and technical
                                means;</p>
                            <p>- development of technological solutions for the organisation and improvement of
                                production;</p>
                            <p>- technical and economic analysis;</p>
                            <p>- selection and application of effective methods of production organisation;</p>
                            <p>- observance of the rules of professional ethics.</p>
                            <p>In organisational and management activities:</p>
                            <p>- development of methods and mechanisms for monitoring and quality assessment of
                                technological processes of construction production related to the creation and use of
                                modern
                                information technology systems;</p>
                            <p>- control of production processes based on the requirements of environmental protection
                                and
                                compliance with labour safety requirements;</p>
                            <p>- quality control in the performance of production processes;</p>
                            <p>- organising the work of a team of performers;</p>
                            <p>- making managerial decisions in conditions of the diversity of opinions;</p>
                            <p>- organising and managing the work of a primary production unit;</p>
                            <p>- drawing up a work plan for the activity to be performed and evaluating the results
                                achieved
                                in its execution, control and implementation;</p>
                            <p>- skills of control over compliance of production processes with environmental
                                protection,
                                fire safety, and technical and labour safety requirements.</p>
                            <p>In-service and maintenance activities:</p>
                            <p>- organisation of testing, maintenance and repair of objects, processes, systems,
                                equipment
                                and technical means related to the field of engineering education;</p>
                            <p>- development and application of standard technological processes of maintenance and
                                repair
                                of objects, processes, systems, equipment and technical means related to engineering
                                education.</p>
                            <p>&nbsp; In research and development activities:</p>
                            <p>- participation in analysing the state of the objects of activity using modern methods
                                and
                                means;</p>
                            <p>- participation in the design, development, testing and effective use of objects,
                                processes,
                                systems, equipment and technical means in the field of engineering;</p>
                            <p>- participation in research on the reduction of unproductive time, labour and material
                                resources, selection of rational technological processes;</p>
                            <p>- studying special literature, scientific and technical information in the field of
                                engineering, and scientific sources of information in the field of science and
                                technology
                                received abroad and in our republic;</p>
                            <p>- preparation of data for analyses, reports and scientific publications;</p>
                            <p>- participation in the collection, processing, and analysis of scientific and technical
                                information on the topic (task) and systematisation of the obtained data;</p>
                            <p>- participation in the realisation of results of research and developments in
                                practice.</p>
                            <p><strong>&nbsp;</strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td width="212">
                            <p><strong>Curriculum for Bachelor&rsquo;s of Educational program BА 60710600-Electrical Power Engineering (Power Supply)</strong></p>
                        </td>
                        <td colSpan="2" width="1134">
                            <a style={{color: "blue"}}
                               href="http://test.tdtu.uz/storage/pages/October2024/pAuanOpAoGTrtnIWHJKn.pdf"
                               target="_blank"
                            >
                                <p>
                                    <strong>Curriculum for Bachelor’s EP</strong>
                                </p>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td width="212">
                            <p><strong>Learning Outcome Matrix &ndash;Modules to EP BA 60710600 - Electrical Power
                                Engineering (Power Supply)</strong></p>
                        </td>
                        <td colSpan="2" width="1134">
                            <a style={{color: "blue"}}
                               href="http://test.tdtu.uz/storage/pages/October2024/9h3J6YjU7hEG3Ve7aoeS.pdf"
                               target="_blank"
                            >
                                <p>
                                    <strong>Learning Outcome Matrix –Modules to EP BA 60710600 - Electrical Power
                                        Engineering (Power Supply)</strong>
                                </p>
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
                                <ul>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/qvKchgKnyC1HIiA995FW.pdf">
                                            UZBEK (RUSSIAN) LANGUAGE
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/w4EV01qdvUnlvtoep5mo.pdf">
                                            UZBEK (RUSSIAN) LANGUAGE
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/IBeuM6d98HOgxtXAsGnS.pdf">
                                            RELIGIOUS STUDIES
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/CqMXhWRG0dau6XbNWJ04.pdf">
                                            CHEMISTRY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/ewviq9oHElQKkDZuFEL1.pdf">
                                            FOREIGN LANGUAGE </a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/July2023/N7l45HSEZdxjEKLGdDq9.pdf">
                                        PHYSICS</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/OoDtmeiTpFnxQiRtD4KR.pdf">
                                        HIGHER MATHEMATICS</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/X0DaKOSd0eaKXNnHYYeF.pdf">
                                        CONTEMPORARY HISTORY OF UZBEKISTAN</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/UZZFF6VO3EFeFQBSUVi4.pdf">
                                        INFORMATION TECHNOLOGY IN TECHNICAL SYSTEMS</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/DpdcPFYjvAHMp9xtUmJY.pdf">
                                        ENGINEERING AND COMPUTER GRAPHICS</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/July2023/nb8q2peNJuxHM2f28TCU.pdf">
                                        METROLOGY AND STANDARDIZATION</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/ueE2zIz3GjfxhYzRP9zM.pdf">
                                        FIELD OF ECONOMICS AND MANAGEMENT</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/GWsRkrKJLSGdQiBemIyo.pdf">
                                        PHILOSOPHY</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/QC6yLfYLRzkS6TSRIbmc.pdf">
                                        ECOLOGY </a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/dE6lU1FhhboowOVCvC42.pdf">
                                        SAFETY IN LIFE ACTIVITIES</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/4jHYHuuxiE8nMYZeU3my.pdf">
                                        MECHANICS (THEORETICAL AND APPLIED)</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/JRHo9wIbThXgwcblUyAn.pdf">
                                        THEORETICAL ELECTROTECHNICS</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/pDCOIx0xlbzMDg1tinHC.pdf">
                                        THERMAL TECHNIQUES AND HYDROPOWER</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/XgF2NszeEfgud6rbPDmX.pdf">
                                        INTRODUCTION TO THE DISCIPLINE</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/EiVUo2RSA6AmHysgod1S.pdf">
                                        THE POWER SUPPLY OF INDUSTRIAL ENTERPRISES</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/hW7p6smPSp9jgPi1gv0k.pdf">
                                        CITY POWER SUPPLY</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/IsNxSnkSe0jn2bhJVKkL.pdf">
                                        ENERGY MANAGEMENT</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/YCLhsqSiMG8PfLzRITUj.pdf">
                                        ELECTRICAL SAFETY AND RELIABILITY</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/Sdc19IwYw2Fo5VWsPTpE.pdf">
                                        INSTALLATION AND OPERATION OF ELECTRICAL POWER
                                        SYSTEMS </a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/mtL8kjfmLvdQcez1iyXE.pdf">
                                        RELAY PROTECTION</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/Ovk5jKUufXkS1DyrJqOg.pdf">
                                        ELECTRICAL NETWORKS AND SYSTEMS</a></li>
                                    <li><a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/pXiAVIVeDThGWw2YFBUJ.pdf">
                                        ELECTRIC MACHINES</a></li>
                                </ul>
                            </strong>

                        </td>
                        <td width="599">
                            <p><strong>Handbooks</strong></p>
                            <strong>
                                <ul>
                                    <li>
                                        <a style={{color:"blue"}} href="http://test.tdtu.uz/storage/pages/October2024/GGcpdXYKprW7xfZkSvbH.pdf">
                                            ENGINEERING PSYCHOLOGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color:"blue"}} href="http://test.tdtu.uz/storage/pages/October2024/ktnlacMcu7kyQzTQJo7e.pdf">
                                            ENERGY OBJECT DEVICES
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color:"blue"}} href="http://test.tdtu.uz/storage/pages/October2024/NNyTrNdtRijej52HZYVg.pdf">
                                            ELECTROTECHNOLOGICAL INSTALLATIONS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color:"blue"}} href="http://test.tdtu.uz/storage/pages/October2024/4gxI7nqJ6cOb46t0Ycn1.pdf">
                                            AUTOMATED SYSTEMS OF ELECTRICITY CONSUMPTION ACCOUNTING AND CONTROL
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color:"blue"}} href="http://test.tdtu.uz/storage/pages/October2024/wCIZjAlkoud4ZOsDOtxh.pdf">
                                            DIGITAL POWER SYSTEMS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color:"blue"}} href="http://test.tdtu.uz/storage/pages/October2024/10AddlBQgDFKVjAUm5Iy.pdf">
                                            COMPARATIVE ENGINEERING
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color:"blue"}} href="http://test.tdtu.uz/storage/pages/October2024/Co1rAFnVdtw5OhGyRWbN.pdf">
                                            COST ENGINEERING
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color:"blue"}} href="http://test.tdtu.uz/storage/pages/October2024/nZ1fKxUPYcq1LqcVV4fe.pdf">
                                            BASICS OF MEDICAL KNOWLEDGE
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color:"blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/Rj6FcToAo4UMdQMM3aQx.pdf">
                                            CIVIL DEFENCE
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color:"blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/1WbGm5tvOTYlgGtvFr6a.pdf">
                                            MICROPROCESSOR PROTECTION
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color:"blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/YdsUU08LHT37553N7HBF.pdf">
                                            TRANSIENT PROCESSES AND OVERVOLTAGE
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color:"blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/n8d5dzecdY8Bu0oLwoGR.pdf">
                                            ELECTRICAL LIGHTING
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color:"blue"}}
                                           href="http://test.tdtu.uz/storage/pages/October2024/a1FdfUlaJrPf4pLG8o27.pdf">
                                            ELECTRONICS
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

export default Bakalavr3;