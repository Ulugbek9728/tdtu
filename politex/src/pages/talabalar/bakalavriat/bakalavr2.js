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
                            <a style={{color: "blue"}}
                               href="https://test.tdtu.uz/storage/pages/July2023/1DM4YNyDPPFJIxAlsRwa.pdf">
                                <p>
                                    <strong>Curriculum for Bachelor’s EP BA 60712100-Metallurgy</strong>
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
                            <a href="https://test.tdtu.uz/storage/pages/July2023/nipOaUqxIrEvNIw8UW9h.pdf"
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
                                           href="https://test.tdtu.uz/storage/pages/July2023/tdyjsm141lhQHZa2ZlAP.pdf">
                                            THE NEWEST HISTORY OF UZBEKISTAN
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/l1x7HvBkUnuoFORnKYer.pdf">
                                            INFORMATION TECHNOLOGIES IN TECHNICAL SYSTEMS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/ZaOPS0ANslwlIt7eO5LX.pdf">
                                            ENGINEERING AND COMPUTER GRAPHICS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/x6Q5c2lo7PRhRy0YB1aG.pdf">
                                            Uzbek (Russian) language
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/uP9YWnAjpS4X9ppx0Y3O.pdf">
                                            PHYSICS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/6jmn9eRXfgYNrWjEKcKE.pdf">
                                            HIGHER MATHEMATICS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="http://test.tdtu.uz/storage/pages/July2023/mZenU8HG41nPKwrYMEiB.pdf">
                                            PHYSICAL EDUCATION AND SPORTS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/chguxyvggQtvOpgNEdXH.pdf">
                                            FUNDAMENTALS OF METALLURGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/XOYlQoaYhFaaFCA7GtOx.pdf">
                                            GENERAL AND INORGANIC CHEMISTRY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/9Xx4f73rykzavE0nXTlJ.pdf">
                                            FOREIGN LANGUAGE
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/qOxlZCWg3WK1ryb9VqVM.pdf">
                                            METAL SCIENCE
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/mAQsYbRnJR87FxBEeXFK.pdf">
                                            PREPARATION OF ORES FOR PROCESSING
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/fErgL23Dk4OcVJd29F9Z.pdf">
                                            HEAT AND MASS TRANSFER IN METALLURGICAL
                                            PROCESSES
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/aWoZ91MeUcY0EEKIc8Ih.pdf">
                                            METROLOGY AND STANDARDIZATION
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/O5EywT7U7ZIqPZI3sfiQ.pdf">
                                            ELECTRICAL ENGINEERING AND ELECTRONICS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/ebhWNaeDyp6bJUJw3fBX.pdf">
                                            METALS RECYCLING
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/CXsXhwSchTW3UHIJAVmp.pdf">
                                            PHILOSOPHY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/JK2icUMD9TiP4UE1WpUh.pdf">
                                            ECOLOGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/u4WlgigJAU9pAwSZ8j2b.pdf">
                                            INDUSTRY ECONOMY AND MANAGEMENT
                                            MODULE HANDBOOK
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/jlVKfGtpoxWouIbdAO50.pdf">
                                            THEORY OF PYROMETALLURGICAL PROCESSES
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/SyK88YRfvWlh7FuDKtxD.pdf">
                                            THEORY OF HYDROMETALLURGICAL PROCESSES
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/3JaKCtDthnJ3SIaZhotq.pdf">
                                            LIFE SAFETY
                                        </a>
                                    </li>

                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/YSY8JariSV0YKDRhWOCS.pdf">
                                            MECHANICAL EQUIPMENT OF METALLURGICAL
                                            FACTORY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/KqPiEcFcaoC9lDQ9k8qF.pdf">
                                            STEEL PRODUCTION TECHNOLOGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/s5LvdHRUAMMklulG79mb.pdf">
                                            METALLURGY OF HEAVY NON-FERROUS
                                            METALS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/RACbjH991yCLS6H3yMrc.pdf">
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
                                           href="https://test.tdtu.uz/storage/pages/July2023/C2OFHbx6pHVPU3KZzP2Z.pdf"
                                        >
                                            GENERAL METALLURGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/kX8ohQdb2PPfU2jK396n.pdf"
                                        >
                                            INTRODUCTION TO SPECIALTY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/BtAUOQQGK95oOvl1H3qE.pdf"
                                        >
                                            RESOURCE-SAVING TECHNOLOGIES IN METALLURGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/vdNLWOfBzcsxF14FCnj1.pdf"
                                        >
                                            PHYSICO-CHEMICAL METHODS OF ANALYSIS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/vD0CVpPHIxe9H7xfzyFj.pdf"
                                        >
                                            BIOTECHNOLOGICAL PROCESSES IN METALLURGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/QeCeTpAIYzPAY3yGPsyo.pdf"
                                        >
                                            DESIGN OF METALLURGICAL PLANTS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/NjKqrpaQyo2nsOLFbSgT.pdf"
                                        >
                                            ENGINEERING PSYCHOLOGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/QGJH8qscpdyBmJWAytYx.pdf"
                                        >
                                            GENERAL PEDAGOGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/qtMAse6Jmp56y9Wut9KP.pdf"
                                        >
                                            METALLURGY OF LIGHTWEIGHT METALS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/ZKKXu3Pl3V4NkGe7bjFu.pdf"
                                        >
                                            PRECIOUS METAL METALLURGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/he1Up7KYBFLt1VXOQCm0.pdf"
                                        >
                                            STEEL AND FERROALLOYS ELECTROMETALLURGY
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/wNvecutjZoFOm46WQ6Jb.pdf"
                                        >
                                            PROCESSING OF TECHNOGENIC RAW MATERIALS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/zxmxF0i7VgLhIjVuzOKD.pdf"
                                        >
                                            CIVIL DEFENCE
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/0MaJCYwKpT1NKdBf9GxN.pdf"
                                        >BASICS OF MEDICAL KNOWLEDGE

                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/o8nURpplYXv8YECfWMxJ.pdf"
                                        >
                                            DIRECT EXTRACTION OF IRON FROM ORE
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/y6w3BaXyc0FmOnzYNmGs.pdf"
                                        >
                                            METALLURGY OF RARE METALS
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/rwM3ZvujuJQyAxkJ2N9e.pdf"
                                        >
                                            FINAL STATE CERTIFICATE
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/k6yxv7MAXHcnWuydIqGs.pdf"
                                        >
                                            QUALIFIED PRACTICE PROGRAM
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{color: "blue"}}
                                           href="https://test.tdtu.uz/storage/pages/July2023/1c4fq4bBRWktKZ1ivi1t.pdf"
                                        >
                                            QUALIFIED PRACTICE PROGRAM
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