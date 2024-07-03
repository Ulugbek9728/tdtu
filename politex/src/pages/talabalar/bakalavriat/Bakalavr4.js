import React, {useEffect} from 'react';
import Layout from "@/locales/en/layout/Layout";
import {useTranslation} from "react-i18next";
import CustomTitle from "@/components/custom_title";

function Bakalavr4() {

    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);


    return (
        <Layout>
            <CustomTitle name={t("header.header__sub__menu.menu-6.item-4")}/>

            <div className="container">
                <table style={{borderCollapse:"collapse", borderWidth: "2px"}} border="1">
                    <tbody>
                    <tr>
                        <td style={{borderWidth: "2px"}} colSpan="3"><p dir="ltr">BACHELOR&rsquo;S EDUCATIONAL PROGRAM
                            60610200 &ndash; INFORMATION SYSTEMS AND TECHNOLOGIES (BY INDUSTRY)</p></td>
                    </tr>
                    <tr>
                        <td style={{borderWidth: "2px"}}><p dir="ltr">Educational objectives of the EP</p></td>
                        <td style={{borderWidth: "2px"}} colSpan="2"><br/><p dir="ltr">The specialty information systems
                            and technologies is a specialty in the field of science and technology, which covers
                            research on methods of production system design, study operation of computer technologies
                            and communication equipment, implementation of design processes using optimization methods,
                            study complex set of issues related to the development of mathematical models of physical
                            processes in computer and communication technology, learn algorithms and practical programs
                            development for computer systems&rsquo; efficiency and reliability evaluation, design and
                            development of hardware and software systems, and their integration.</p>
                        </td>
                    </tr>
                    <tr>
                        <td style={{borderWidth: "2px"}}><p dir="ltr">The objects of professional activity of bachelor in
                            EP BА 60610200 &ndash; Information systems and technologies (by industry) are:</p></td>
                        <td style={{borderWidth: "2px"}} colSpan="2"><br/><p dir="ltr">- state and non-state organizations,
                            enterprises and institutions, companies (firms), production associations, etc.;</p> <p
                            dir="ltr">- processes related to information systems and technologies in production
                            areas;</p> <p dir="ltr">- effective introduction and use of programs related to information
                            and communication systems, their mathematical, informational and algorithmic software
                            support, automated design systems of production, information processing in industrial
                            production, software of microprocessor systems, software products and computing techniques
                            in the development of hardware processes;</p> <p dir="ltr">- processes of design,
                            adjustment, production and implementation of technical and software tools of information
                            management systems and technologies;</p> <p dir="ltr">- means of technical support of
                            scientific and production activities;&nbsp;</p> <p dir="ltr">- educational process in
                            vocational colleges.</p></td>
                    </tr>
                    <tr>
                        <td style={{borderWidth: "2px"}}><p dir="ltr">Requirements for the professional competence of
                            bachelor in the educational program BA 60610200 &ndash; Information systems and technologies
                            (by industry):</p></td>
                        <td style={{borderWidth: "2px"}} colSpan="2"><br/><p dir="ltr">- to have the skills to search,
                            analyze and use regulatory and legal documents in their professional activities;</p> <p
                            dir="ltr">- to have the skills to optimize organizational structures, apply personnel
                            management strategies, plan and implement events;</p> <p dir="ltr">- independent work in the
                            positions that should be held by persons with higher education in the fields of
                            education;</p> <p dir="ltr">- to continue higher education at the master's degree in the
                            chosen specialty within the relevant undergraduate courses;</p> <p dir="ltr">- development
                            and research of mathematical, informational and simulation models for experimental
                            construction and practical works;</p> <p dir="ltr">- to acquire business planning skills to
                            create and develop new organizations (activities, products);</p> <p dir="ltr">- compliance
                            with the code of professional ethics;</p> <p dir="ltr">- organizing the work of the team of
                            performers;</p> <p dir="ltr">- drawing up a work plan for the activities being performed and
                            evaluating the results achieved in its implementation, control and implementation;</p> <p
                            dir="ltr">- to acquire the skills of additional professional education in the system of
                            personnel retraining and professional development.</p></td>
                    </tr>
                    <tr>
                        <td style={{borderWidth: "2px"}}><p dir="ltr">Professional responsibilities of BA
                            60610200 &ndash; Information systems and technologies (by industry).</p></td>
                        <td style={{borderWidth: "2px"}} colSpan="2"><p dir="ltr">The expected profile of competencies
                            achieved in the educational program allows you to engage in professional activities in the
                            following areas:</p> <p dir="ltr">In project-construction activities:</p> <p dir="ltr">-
                            creation of algorithmic software, development of a project for testing and exploitation of
                            automated system tools and information management systems;</p> <p dir="ltr">- development
                            and research of mathematical, simulation models on the subject of experimental construction
                            and practical work;</p> <p dir="ltr">- development of design and algorithmic software
                            documents;</p> <p dir="ltr">- application of international and professional standards of
                            information technologies, modern paradigms and methodologies, instrumental and computing
                            tools in practice in accordance with the training specialty.</p> <p dir="ltr">In production
                            and service activities:</p> <p dir="ltr">- development of exemplary technological processes
                            and their application;</p> <p dir="ltr">- planning of resources necessary for the
                            implementation of industrial production processes;</p> <p dir="ltr">- development and
                            implementation of industrial production activity quality management processes;</p> <p
                            dir="ltr">- ensuring environmental protection of production processes, fire, equipment and
                            labor safety;</p> <p dir="ltr">- development of a system suitable for the field in
                            scientific and practical activities and their use;</p> <p dir="ltr">- planning and execution
                            of work on collection and operation of technical means, devices, repair, storage and
                            processing systems of information management systems.</p> <p dir="ltr">In
                            organizational-management activity:</p> <p dir="ltr">- development of methods and mechanisms
                            of monitoring and quality assessment of production processes related to the creation of an
                            information-management system in industrial production and their operation;</p> <p
                            dir="ltr">- control of production processes in terms of compliance with environmental
                            protection and labor safety requirements;</p> <p dir="ltr">- implementation of engineering
                            and design solutions;</p> <p dir="ltr">- quality control during the production process;</p>
                            <p dir="ltr">- organizing the work of the team of performers;</p> <p dir="ltr">-
                                organization and management of primary design, technological or production group
                                work;</p> <p dir="ltr">- drawing up a work plan for ongoing activities, its
                                implementation and control, and evaluation of results.</p> <p dir="ltr">In research
                                activities:</p> <p dir="ltr">- participation in organizational work necessary for the
                                testing of information-management systems in the implementation of technical means,
                                systems, processes and devices in industrial production;</p> <p dir="ltr">- study of
                                scientific sources of scientific and technical information on informatics and
                                information technologies published in the Republic and abroad;</p> <p dir="ltr">- direct
                                participation in carrying out scientific research works;</p> <p dir="ltr">-
                                participation in the collection, processing, analysis and systematization of scientific
                                and technical information on the topic (assignment);</p> <p dir="ltr">- participation in
                                the implementation of research results and developments.</p></td>
                    </tr>
                    <tr>
                        <td style={{borderWidth: "2px"}}><p dir="ltr">Curriculum for Bachelor&rsquo;s EP BA
                            60610200 &ndash; Information systems and technologies (by industry).</p></td>
                        <td style={{borderWidth: "2px"}} colSpan="2"><p dir="ltr">
                            <a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/DlnOPhLjgelfA4DGLaYf.pdf">
                                Curriculum for
                            Bachelor&rsquo;s EP BA 60610200 &ndash; Information systems and technologies (by
                            industry)</a></p></td>
                    </tr>
                    <tr>
                        <td style={{borderWidth: "2px"}}><p dir="ltr">Learning Outcome Matrix &ndash;Modules to EP BA
                            60610200 &ndash; Information systems and technologies (by industry).</p></td>
                        <td style={{borderWidth: "2px" }} colSpan="2"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/b0IomKPZZqMQDjBWFAzu.docx">Learning
                            Outcome Matrix &ndash;Modules to EP BA 60610200 &ndash; Information systems and technologies
                            (by industry)</a></td>
                    </tr>
                    <tr>
                        <td style={{borderWidth: "2px"}} rowSpan="2"><br/><br/><br/><br/><br/><p dir="ltr">Module&nbsp;</p> <p
                            dir="ltr">Handbooks</p> <br/><br/><br/><br/><br/><br/><br/></td>
                        <td style={{borderWidth: "2px"}}><p dir="ltr">Mandatory module</p></td>
                        <td style={{borderWidth: "2px"}}><p dir="ltr">Choice module</p></td>
                    </tr>
                    <tr>
                        <td style={{borderWidth: "2px"}}>
                            <p dir="ltr">
                                <a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/simsaZXsxuU60dBaKnLQ.pdf">RUSSIAN
                            LANGUAGE</a>
                            </p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/MRGaAlRA6bXwjw6qIRJL.pdf">UZBEK
                            LANGUAGE</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/fxUjsi2nmJ8kHRtjQM9y.pdf">RELIGIOUS
                            STUDIES</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/uGIg08USQOjimDMu0FFJ.pdf">FOREIGN
                            LANGUAGE</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/S1bCYkHKXugIlAEhqRfu.pdf">PHYSICS</a></p>
                            <p dir="ltr"><a href="https://test.tdtu.uz/storage/pages/July2024/ngYT2nEAkGXyXLHifgKu.pdf">HIGHER
                                MATHEMATICS</a></p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/DeQ2EVOAo9EbCKEAup13.pdf">THE LATEST
                                HISTORY OF UZBEKISTAN</a></p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/uHqqGTOllNyuL1j5uaon.pdf">ENGINEERING
                                AND COMPUTER GRAPHICS</a></p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/pnkagGuIEQawqs3lHtSq.pdf">METROLOGY
                                AND STANDARDIZATION</a></p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/HROgnnjS8MhKJB6kJE2d.pdf">FIELD OF
                                ECONOMICS AND MANAGEMENT</a></p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/Qq7JvIEpxgEVqhViuJSC.pdf">PHILOSOPHY</a>
                            </p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/MNTmyvL12gXsbUnaQHvS.pdf">ECOLOGY</a>
                            </p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/JhNtLxCIXmukMgS7t320.pdf">SAFETY IN
                                LIFE ACTIVITIES</a></p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/qirTDglkEUAWbhbqvvhW.pdf">ALGORITHMIC
                                LANGUAGES AND PROGRAMMING</a></p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/03pH7WjLyZh5Y2FDIgB7.pdf">DATABASE
                                MANAGEMENT AND PROGRAMMING</a></p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/03pH7WjLyZh5Y2FDIgB7.pdf">TECHNOLOGIES</a>
                            </p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/kYxRMu6Ldo8joLGkENVa.pdf">DIGITAL
                                CIRCUITS</a></p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/FnZ10ganpukEwWA3oVqh.pdf">COMPUTER
                                SYSTEMS AND NETWORKS</a></p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/6rUt3ZpdyQzmOoxbiyb9.pdf">WEB
                                TECHNOLOGIES</a></p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/oNOs4Nn9bSAzmk4sC5Er.pdf">MATHEMATICAL
                                BASES AND ALGORITHMS OF</a></p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/oNOs4Nn9bSAzmk4sC5Er.pdf">INFORMATION
                                PROCESSING</a></p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/AeyF8s63XMlbbJtwtbVJ.pdf">DIGITAL
                                IMAGE PROCESSING</a></p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/w9LYInElsbSZGBAC7uSr.pdf">DISCRETE AND
                                DIGITAL CONTROL SYSTEMS</a></p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/ApL8NTKWsBSueg6zNNbQ.pdf">BIG DATA</a>
                            </p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/9cCNWTlSDqEYS6GJsPKO.pdf">CONTROL
                                THEORY</a></p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/4xOcE2usoxw7LDbIVSnc.pdf">CREATING
                                MOBILE APPLICATIONS</a></p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/CYP196jbDgP1K1ZVJfbu.pdf">IDENTIFICATION
                                AND EVOLUTIONARY MODELING</a></p> <p dir="ltr"><a style={{color:"blue"}}
                                href="https://test.tdtu.uz/storage/pages/July2024/OjugUjdnlPqkVIcTnOm7.pdf">AUTOMATED
                                DESIGN OF INFORMATION SYSTEMS</a></p> <br/><br/><br/></td>
                        <td style={{borderWidth: "2px"}}><p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/mE4vkaUrb6UXjZSFFy5v.pdf">GENERAL PEDAGOGY
                            AND PSYCHOLOGY</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/wv3WOH3Xg2tuJVazjjOp.pdf">THE NEW VERSION
                            OF THE CONSTITUTION OF THE</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/wv3WOH3Xg2tuJVazjjOp.pdf">REPUBLIC OF
                            UZBEKISTAN</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/UlxMwX0I0Ru5ysPtqVH8.pdf">INTRODUCTION TO
                            DISCIPLINE</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/ORTSCJ4KDdsQs0ut1km3.pdf">INTRODUCTION TO
                            SPECIALTY</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/QJxrvgJtI0mEcsgusl9P.pdf">ENGINEERING
                            PROGRAMMING</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/jLMecvXJwOGixDrGTi3Y.pdf">FUNDAMENTALS OF
                            PROGRAMMING</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/vNYZigODXghpuZxZlPh2.pdf">INFORMATION
                            TECHNOLOGIES IN MANAGEMENT</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/vNYZigODXghpuZxZlPh2.pdf">PROCESSES</a>
                        </p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/a9KSv7JA7KT2v9ntn9j9.pdf">TECHNOLOGIES OF
                            INDUSTRIAL PRODUCTION</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/MnXVV4V6TFyQySflu9dY.pdf">BASICS OF WEB
                            PROGRAMMING</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/YggEBsyZnVbomBPQEtTB.pdf">FRONT-END
                            PROGRAMMING</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/tZvhEyEdwrc3vpiqXhE6.pdf">FUNDAMENTALS OF
                            ARTIFICIAL INTELLIGENCE</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/UwjPlLZdgi57fgR40ljV.pdf">INTELLIGENT
                            INFORMATION SYSTEMS</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/9FSW4eyMvVJUYEk5QYyU.pdf">FUNDAMENTALS OF
                            CYBERSECURITY</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/TCM621FTk0CgdDXZyLSf.pdf">INFORMATION
                            SECURITY</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/vGXL6qcGm0vgKIjJBFma.pdf">BASICS OF
                            MEDICAL KNOWLEDGE</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/Dyb15iWpGeFUycdIXulZ.pdf">CIVIL
                            PROTECTION</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/a5Uf21Fp2RtmZW1q7M2m.pdf">NETWORK
                            ADMINISTRATION</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/WWRsCIMJFiuWaFIBWVi7.pdf">MICROCONTROLLERS
                            AND EMBEDDED SYSTEMS</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/ezrJyn1I5g8hIGC74T8H.pdf">FINAL STATE
                            ATTESTATION</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/5UXDRM517xTZvOKzIlTr.pdf">QUALIFIED
                            PRACTICE PROGRAM</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/0pJ4B5Yl7f7s43iPnvHg.pdf">THE PROGRAM FOR
                            PERFORMING AND</a></p> <p dir="ltr"><a style={{color:"blue"}}
                            href="https://test.tdtu.uz/storage/pages/July2024/0pJ4B5Yl7f7s43iPnvHg.pdf">DEFENDING THE
                            GRADUATE THESIS</a></p></td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </Layout>
);
}

export default Bakalavr4;