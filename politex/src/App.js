import React, {lazy, Suspense, useEffect, useRef, useState} from "react";
import {Route, Router, Routes} from "react-router-dom";
import 'rsuite/dist/rsuite.min.css';
// talabalar
import Bakalavriat from "@/pages/talabalar/bakalavriat";
import Bakalavriat2 from "@/pages/talabalar/bakalavriat/bakalavr2";
import Bakalavriat3 from "@/pages/talabalar/bakalavriat/bakalavr3";
import Bakalavriat4 from "@/pages/talabalar/bakalavriat/Bakalavr4";
import Bakalavriat5 from "@/pages/talabalar/bakalavriat/Bakalavr5";
import BakalavriatId from "@/pages/talabalar/bakalavriat/_id";
import Magistratura from "@/pages/talabalar/magistratura";
import Magistratura2 from "@/pages/talabalar/magistratura/magistratura2";
import Magistratura3 from "@/pages/talabalar/magistratura/magistratura3";
import Magistratura4 from "@/pages/talabalar/magistratura/magistratura4";
import Magistratura5 from "@/pages/talabalar/magistratura/magistratura5";
import MagistraturaId from "@/pages/talabalar/magistratura/_id";
import Kechki from "@/pages/talabalar/kechki";
import KechkiId from "@/pages/talabalar/kechki/_id";
import Sirtqi from "@/pages/talabalar/sirtqi";
import SirtqiId from "@/pages/talabalar/sirtqi/_id";
import Bitiruvchilar from "@/pages/talabalar/bitiruvchilar";
import BitiruvchilarId from "@/pages/talabalar/bitiruvchilar/_id";
import Imtixonlar from "@/pages/talabalar/imtixonlar/imtixonlar";
import Imtixonlar2 from "@/pages/talabalar/imtixonlar/imtixonlar2";
import Imtixonlar3 from "@/pages/talabalar/imtixonlar/imtixonlar3";
import Imtixonlar4 from "@/pages/talabalar/imtixonlar/imtixonlar4";
import Sorovlar from "@/pages/talabalar/so'rovlar/so'rovlar";
import Sorovlar1 from "@/pages/talabalar/so'rovlar/sorovlar2";
import Sorovlar2 from "@/pages/talabalar/so'rovlar/sorovlar3";

