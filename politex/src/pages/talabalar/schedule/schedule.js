import React, {useEffect, useState} from 'react';
import Layout from "@/locales/en/layout/Layout";
import {Nav} from 'rsuite';
import { useTranslation } from "react-i18next";

import "antd/dist/antd.css";
import "../../../assets/schedule/schedule.css"
import {ApiName} from "@/api/APIname";
import axios from "axios";
import {Select} from 'antd';


const {Option} = Select;

const Navbar = ({active, onSelect, ...props}) => {
    return (
        <Nav {...props} activeKey={active} onSelect={onSelect} style={{marginBottom: 50}}>
            <Nav.Item eventKey="newsOld">Oldingi Hafta</Nav.Item>
            <Nav.Item eventKey="news">Joriy Hafta</Nav.Item>
            <Nav.Item eventKey="solutions">Keyingi Hafta</Nav.Item>
        </Nav>
    );
};

function Schedule(props) {

    const { t } = useTranslation();

    const [active, setActive] = useState('news');
    const [schedule, setShedule] = useState([

        {
            "id": 1132161,
            "subject": {
                "id": 2092,
                "name": "Tibbiyot qurilmalari, uskunalari, tizimlari va komplekslari"
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 31,
                "name": "Biotibbiyot muxandisligi  kafedrasi",
                "code": "315-108-02",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 8
            },
            "auditorium": {
                "code": 109,
                "name": "408  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "11",
                "name": "Ma’ruza"
            },
            "lessonPair": {
                "code": "11",
                "name": "1",
                "start_time": "09:00",
                "end_time": "10:20"
            },
            "employee": {
                "id": 270,
                "name": "UMAROVA M. A."
            },
            "weekStartTime": 1698624000,
            "weekEndTime": 1699056000,
            "lesson_date": 1698624000,
            "_week": 141897
        },
        {
            "id": 1132153,
            "subject": {
                "id": 108,
                "name": "Elektrotexnika va elektronika"
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 59,
                "name": "Elektr texnikasi  kafedrasi",
                "code": "315-105-06",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 5
            },
            "auditorium": {
                "code": 109,
                "name": "408  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "11",
                "name": "Ma’ruza"
            },
            "lessonPair": {
                "code": "12",
                "name": "2",
                "start_time": "10:30",
                "end_time": "11:50"
            },
            "employee": {
                "id": 1885,
                "name": "RISMUXAMEDOV S. D."
            },
            "weekStartTime": 1698624000,
            "weekEndTime": 1699056000,
            "lesson_date": 1698624000,
            "_week": 141897
        },
        {
            "id": 1132158,
            "subject": {
                "id": 387,
                "name": "Biofizika"
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 31,
                "name": "Biotibbiyot muxandisligi  kafedrasi",
                "code": "315-108-02",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 8
            },
            "auditorium": {
                "code": 109,
                "name": "408  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "12",
                "name": "Laboratoriya"
            },
            "lessonPair": {
                "code": "13",
                "name": "3",
                "start_time": "12:00",
                "end_time": "13:20"
            },
            "employee": {
                "id": 1196,
                "name": "UMAROVA D. A."
            },
            "weekStartTime": 1698624000,
            "weekEndTime": 1699056000,
            "lesson_date": 1698624000,
            "_week": 141897
        },

        {
            "id": 1132151,
            "subject": {
                "id": 107,
                "name": "Metrologiya va standartlashtirish"
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 15,
                "name": "Metrologiya, texnik jihatdan tartibga solish, standartlashtirish va sertifikatlashtirish kafedrasi",
                "code": "315-101-03",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 1
            },
            "auditorium": {
                "code": 75,
                "name": "A-2  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "11",
                "name": "Ma’ruza"
            },
            "lessonPair": {
                "code": "11",
                "name": "1",
                "start_time": "09:00",
                "end_time": "10:20"
            },
            "employee": {
                "id": 931,
                "name": "KULUYEV R. R."
            },
            "weekStartTime": 1698624000,
            "weekEndTime": 1699056000,
            "lesson_date": 1698710400,
            "_week": 141897
        },
        {
            "id": 1132157,
            "subject": {
                "id": 387,
                "name": "Biofizika"
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 31,
                "name": "Biotibbiyot muxandisligi  kafedrasi",
                "code": "315-108-02",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 8
            },
            "auditorium": {
                "code": 109,
                "name": "408  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "11",
                "name": "Ma’ruza"
            },
            "lessonPair": {
                "code": "12",
                "name": "2",
                "start_time": "10:30",
                "end_time": "11:50"
            },
            "employee": {
                "id": 1196,
                "name": "UMAROVA D. A."
            },
            "weekStartTime": 1698624000,
            "weekEndTime": 1699056000,
            "lesson_date": 1698710400,
            "_week": 141897
        },
        {
            "id": 1132155,
            "subject": {
                "id": 140,
                "name": "Xorijiy til"
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 34,
                "name": "Chet tillar  kafedrasi",
                "code": "315-107-10",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 7
            },
            "auditorium": {
                "code": 109,
                "name": "408  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "13",
                "name": "Amaliy"
            },
            "lessonPair": {
                "code": "13",
                "name": "3",
                "start_time": "12:00",
                "end_time": "13:20"
            },
            "employee": {
                "id": 697,
                "name": "SADIKOVA M. B."
            },
            "weekStartTime": 1698624000,
            "weekEndTime": 1699056000,
            "lesson_date": 1698710400,
            "_week": 141897
        },

        {
            "id": 1132162,
            "subject": {
                "id": 2092,
                "name": "Tibbiyot qurilmalari, uskunalari, tizimlari va komplekslari"
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 31,
                "name": "Biotibbiyot muxandisligi  kafedrasi",
                "code": "315-108-02",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 8
            },
            "auditorium": {
                "code": 109,
                "name": "408  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "13",
                "name": "Amaliy"
            },
            "lessonPair": {
                "code": "11",
                "name": "1",
                "start_time": "09:00",
                "end_time": "10:20"
            },
            "employee": {
                "id": 1886,
                "name": "NAZIROV R. M."
            },
            "weekStartTime": 1698624000,
            "weekEndTime": 1699056000,
            "lesson_date": 1698796800,
            "_week": 141897
        },
        {
            "id": 1132152,
            "subject": {
                "id": 107,
                "name": "Metrologiya va standartlashtirish"
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 15,
                "name": "Metrologiya, texnik jihatdan tartibga solish, standartlashtirish va sertifikatlashtirish kafedrasi",
                "code": "315-101-03",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 1
            },
            "auditorium": {
                "code": 109,
                "name": "408  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "13",
                "name": "Amaliy"
            },
            "lessonPair": {
                "code": "12",
                "name": "2",
                "start_time": "10:30",
                "end_time": "11:50"
            },
            "employee": {
                "id": 1648,
                "name": "INATOVA N. A."
            },
            "weekStartTime": 1698624000,
            "weekEndTime": 1699056000,
            "lesson_date": 1698796800,
            "_week": 141897
        },
        {
            "id": 1132154,
            "subject": {
                "id": 108,
                "name": "Elektrotexnika va elektronika"
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 59,
                "name": "Elektr texnikasi  kafedrasi",
                "code": "315-105-06",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 5
            },
            "auditorium": {
                "code": 55,
                "name": "333 EF",
                "auditoriumType": {
                    "code": "12",
                    "name": "Laboratoriya"
                },
                "building": {
                    "id": 2,
                    "name": "Energetika fakulteti"
                }
            },
            "trainingType": {
                "code": "13",
                "name": "Amaliy"
            },
            "lessonPair": {
                "code": "13",
                "name": "3",
                "start_time": "12:00",
                "end_time": "13:20"
            },
            "employee": {
                "id": 1885,
                "name": "RISMUXAMEDOV S. D."
            },
            "weekStartTime": 1698624000,
            "weekEndTime": 1699056000,
            "lesson_date": 1698796800,
            "_week": 141897
        },

        {
            "id": 1132159,
            "subject": {
                "id": 1569,
                "name": "Amaliy mexanika"
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 37,
                "name": "Materiallar qarshiligi va mashina detallari  kafedrasi",
                "code": "315-102-07",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 2
            },
            "auditorium": {
                "code": 109,
                "name": "408  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "11",
                "name": "Ma’ruza"
            },
            "lessonPair": {
                "code": "11",
                "name": "1",
                "start_time": "09:00",
                "end_time": "10:20"
            },
            "employee": {
                "id": 1189,
                "name": "MAKSUDOVA N. A."
            },
            "weekStartTime": 1698624000,
            "weekEndTime": 1699056000,
            "lesson_date": 1698883200,
            "_week": 141897
        },
        {
            "id": 1132160,
            "subject": {
                "id": 1569,
                "name": "Amaliy mexanika"
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 37,
                "name": "Materiallar qarshiligi va mashina detallari  kafedrasi",
                "code": "315-102-07",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 2
            },
            "auditorium": {
                "code": 109,
                "name": "408  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "12",
                "name": "Laboratoriya"
            },
            "lessonPair": {
                "code": "12",
                "name": "2",
                "start_time": "10:30",
                "end_time": "11:50"
            },
            "employee": {
                "id": 1189,
                "name": "MAKSUDOVA N. A."
            },
            "weekStartTime": 1698624000,
            "weekEndTime": 1699056000,
            "lesson_date": 1698883200,
            "_week": 141897
        },
        {
            "id": 1132156,
            "subject": {
                "id": 140,
                "name": "Xorijiy til"
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 34,
                "name": "Chet tillar  kafedrasi",
                "code": "315-107-10",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 7
            },
            "auditorium": {
                "code": 109,
                "name": "408  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "13",
                "name": "Amaliy"
            },
            "lessonPair": {
                "code": "13",
                "name": "3",
                "start_time": "12:00",
                "end_time": "13:20"
            },
            "employee": {
                "id": 697,
                "name": "SADIKOVA M. B."
            },
            "weekStartTime": 1698624000,
            "weekEndTime": 1699056000,
            "lesson_date": 1698883200,
            "_week": 141897
        },

        {
            "id": 1132149,
            "subject": {
                "id": 1,
                "name": "Oliy matematika "
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 33,
                "name": "Oliy matematika  kafedrasi",
                "code": "315-103-06",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 3
            },
            "auditorium": {
                "code": 109,
                "name": "408  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "11",
                "name": "Ma’ruza"
            },
            "lessonPair": {
                "code": "11",
                "name": "1",
                "start_time": "09:00",
                "end_time": "10:20"
            },
            "employee": {
                "id": 896,
                "name": "GASANOVA N. Y."
            },
            "weekStartTime": 1698624000,
            "weekEndTime": 1699056000,
            "lesson_date": 1698969600,
            "_week": 141897
        },
        {
            "id": 1132150,
            "subject": {
                "id": 1,
                "name": "Oliy matematika "
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 33,
                "name": "Oliy matematika  kafedrasi",
                "code": "315-103-06",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 3
            },
            "auditorium": {
                "code": 109,
                "name": "408  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "13",
                "name": "Amaliy"
            },
            "lessonPair": {
                "code": "12",
                "name": "2",
                "start_time": "10:30",
                "end_time": "11:50"
            },
            "employee": {
                "id": 896,
                "name": "GASANOVA N. Y."
            },
            "weekStartTime": 1698624000,
            "weekEndTime": 1699056000,
            "lesson_date": 1698969600,
            "_week": 141897
        },
        {
            "id": 1132218,
            "subject": {
                "id": 2092,
                "name": "Tibbiyot qurilmalari, uskunalari, tizimlari va komplekslari"
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 31,
                "name": "Biotibbiyot muxandisligi  kafedrasi",
                "code": "315-108-02",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 8
            },
            "auditorium": {
                "code": 109,
                "name": "408  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "11",
                "name": "Ma’ruza"
            },
            "lessonPair": {
                "code": "11",
                "name": "1",
                "start_time": "09:00",
                "end_time": "10:20"
            },
            "employee": {
                "id": 270,
                "name": "UMAROVA M. A."
            },
            "weekStartTime": 1699228800,
            "weekEndTime": 1699660800,
            "lesson_date": 1699228800,
            "_week": 141898
        },

        {
            "id": 1132210,
            "subject": {
                "id": 108,
                "name": "Elektrotexnika va elektronika"
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 59,
                "name": "Elektr texnikasi  kafedrasi",
                "code": "315-105-06",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 5
            },
            "auditorium": {
                "code": 109,
                "name": "408  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "11",
                "name": "Ma’ruza"
            },
            "lessonPair": {
                "code": "12",
                "name": "2",
                "start_time": "10:30",
                "end_time": "11:50"
            },
            "employee": {
                "id": 1885,
                "name": "RISMUXAMEDOV S. D."
            },
            "weekStartTime": 1699228800,
            "weekEndTime": 1699660800,
            "lesson_date": 1699228800,
            "_week": 141898
        },
        {
            "id": 1132215,
            "subject": {
                "id": 387,
                "name": "Biofizika"
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 31,
                "name": "Biotibbiyot muxandisligi  kafedrasi",
                "code": "315-108-02",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 8
            },
            "auditorium": {
                "code": 109,
                "name": "408  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "12",
                "name": "Laboratoriya"
            },
            "lessonPair": {
                "code": "13",
                "name": "3",
                "start_time": "12:00",
                "end_time": "13:20"
            },
            "employee": {
                "id": 1196,
                "name": "UMAROVA D. A."
            },
            "weekStartTime": 1699228800,
            "weekEndTime": 1699660800,
            "lesson_date": 1699228800,
            "_week": 141898
        },
        {
            "id": 1132208,
            "subject": {
                "id": 107,
                "name": "Metrologiya va standartlashtirish"
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 15,
                "name": "Metrologiya, texnik jihatdan tartibga solish, standartlashtirish va sertifikatlashtirish kafedrasi",
                "code": "315-101-03",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 1
            },
            "auditorium": {
                "code": 75,
                "name": "A-2  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "11",
                "name": "Ma’ruza"
            },
            "lessonPair": {
                "code": "11",
                "name": "1",
                "start_time": "09:00",
                "end_time": "10:20"
            },
            "employee": {
                "id": 931,
                "name": "KULUYEV R. R."
            },
            "weekStartTime": 1699228800,
            "weekEndTime": 1699660800,
            "lesson_date": 1699315200,
            "_week": 141898
        },
        {
            "id": 1132214,
            "subject": {
                "id": 387,
                "name": "Biofizika"
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 31,
                "name": "Biotibbiyot muxandisligi  kafedrasi",
                "code": "315-108-02",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 8
            },
            "auditorium": {
                "code": 109,
                "name": "408  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "11",
                "name": "Ma’ruza"
            },
            "lessonPair": {
                "code": "12",
                "name": "2",
                "start_time": "10:30",
                "end_time": "11:50"
            },
            "employee": {
                "id": 1196,
                "name": "UMAROVA D. A."
            },
            "weekStartTime": 1699228800,
            "weekEndTime": 1699660800,
            "lesson_date": 1699315200,
            "_week": 141898
        },
        {
            "id": 1132212,
            "subject": {
                "id": 140,
                "name": "Xorijiy til"
            },
            "semester": {
                "code": "13",
                "name": "3-semestr"
            },
            "educationYear": {
                "code": "2023",
                "name": "2023-2024",
                "current": true
            },
            "group": {
                "id": 2085,
                "name": "138-22 BTM (rus)",
                "educationLang": {
                    "code": "12",
                    "name": "Rus"
                }
            },
            "faculty": {
                "id": 8,
                "name": "Muxandislik texnologiyalari fakulteti",
                "code": "315-108",
                "structureType": {
                    "code": "11",
                    "name": "Fakultet"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": null
            },
            "department": {
                "id": 34,
                "name": "Chet tillar  kafedrasi",
                "code": "315-107-10",
                "structureType": {
                    "code": "12",
                    "name": "Kafedra"
                },
                "localityType": {
                    "code": "11",
                    "name": "Mahalliy"
                },
                "parent": 7
            },
            "auditorium": {
                "code": 109,
                "name": "408  MTF",
                "auditoriumType": {
                    "code": "11",
                    "name": "Ma’ruza"
                },
                "building": {
                    "id": 5,
                    "name": "Muhandislik texnologiyalari fakulteti"
                }
            },
            "trainingType": {
                "code": "13",
                "name": "Amaliy"
            },
            "lessonPair": {
                "code": "13",
                "name": "3",
                "start_time": "12:00",
                "end_time": "13:20"
            },
            "employee": {
                "id": 697,
                "name": "SADIKOVA M. B."
            },
            "weekStartTime": 1699228800,
            "weekEndTime": 1699660800,
            "lesson_date": 1699315200,
            "_week": 141898
        }

    ]);
    const [fakultys, setfakultys] = useState([]);
    const [FakultyID, setfakultyID] = useState('');
    const [bakalavr, setBakalavr] = useState('11');
    const [groupList, setGroupList] = useState('');
    const [groupID, setGroupID] = useState('');
    const [kurs, setKurs] = useState('');


    const [Allkurses, setAllKurses] = useState([]);

        function parseDate () {

            let dayArr = [
                [{wekDaye:t(`WeekDate.item1`)}],
                [{wekDaye:t(`WeekDate.item2`)}],
                [{wekDaye:t(`WeekDate.item3`)}],
                [{wekDaye:t(`WeekDate.item4`)}],
                [{wekDaye:t(`WeekDate.item5`)}],
                [{wekDaye:t(`WeekDate.item6`)}],
               ];
            const weekStartTime = 1698624000;
            schedule.forEach(item => {
                if (item.lesson_date === weekStartTime)
                    dayArr[0].push(item)
                if (item.lesson_date === weekStartTime + 86400)
                    dayArr[1].push(item)
                if (item.lesson_date === weekStartTime + 86400 * 2)
                    dayArr[2].push(item)
                if (item.lesson_date === weekStartTime + 86400 * 3)
                    dayArr[3].push(item)
                if (item.lesson_date === weekStartTime + 86400 * 4)
                    dayArr[4].push(item)
                if (item.lesson_date === weekStartTime + 86400 * 5)
                    dayArr[5].push(item)
            })
            console.log(dayArr)
            console.log(dayArr.slice(1));

            return (
               dayArr.map((item, index)=>(
                   <div className="d-flex box" key={index}>
                       <div className="week active">{item[0].wekDaye}</div>
                       <div className="content">
                           <table className="table table-striped">
                               <thead>
                               <tr>
                                   <th scope="col">#</th>
                                   <th scope="col">{t(`DarsJadval.item1`)}/{t(`DarsJadval.item2`)}</th>
                                   <th scope="col">{t(`DarsJadval.item3`)}</th>
                                   <th scope="col">{t(`DarsJadval.item4`)}</th>
                                   <th scope="col">{t(`DarsJadval.item5`)}</th>
                                   <th scope="col">{t(`DarsJadval.item6`)}</th>
                               </tr>
                               </thead>
                               <tbody>
                               {item.slice(1).map((item, index)=>(
                                   <tr>
                                       <td>{item.lessonPair.name}</td>
                                       <td>{item.lessonPair.start_time}/{item.lessonPair.end_time}</td>
                                       <td>{item.subject.name}</td>
                                       <td>{item.auditorium.name}</td>
                                       <td>{item.trainingType.name}</td>
                                       <td>{item.employee.name}</td>
                                   </tr>
                               ))}

                               </tbody>
                           </table>
                       </div>
                   </div>
               ))
            );
        }

    useEffect(()=>{
        fakulty()
        Allkurs()
    },[])
    function fakulty() {
        axios.get(`${ApiName}/api/department`, '', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then((response) => {
            setfakultys(response.data);
        }).catch((error) => {
            console.log(error)
        });
    }
    function Allkurs() {
        axios.get(`${ApiName}/api/course`, '', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then((response) => {
            setAllKurses(response.data);
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <Layout>
            <div className="schedule">
                <div className="container">
                    <div className="d-flex justify-content-between mb-3 border-bottom pb-3">
                        <Select
                            onChange={(e) => {
                                setfakultyID(e);
                                setGroupID('')
                            }}
                            showSearch className='w-25'
                            placeholder="Fakultet"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label?.toLowerCase() ?? '').startsWith(input.toLowerCase())}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={fakultys && fakultys.map((item, index) =>({value:item.id, label:item.name}))}
                        />
                        <Select
                            showSearch className='w-25'
                            onChange={(e) => {
                                setKurs(e);
                            }}
                            placeholder="Kurs"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label?.toLowerCase() ?? '').startsWith(input.toLowerCase())}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={
                                bakalavr === '11' ?
                                    Allkurses && Allkurses.slice(0, 4).map((item, index) =>(
                                        {value:item.code, label:item?.name}))
                                    :
                                    Allkurses && Allkurses.slice(0,2).map((item, index) =>(
                                        {value:item.code, label:`${index+1}-kurs`}))
                            }
                        />

                        <Select
                            showSearch className='w-25'
                            onChange={(e) => {
                                setGroupID(e);
                            }}
                            placeholder="Guruh"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label?.toLowerCase() ?? '').startsWith(input.toLowerCase())}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={groupList && groupList.map((item, index) =>(
                                {value:item.id, label:item?.name}))}
                        />

                    </div>

                    <Navbar appearance="tabs" active={active} onSelect={setActive}/>
                    { parseDate ()}
                </div>
            </div>
        </Layout>
    );
}

export default Schedule;