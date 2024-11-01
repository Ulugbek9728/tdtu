import React, {useEffect, useState} from 'react';
import Layout from "@/locales/en/layout/Layout";
import {useTranslation} from "react-i18next";

import "antd/dist/antd.css";
import "../../../assets/schedule/schedule.css"
import {ApiName} from "@/api/APIname";
import axios from "axios";
import {Select} from 'antd';


const {} = Select;


function Schedule(props) {

    const {t} = useTranslation();

    const [schedule, setShedule] = useState('');
    const [fakultys, setfakultys] = useState([]);
    const [speciality, setspeciality] = useState([]);
    const [FakultyID, setfakultyID] = useState('');
    const [specialityID, setspecialityID] = useState('');
    const [bakalavr, setBakalavr] = useState('');
    const [groupList, setGroupList] = useState('');
    const [groupID, setGroupID] = useState('');
    const [kurs, setKurs] = useState('');
    const [eduTayp, seteduTayp] = useState('');
    const alternativeSpeciality = new Map();

    const [Allkurses, setAllKurses] = useState([]);

    function getWeekDates() {
        const today = new Date();
        today.setHours(5, 0, 0, 0)
        const weekStartDate = new Date(today);

        weekStartDate.setDate(today.getDate() + (1 - today.getDay()));

        const weekEndDate = new Date(today);
        weekEndDate.setDate(today.getDate() + (7 - today.getDay()));
        return {weekStartDate, weekEndDate,};

    }

    const {weekStartDate, weekEndDate} = getWeekDates();


    function parseDate() {
        const dateObject = new Date();
        const weekdays = [t(`WeekDate.item7`), t(`WeekDate.item1`), t(`WeekDate.item2`), t(`WeekDate.item3`), t(`WeekDate.item4`), t(`WeekDate.item5`), t(`WeekDate.item6`),];
        const dayOfWeek = dateObject.getDay();
        const weekdayName = weekdays[dayOfWeek];

        let dayArr = [
            [{wekDaye: t(`WeekDate.item1`)}],
            [{wekDaye: t(`WeekDate.item2`)}],
            [{wekDaye: t(`WeekDate.item3`)}],
            [{wekDaye: t(`WeekDate.item4`)}],
            [{wekDaye: t(`WeekDate.item5`)}],
            [{wekDaye: t(`WeekDate.item6`)}],
        ];
        schedule.forEach(item => {
            if (item.lessonDate === weekStartDate.getTime() / 1000)
                dayArr[0].push(item)
            if (item.lessonDate === weekStartDate.getTime() / 1000 + 86400)
                dayArr[1].push(item)
            if (item.lessonDate === weekStartDate.getTime() / 1000 + 86400 * 2)
                dayArr[2].push(item)
            if (item.lessonDate === weekStartDate.getTime() / 1000 + 86400 * 3)
                dayArr[3].push(item)
            if (item.lessonDate === weekStartDate.getTime() / 1000 + 86400 * 4)
                dayArr[4].push(item)
            if (item.lessonDate === weekStartDate.getTime() / 1000 + 86400 * 5)
                dayArr[5].push(item)
        })
        let sortedArry = dayArr.map((item)=>(
            item?.sort((a,b)=>parseInt(a?.lessonPair?.name) - parseInt(b?.lessonPair?.name))
        ))
        return (
            sortedArry.map((item, index) => (
                <div className="d-flex box" key={index}>

                    <div className={`week ${weekdayName === item[0].wekDaye ? "active" : ''} `}>{item[0].wekDaye}</div>
                    <div className="content">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">{t(`DarsJadval.item1`)}/{t(`DarsJadval.item2`)}</th>
                                <th scope="col">{t(`DarsJadval.item3`)}</th>
                                <th scope="col">{t(`DarsJadval.item4`)}</th>
                                <th scope="col">{t(`DarsJadval.item5`)}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {item.slice(1).map((item, index) => (
                                <tr>
                                    <td>{item.lessonPair?.name}</td>
                                    <td>{item.lessonPair.startTime} - {item.lessonPair.endTime}</td>
                                    <td><b>{item.trainingType?.name}</b> : {item.subject?.name}</td>
                                    <td>{item.auditorium?.name}</td>
                                    <td>{item.employee?.name}</td>
                                </tr>
                            ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            ))
        );
    }

    async function groupAll(e) {
        let alternativeList = speciality.filter(item => item.label === specialityID)[0].alternative;
        let responseGroups = [];
        for (let i = 0; i < alternativeList?.length; i++) {
            let elem = alternativeList[i];
            await axios.get(`${ApiName}/api/group`, {
                params: {
                    department: FakultyID,
                    education_type: bakalavr,
                    speciality: elem,
                    size: 200,
                    page: 0,
                    education_form: eduTayp,
                }
            }).then((res) => {
                responseGroups.push(...res?.data?.content)
            }).catch((error) => {
                console.log(error)
            })
        }
        setGroupList(responseGroups.filter(item => {
            return item.name.includes(e)
        }))

    }

    function GETspeciality() {
        axios.get(`${ApiName}/api/speciality`, {
            params: {
                departmentId: FakultyID,
                educationType: bakalavr,
                size: 200
            }
        }).then((res) => {
            for (let specialityElement of res.data.content) {
                if (alternativeSpeciality.has(specialityElement.name)) {
                    let newVar = alternativeSpeciality.get(specialityElement.name);
                    newVar.push(specialityElement.id)
                    alternativeSpeciality.set(specialityElement.name, newVar);
                } else {
                    let newVar = [];
                    newVar.push(specialityElement.id);
                    alternativeSpeciality.set(specialityElement.name, newVar);
                }
            }

            let list = [];
            let entries = alternativeSpeciality.entries();
            for (let i = 0; i < alternativeSpeciality.size; i++) {
                let next = entries.next();
                // console.log(next)
                list.push({value: next.value[0], label: next.value[0], alternative: next.value[1]})
            }
            setspeciality(list)
            // console.log(res.data.content)
        }).catch((error) => {
            console.log(error)
        })
    }

    function GetSchedulee() {
        axios.get(`${ApiName}/api/schedule`, {
            params: {
                facultyId: FakultyID,
                groupId: groupID,
                lessonDateFrom: Math.floor(weekStartDate.getTime() / 1000),
                lessonDateTo: Math.floor(weekEndDate.getTime() / 1000),
                size: 200,
                page: 0,
            }
        }).then((response) => {
            setShedule(response.data.content);
        }).catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        fakulty()
        if (FakultyID !== '') {
            GETspeciality()
        }
    }, [FakultyID,])
    useEffect(() => {
        if (specialityID !== '') {
            Allkurs()
        }
    }, [specialityID])
    useEffect(() => {
        if (kurs !== '') {
            if (kurs === "11") {
                groupAll(-23)
            }
            if (kurs === "12") {
                groupAll(-22)
            }
            if (kurs === "13") {
                groupAll(-21)
            }
            if (kurs === "14") {
                groupAll(-20)
            }
            if (kurs === "15") {
                groupAll(-19)
            }
        }
    }, [kurs, specialityID, FakultyID, eduTayp])
    useEffect(() => {
        if (groupID !== '') {
            GetSchedulee()
        }

    }, [groupID]);

    function fakulty() {
        axios.get(`${ApiName}/api/department`, '').then((response) => {
            setfakultys(response.data);
        }).catch((error) => {
            console.log(error)
        });
    }

    function Allkurs() {
        axios.get(`${ApiName}/api/course`, '').then((response) => {
            setAllKurses(response.data);
        }).catch((error) => {
            console.log(error)
        });
    }

    document.title='Dars jadval'


    return (
        <Layout>
            <div className="schedule">
                <div className="container">
                    <div className="row border-bottom mb-3 pb-3">
                        <div className="col-xl-12 col-xxl-6 my-2">
                            <label htmlFor="">Ta'lim turi</label>
                            <Select
                                onChange={(e) => {
                                    setBakalavr(e);
                                    seteduTayp('')
                                    setspecialityID('')
                                    setfakultyID('')
                                    setKurs('')
                                    setGroupID('')
                                }}
                                showSearch className='w-100'
                                optionFilterProp="children"
                                filterOption={(input, option) => (option?.label?.toLowerCase() ?? '').startsWith(input.toLowerCase())}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={[
                                    {
                                        label: "Bakalavr",
                                        value: "11"
                                    },
                                    {
                                        label: "Magistr",
                                        value: "12"
                                    }
                                ]
                                }
                            />
                        </div>
                        <div className="col-xl-12 col-xxl-6 my-2">
                            <label htmlFor="">Ta'lim shakli</label>
                            <Select
                                disabled={bakalavr === ''}
                                onChange={(e) => {
                                    seteduTayp(e);
                                    setspecialityID('')
                                    setfakultyID('')
                                    setKurs('')
                                    setGroupID('')
                                }}
                                value={eduTayp}
                                showSearch className='w-100'
                                optionFilterProp="children"
                                filterOption={(input, option) => (option?.label?.toLowerCase() ?? '').startsWith(input.toLowerCase())}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={bakalavr === '11' ?
                                    [
                                        {
                                            label: 'Kunduzgi',
                                            value: '11',
                                        },
                                        {
                                            label: 'Kechki',
                                            value: '12',
                                        },
                                        {
                                            label: 'Sirtqi',
                                            value: '13',
                                        },

                                    ] : [{
                                        label: 'Kunduzgi',
                                        value: '11',
                                    }]}
                            />
                        </div>
                        <div className="col-xl-12 col-xxl-6 my-2">
                            <label htmlFor="">Fakultet</label>
                            <Select
                                disabled={bakalavr === '' || eduTayp === ''}
                                onChange={(e) => {
                                    setfakultyID(e);
                                    setspecialityID('')
                                    setKurs('')
                                    setGroupID('')
                                }}
                                value={FakultyID}
                                showSearch className='w-100'
                                optionFilterProp="children"
                                filterOption={(input, option) => (option?.label?.toLowerCase() ?? '').startsWith(input.toLowerCase())}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={fakultys && fakultys.map((item, index) => ({
                                    value: item.id,
                                    label: item.name
                                }))}
                            />
                        </div>
                        <div className="col-xl-12 col-xxl-6 my-2">
                            <label htmlFor="">Yo'nalish</label>
                            <Select
                                disabled={FakultyID === ''}
                                onChange={(e) => {
                                    setspecialityID(e);
                                    setKurs('')
                                    setGroupID('')
                                }}
                                value={specialityID}
                                showSearch className='w-100'
                                optionFilterProp="children"
                                filterOption={(input, option) => (option?.label?.toLowerCase() ?? '').startsWith(input.toLowerCase())}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={speciality}
                            />
                        </div>
                        <div className="col-xl-12 col-xxl-6 my-2">
                            <label htmlFor="">Kurs</label>

                            <Select
                                disabled={FakultyID === '' || specialityID === ''}
                                showSearch className='w-100'
                                onChange={(e) => {
                                    setKurs(e);
                                    setGroupID('')
                                }}
                                value={kurs}
                                optionFilterProp="children"
                                filterOption={(input, option) => (option?.label?.toLowerCase() ?? '').startsWith(input.toLowerCase())}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={
                                    bakalavr === '11' ?
                                        eduTayp === "13" ?
                                            Allkurses && Allkurses.slice(0, 5).map((item, index) => (
                                                {value: item.code, label: item?.name}))
                                            :
                                            Allkurses && Allkurses.slice(0, 4).map((item, index) => (
                                                {value: item.code, label: item?.name}))
                                        :
                                        Allkurses && Allkurses.slice(0, 2).map((item, index) => (
                                            {value: item.code, label: `${index + 1}-kurs`}))
                                }
                            />
                        </div>
                        <div className="col-xl-12 col-xxl-6 my-2">
                            <label htmlFor="">Guruh</label>
                            <Select
                                disabled={FakultyID === '' || specialityID === '' || kurs === ''}
                                showSearch className='w-100'
                                onChange={(e) => {
                                    setGroupID(e);
                                }}
                                value={groupID}
                                optionFilterProp="children"
                                filterOption={(input, option) => (option?.label?.toLowerCase() ?? '').startsWith(input.toLowerCase())}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={groupList && groupList.map((item, index) => (
                                    {value: item.id, label: item?.name}))}
                            />
                        </div>
                    </div>
                    {schedule !== '' ? parseDate() : <p className="tezKunda">Dars jadval</p>}
                </div>
            </div>
        </Layout>
    );
}

export default Schedule;