// abituriyentlar
import XorijiyFuqarolar from "@/pages/abituriyent/xorijiy_fuqarolar";
import XorijiyFuqarolarId from "@/pages/abituriyent/xorijiy_fuqarolar/_id";
import SirtqiKechkiId from "@/pages/abituriyent/sirtqi_kechki/_id";
import SirtqiKechki from "@/pages/abituriyent/sirtqi_kechki";
import QoshmaTalim from "@/pages/abituriyent/qo'shma_ta'lim";
import QoshmaTalimId from "@/pages/abituriyent/qo'shma_ta'lim/_id";
import MagistraturaAb from "@/pages/abituriyent/magistratura";
import MagistraturaAbId from "@/pages/abituriyent/magistratura/_id";
import BakalavriatAb from "@/pages/abituriyent/bakalavriat";
import BakalavriatAbId from "@/pages/abituriyent/bakalavriat/_id";
import UzBayrog from "./pages/UzBayrog";
import UzbGerb from "./pages/UzbGerb";
import UzbMadhiya from "./pages/UzbMadhiya";
import NewsId from "./pages/news/NewsId";
import NewsPage from "./pages/news/NewsPage";
import Events from "./pages/news/events/Events";
import EventsId from "./pages/news/events/EventsId";
import AnnouncementsPage from "./pages/news/announcementsPage/AnnouncementsPage";
import AnnouncementsPageId from "./pages/news/announcementsPage/AnnouncementsPageId";
import Sports from "./pages/news/sports/Sports";
import SportsId from "./pages/news/sports/SportsId";
// import Home from "@/pages/Home";
import SiteMap from "@/pages/site-map";
import Rektorat from "./pages/tuzilma/Rektorat";
import M1 from "./pages/tuzilma/markazlar/M1";
import Fakultetlar from "./pages/tuzilma/fakultetlar/Fakultetlar";
import FakultetlarId from "./pages/tuzilma/fakultetlar/FakultetlarId";
import Fan from "@/pages/faoliyat/fan_va_innovatsiya/fan";
import Innovatsiya from "@/pages/faoliyat/fan_va_innovatsiya/innovatsiya";
import Doktorantura from "@/pages/faoliyat/fan_va_innovatsiya/doktorantura";
import MoliyaviyFaoliat from "@/pages/faoliyat/moliyaviy_faoliat";
import Yoshlar from "@/pages/faoliyat/yoshlar_bilan_ishlash";
import MadaniyMarifiy from "@/pages/faoliyat/madaniy_marifiy";
import XalqaroHamkorlik from "@/pages/faoliyat/xalqaro_aloqalar/xalqaro_hamkorlik";
import QoshmaDastur from "@/pages/faoliyat/xalqaro_aloqalar/xalqaro_hamkorlik/id";
import CreativeSpark from "@/pages/faoliyat/xalqaro_aloqalar/creative_spark";
import Ka107 from "@/pages/faoliyat/xalqaro_aloqalar/erasmus/ka107";
import MechaUz from "@/pages/faoliyat/xalqaro_aloqalar/erasmus/mecha_uz";
import SpaceCom from "@/pages/faoliyat/xalqaro_aloqalar/erasmus/space_com";
import Kafedralar from "./pages/tuzilma/kafedralar/Kafedralar";
import KafedralarId from "./pages/tuzilma/kafedralar/KafedralarId";
import {routes} from "./constants/page-routes";
import {QueryClient, QueryClientProvider} from "react-query";
// ilmiy-faoliyat, markazlar, bo'limlar
import Texnika from "@/pages/ilmiy_faoliyat/texnika";
import MahoratDarslar from "@/pages/ilmiy_faoliyat/mahorat-darslar";
import YoshTexnika from "@/pages/ilmiy_faoliyat/yosh-texnika";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import M2 from "./pages/tuzilma/markazlar/M2";
import M3 from "./pages/tuzilma/markazlar/M3";
import M4 from "./pages/tuzilma/markazlar/M4";
import M5 from "./pages/tuzilma/markazlar/M5";
import B1 from "./pages/tuzilma/bolimlar/B1";
import B2 from "./pages/tuzilma/bolimlar/B2";
import B3 from "./pages/tuzilma/bolimlar/B3";
import B4 from "./pages/tuzilma/bolimlar/B4";
import B5 from "./pages/tuzilma/bolimlar/B5";
import B6 from "./pages/tuzilma/bolimlar/B6";
import B7 from "./pages/tuzilma/bolimlar/B7";
import B8 from "./pages/tuzilma/bolimlar/B8";
import B9 from "./pages/tuzilma/bolimlar/B9";
import B10 from "./pages/tuzilma/bolimlar/B10";
import B11 from "./pages/tuzilma/bolimlar/B11";
import B12 from "./pages/tuzilma/bolimlar/B12";
import B13 from "./pages/tuzilma/bolimlar/B13";
import B14 from "./pages/tuzilma/bolimlar/B14";
import B15 from "@/pages/tuzilma/bolimlar/B15";
import B16 from "@/pages/tuzilma/bolimlar/B16";
import B17 from "@/pages/tuzilma/bolimlar/B17";
import B18 from "@/pages/tuzilma/bolimlar/B18";
import B19 from "@/pages/tuzilma/bolimlar/B19";
import B20 from "@/pages/tuzilma/bolimlar/B20";
import B21 from "@/pages/tuzilma/bolimlar/B21";
import B22 from "@/pages/tuzilma/bolimlar/B22";

import F1 from "./pages/tuzilma/filiallar/F1";
import F2 from "./pages/tuzilma/filiallar/F2";

import U1 from "./pages/tuzilma/universitetlar/U1"
import U2 from "./pages/tuzilma/universitetlar/U2"
import U3 from "./pages/tuzilma/universitetlar/U3"

// korrupsiyasiz soha
import TdtuShartnomalar from "./pages/korrupsiyasiz_soha/tdtu_shartnomalar";
import IshHaqiQoidalari from "./pages/korrupsiyasiz_soha/ish_haqi_qoidalari";
import MuassasaByudjeti from "./pages/korrupsiyasiz_soha/muassasa_byudjeti";
import FanDasturlari from "./pages/korrupsiyasiz_soha/fan_dasturlari";
import NamunaviyOraliq from "./pages/korrupsiyasiz_soha/namunaviy_oraliq";
import XodimlarProfili from "./pages/korrupsiyasiz_soha/xodimlar_profili";
import TalimYonalishlari from "./pages/korrupsiyasiz_soha/talim_yonalishlari";
import ProfessorOqituvchilar from "./pages/korrupsiyasiz_soha/professorlar";
import KorrupsiyagaOidHolatlar from "./pages/korrupsiyasiz_soha/korrupsiyaga_oid_holatlar";
import Search from "./pages/Search";
import Qabul from "./pages/Qabul";
import Erasmus from "./pages/faoliyat/xalqaro_aloqalar/erasmus/erasmus";
import Schedule from "@/pages/talabalar/schedule/schedule";
// import Test from "@/pages/talabalar/schedule/test";
import Edu from "@/pages/talabalar/edu/edu";
import Vacancies from "@/pages/talabalar/vacancies";
import Preparation from "@/pages/Preparation";
import {message} from "antd";
import SpellingMistakeFormModal from "@/components/modals/SpellingMistakeFormModal";
import Chemists from "@/pages/faoliyat/kimyogarlar/chemists";
import CemistsId from "@/pages/faoliyat/kimyogarlar/CemistsID";
import GreenUniversitet from "@/pages/Yashil universitet/GreenUniversitet";


