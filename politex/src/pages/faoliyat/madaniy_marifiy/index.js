import React, {useState} from "react";
import Layout from "@/locales/en/layout/Layout";
import CustomTitle from "@/components/custom_title";
import {MadaniyWrapper} from "./style";
import {useQuery} from "react-query";
import {getFaoliyatMadaniyat} from "@/api/general";
import {useTranslation} from "react-i18next";
import PdfContent from "@/components/ilmiy_faoliyat/pdf_content";
import Brashura from "@/components/ilmiy_faoliyat/pdf_content/brashura";

function MadaniyMarifiy() {
    const {data} = useQuery({
        queryKey: "madaniyat",
        queryFn: () => getFaoliyatMadaniyat(),
    });
    const {t} = useTranslation();

    const [BrashuraData, setBrashuraData] = useState([
        {
            name: 'ABU ALI IBN SINO',
            url: 'https://online.anyflip.com/koxwe/aprc/index.html'
        },
        {
            name: ' ABU RAYHON BERUNIY',
            url: 'https://online.anyflip.com/koxwe/exap/index.html'
        },
        {
            name: 'ABU MUIN NASAFIY',
            url: 'https://online.anyflip.com/koxwe/cqbw/index.html'
        },
        {
            name: 'AHMAD FARGʻONIY',
            url: 'https://online.anyflip.com/koxwe/bubu/index.html'
        },
        {
            name: 'ALISHER NAVOIY',
            url: 'https://online.anyflip.com/koxwe/spqd/index.html'
        },
        {
            name: 'BAHOUDDIN NAQSHBAND',
            url: 'https://online.anyflip.com/koxwe/xomg/index.html'
        },
        {
            name: 'IMOM BUXORIY',
            url: 'https://online.anyflip.com/koxwe/zsjo/index.html'
        },
        {
            name: 'IMOM MOTURIDIY',
            url: 'https://online.anyflip.com/koxwe/rtui/index.html'
        },
        {
            name: 'IMOM MOTURIDIY 2',
            url: 'https://online.anyflip.com/koxwe/wtrb/index.html'
        },
        {
            name: 'IMOM TERMIZIY',
            url: 'https://online.anyflip.com/koxwe/osqz/index.html'
        },
        {
            name: 'MIRZO ULUG`BEK',
            url: 'https://online.anyflip.com/koxwe/potf/index.html'
        },

        {
            name: 'MUHAMMAD XORAZMIY',
            url: 'https://online.anyflip.com/koxwe/mrdk/index.html'
        },



    ])
    const [BukletData, setBukletData] = useState([
        {
            name: 'Alloh g\'azablangan toifalar',
            url: 'https://online.anyflip.com/koxwe/bsgo/index.html'
        },
        {
            name: 'Ekstrimizm',
            url: 'https://online.anyflip.com/koxwe/vpyt/index.html'
        },
        {
            name: 'Internetdagi tahdidlar',
            url: 'https://online.anyflip.com/koxwe/cvob/index.html'
        },
        {
            name: 'Internetdagi tahdidlar 2',
            url: 'https://online.anyflip.com/koxwe/dxvk/mobile/index.html'
        },
        {
            name: 'Missionerlik 2',
            url: 'https://online.anyflip.com/koxwe/nuwi/mobile/index.html'
        },
        {
            name: 'Soxta Salafiylik',
            url: 'https://online.anyflip.com/koxwe/srzq/mobile/index.html'
        },
        {
            name: 'Xizbu tahrir',
            url: 'https://online.anyflip.com/koxwe/srzq/mobile/index.html'
        },
    ])
    const [BookData, setBookData] = useState([
        {
            name: 'IMOM TERMIZIY',
            url: 'https://online.anyflip.com/koxwe/siaq/mobile/index.html'
        },
        {
            name: 'HAKIM TERMIZIY',
            url: 'https://online.anyflip.com/koxwe/xjpb/mobile/index.html'
        },
        {
            name: 'Ilm-va-odob-saodat-kalitidir',
            url: 'https://online.anyflip.com/koxwe/pmkp/mobile/index.html'
        },
        {
            name: 'IMOM TERMIZIY',
            url: 'https://online.anyflip.com/koxwe/kjwa/mobile/index.html'
        },
        {
            name: 'Oilada-farzand-tarbiyasi_qayta-nashr_2019',
            url: 'https://online.anyflip.com/koxwe/gnvd/mobile/index.html'
        },
        {
            name: 'Ota-onaga-yaxshilik-va-ularning-huquqlari',
            url: 'https://online.anyflip.com/koxwe/zhtn/mobile/index.html'
        },
        {
            name: 'Yoshlarni-oilaga-tayyorlash',
            url: 'https://online.anyflip.com/koxwe/tqgh/mobile/index.html'
        },
        {
            name: 'Ziyorat-odoblari',
            url: 'https://online.anyflip.com/koxwe/zinj/mobile/index.html'
        },
        {
            name: 'INTERNET MADANIYATINING 10 QOIDASI',
            url: 'https://online.anyflip.com/koxwe/qqll/mobile/index.html'
        },
        {
            name: 'ISLOM DINIDA TINCHLIK',
            url: 'https://online.anyflip.com/koxwe/viba/mobile/index.html'
        },
        {
            name: 'SAHIHIY BUXORIY XALQCHIL SHARXLAR 2',
            url: 'https://online.anyflip.com/koxwe/zywu/mobile/index.html'
        },
        {
            name: 'SOG`LOM E`TIQOD – BARQARORLIK GAROVI 2',
            url: 'https://online.anyflip.com/koxwe/xcjm/mobile/index.html'
        },
        {
            name: 'SUNANIY DORIMIY DURDONA HADISLARI 06_08_2022',
            url: 'https://online.anyflip.com/koxwe/lrbb/mobile/index.html'
        },
    ])


    return (
        <Layout>
            <MadaniyWrapper>
                <CustomTitle
                    name={t("header.header__bottom__nav__item__menu.menu-3.item-4")}
                />
                <div className="container">
                    {data?.data?.data?.map((v, i) => (
                        <PdfContent key={v?.id} data={v}/>
                    ))}


                </div>
                <CustomTitle name={"Brashuralar"}/>
                <div className="container">
                    {
                        BrashuraData.map((v, index)=>(
                            <Brashura key={index} data={v}/>))
                    }
                </div>
                <CustomTitle name={"Bukletlar"}/>
                <div className="container">
                    {
                        BukletData.map((v, index)=>(
                            <Brashura key={index} data={v}/>))
                    }
                </div>
                <CustomTitle name={"Kitoblar"}/>
                <div className="container">
                    {
                        BookData.map((v, index)=>(
                            <Brashura key={index} data={v}/>))
                    }
                </div>


            </MadaniyWrapper>
        </Layout>
    );
}

export default MadaniyMarifiy;