const Home = lazy(() => import("@/pages/Home"));


function App() {
    const client = new QueryClient();
    const [openSpellingModal, setOpenSpellingModal] = useState(false)

    const [spellingData, setSpellingData] = useState({})

    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };

    }, []);


    const onKeyDown = (event) => {
        if (event.ctrlKey && event.key === 'Enter') {
            let selection = window.getSelection().toString();
            if (selection.length > 2 && selection.length < 100) {
                const body = {
                    url: window.getSelection().anchorNode.baseURI,
                    mistakeText: selection,
                    x: window.scrollX,
                    y: window.scrollY,
                };
                setSpellingData(body)
                setOpenSpellingModal(true)
            } else {
                messageApi.open({
                    type: 'warning',
                    content: 'Xatolik to‘g‘risida xabar yuborish uchun 2 tadan 100 tagacha belgidan iborat matnni belgilang.',
                    duration: 5
                });
            }
        }
    }

    return (
        <QueryClientProvider client={client}>
            {contextHolder}
            <ToastContainer/>
            <Routes >

                <Route index element={
                    <Suspense fallback={<span className="loader"/>}>
                        <Home/>
                    </Suspense>
                }
                />
                {/* davlat ramzlari */}
                <Route path={"/flag"} element={<UzBayrog/>}/>
                <Route path={"/qabul"} element={<Qabul/>}/>
                <Route path={"/search/:id"} element={<Search/>}/>
                <Route path={"/gerb"} element={<UzbGerb/>}/>
                <Route path={"/madhiya"} element={<UzbMadhiya/>}/>
                <Route path={"/greenUniversity"} element={<GreenUniversitet/>}/>
                {/* news page */}
                <Route path={"new/news"}>
                    <Route index element={<NewsPage/>}/>
                    <Route path={":id"} element={<NewsId/>}/>
                </Route>
                <Route path={"new/events"}>
                    <Route index element={<Events/>}/>
                    <Route path={":id"} element={<EventsId/>}/>
                </Route>
                <Route path={"new/announcements"}>
                    <Route index element={<AnnouncementsPage/>}/>
                    <Route path={":id"} element={<AnnouncementsPageId/>}/>
                </Route>
                <Route path={"new/sport"}>
                    <Route index element={<Sports/>}/>
                    <Route path={":id"} element={<SportsId/>}/>
                </Route>
                {/* Tuzilma page */}
                <Route path={"structure/rectorate"}>
                    <Route index element={<Rektorat/>}/>
                </Route>
                {/* markazlar */}
                <Route path={"/structure/centers/1"} element={<M1/>}/>
                <Route path={"/structure/centers/2"} element={<M2/>}/>
                <Route path={"/structure/centers/3"} element={<M3/>}/>
                <Route path={"/structure/centers/4"} element={<M4/>}/>
                <Route path={"/structure/centers/5"} element={<M5/>}/>
                {/* markazlar */}
                {/* Bo’limlar */}
                <Route path={"/structure/sections/1"} element={<B1/>}/>
                <Route path={"/structure/sections/2"} element={<B2/>}/>
                <Route path={"/structure/sections/3"} element={<B3/>}/>
                <Route path={"/structure/sections/4"} element={<B4/>}/>
                <Route path={"/structure/sections/5"} element={<B5/>}/>
                <Route path={"/structure/sections/6"} element={<B6/>}/>
                <Route path={"/structure/sections/7"} element={<B7/>}/>
                <Route path={"/structure/sections/8"} element={<B8/>}/>
                <Route path={"/structure/sections/9"} element={<B9/>}/>
                <Route path={"/structure/sections/10"} element={<B10/>}/>
                <Route path={"/structure/sections/11"} element={<B11/>}/>
                <Route path={"/structure/sections/12"} element={<B12/>}/>
                <Route path={"/structure/sections/13"} element={<B13/>}/>
                <Route path={"/structure/sections/14"} element={<B14/>}/>
                <Route path={"/structure/sections/15"} element={<B15/>}/>
                <Route path={"/structure/sections/16"} element={<B16/>}/>
                <Route path={"/structure/sections/17"} element={<B17/>}/>
                <Route path={"/structure/sections/18"} element={<B18/>}/>
                <Route path={"/structure/sections/19"} element={<B19/>}/>
                <Route path={"/structure/sections/20"} element={<B20/>}/>
                <Route path={"/structure/sections/21"} element={<B21/>}/>
                <Route path={"/structure/sections/22"} element={<B22/>}/>

                {/* Bo’limlar */}
                {/* filiallar */}
                <Route path={"/structure/branches/1"} element={<F1/>}/>
                <Route path={"/structure/branches/2"} element={<F2/>}/>
                {/* filiallar */}
                {/* universitetlar*/}
                <Route path={"/u1"} element={<U1/>}/>
                <Route path={"/u2"} element={<U2/>}/>
                <Route path={"/u3"} element={<U3/>}/>
                {/* universitetlar*/}
                <Route path={"structure/faculties"}>
                    <Route index element={<Fakultetlar/>}/>
                    <Route path={":id"} element={<FakultetlarId/>}/>
                </Route>
                <Route path={"structure/kafedra"}>
                    <Route index element={<Kafedralar/>}/>
                    <Route path={":id"} element={<KafedralarId/>}/>
                </Route>
                {/* Students page */}
                <Route path={"/site-map"} element={<SiteMap/>}/>


                <Route path={"/preparation"} element={<Preparation/>}/>
                {/*<Route path={"/preparation"} element={<Test />} />*/}

                <Route path={"/students/vacancies"} element={<Vacancies/>}/>
                <Route path={"/students/schedule"} element={<Schedule/>}/>
                <Route path={"/students/edu"} element={<Edu/>}/>
                {/*<Route path={"/students/schedule"} element={<Test />} />*/}


                <Route path={"students/undergraduate"}>
                    <Route index element={<Bakalavriat/>}/>
                    <Route path={":id"} element={<BakalavriatId/>}/>
                </Route>
                <Route path={"students/undergraduate2"}>
                    <Route index element={<Bakalavriat2/>}/>
                </Route>
                <Route path={"students/undergraduate3"}>
                    <Route index element={<Bakalavriat3/>}/>
                </Route>
                <Route path={"students/undergraduate4"}>
                    <Route index element={<Bakalavriat4/>}/>
                </Route>
                <Route path={"students/undergraduate5"}>
                    <Route index element={<Bakalavriat5/>}/>
                </Route>

                <Route path={"students/judiciary"}>
                    <Route index element={<Magistratura/>}/>
                    <Route path={":id"} element={<MagistraturaId/>}/>
                </Route>
                <Route path={"students/judiciary2"}>
                    <Route index element={<Magistratura2/>}/>
                </Route>
                <Route path={"students/judiciary3"}>
                    <Route index element={<Magistratura3/>}/>
                </Route>
                <Route path={"students/judiciary4"}>
                    <Route index element={<Magistratura4/>}/>
                </Route>
                <Route path={"students/judiciary5"}>
                    <Route index element={<Magistratura5/>}/>
                </Route>

                <Route path={"students/evening"}>
                    <Route index element={<Kechki/>}/>
                    <Route path={":id"} element={<KechkiId/>}/>
                </Route>
                <Route path={"students/external"}>
                    <Route index element={<Sirtqi/>}/>
                    <Route path={":id"} element={<SirtqiId/>}/>
                </Route>
                <Route path={"students/talented"}>
                    <Route index element={<Bitiruvchilar/>}/>
                    <Route path={":id"} element={<BitiruvchilarId/>}/>
                </Route>
                <Route path={"students/exams"}>
                    <Route index element={<Imtixonlar/>}/>
                </Route>
                <Route path={"students/exams1"}>
                    <Route index element={<Imtixonlar2/>}/>
                </Route>
                <Route path={"students/exams2"}>
                    <Route index element={<Imtixonlar3/>}/>
                </Route>
                <Route path={"students/exams3"}>
                    <Route index element={<Imtixonlar4/>}/>
                </Route>

                <Route path={"students/surveys"}>
                    <Route index element={<Sorovlar/>}/>
                </Route>
                <Route path={"students/surveys1"}>
                    <Route index element={<Sorovlar1/>}/>
                </Route>
                <Route path={"students/surveys2"}>
                    <Route index element={<Sorovlar2/>}/>
                </Route>
                {/* Activity page */}
                <Route path={"/activity/chemists"}>
                    <Route index element={<Chemists/>}/>
                    <Route path={":id"} element={<CemistsId/>}/>
                </Route>

                <Route path={"activity/science"}>
                    <Route index element={<Fan/>}/>
                </Route>
                <Route path={"activity/innovation"}>
                    <Route index element={<Innovatsiya/>}/>
                </Route>
                <Route path={"activity/doctoral-studies"}>
                    <Route index element={<Doktorantura/>}/>
                </Route>
                <Route path={"activity/financial-activity"}>
                    <Route index element={<MoliyaviyFaoliat/>}/>
                </Route>
                <Route path={"activity/youth-work"}>
                    <Route index element={<Yoshlar/>}/>
                </Route>
                <Route path={"activity/cultural-education"}>
                    <Route index element={<MadaniyMarifiy/>}/>
                </Route>
                <Route path={"activity/international-cooperation"}>
                    <Route index element={<XalqaroHamkorlik/>}/>
                    <Route path={":id"} element={<QoshmaDastur/>}/>
                </Route>
                <Route path={"activity/creative-spark"}>
                    <Route index element={<CreativeSpark/>}/>
                </Route>
                <Route path={"activity/erasmus/erasmus"}>
                    <Route index element={<Erasmus/>}/>
                </Route>
                <Route path={"activity/erasmus"}>
                    <Route index element={<Ka107/>}/>
                </Route>
                <Route path={"activity/erasmus/ka107"}>
                    <Route index element={<Ka107/>}/>
                </Route>
                <Route path={"activity/erasmus/mecha-uz"}>
                    <Route index element={<MechaUz/>}/>
                </Route>
                <Route path={"activity/space-com"}>
                    <Route index element={<SpaceCom/>}/>
                </Route>

                {/* Scientific-activity page */}
                <Route path={"scientific/magazines"}>
                    <Route index element={<Texnika/>}/>
                </Route>
                <Route path={"scientific/young-techniq"}>
                    <Route index element={<YoshTexnika/>}/>
                </Route>
                <Route path={"scientific/master"}>
                    <Route index element={<MahoratDarslar/>}/>
                </Route>

                {/* Abituriyent page */}
                <Route path={"abiturient/undergraduate"}>
                    <Route index element={<BakalavriatAb/>}/>
                    <Route path={":id"} element={<BakalavriatAbId/>}/>
                </Route>
                <Route path={"abiturient/judiciary"}>
                    <Route index element={<MagistraturaAb/>}/>
                    <Route path={":id"} element={<MagistraturaAbId/>}/>
                </Route>
                <Route path={"abiturient/external-evening"}>
                    <Route index element={<SirtqiKechki/>}/>
                    <Route path={":id"} element={<SirtqiKechkiId/>}/>
                </Route>
                <Route path={"abiturient/mixed-education"}>
                    <Route index element={<QoshmaTalim/>}/>
                    <Route path={":id"} element={<QoshmaTalimId/>}/>
                </Route>
                <Route path={"abiturient/foreign-citizens"}>
                    <Route index element={<XorijiyFuqarolar/>}/>
                    <Route path={":id"} element={<XorijiyFuqarolarId/>}/>
                </Route>
                {/* Korrupsiyasiz soha page */}
                <Route path={"/corruption/1"} element={<TdtuShartnomalar/>}/>
                <Route path={"/corruption/2"} element={<XodimlarProfili/>}/>
                <Route path={"/corruption/3"} element={<IshHaqiQoidalari/>}/>
                <Route path={"/corruption/4"} element={<TalimYonalishlari/>}/>
                <Route path={"/corruption/5"} element={<MuassasaByudjeti/>}/>
                <Route path={"/corruption/6"} element={<ProfessorOqituvchilar/>}/>
                <Route path={"/corruption/7"} element={<FanDasturlari/>}/>
                <Route path={"/corruption/8"} element={<KorrupsiyagaOidHolatlar/>}/>
                <Route path={"/corruption/9"} element={<NamunaviyOraliq/>}/>
                {/*  University */}
                {routes.map(({path, element}) => {
                    return <Route path={path} element={element} key={path}/>;
                })}
            </Routes>
            <SpellingMistakeFormModal
                open={openSpellingModal}
                handleClose={() => setOpenSpellingModal(false)}
                data={spellingData}
            />
        </QueryClientProvider>
    )
}

export default App;
