import React from 'react';
import Layout from "@/locales/en/layout/Layout";
import {FaTelegramPlane} from "react-icons/fa";
import {t} from "i18next";


function Vacansies(props) {
    return (
        <Layout>

            <div className="container mt-5">

                <ul>
                    <li className="mb-2">
                        <a href="" style={{color:"#0088cc"}}>
                           <FaTelegramPlane className='mx-2 my-2' /> {t("telegram")}
                        </a>
                    </li>
                    <li><a href="https://drive.google.com/file/d/1g69cZyVYwAmcQIP_ib52sNyS9W8JIN0p/view?usp=sharing"
                           target='_blank'>
                        TEXNOPARK ga ishga taklif qilamiz
                    </a></li>
                    <li><a href="https://drive.google.com/file/d/1h_Ail7xEl5BtFM9B5HnOhv6Aks8gmO1C/view?usp=sharing"
                           target='_blank'>Golden Pages kompaniyasida talabalar uchun ish</a></li>
                    <li><a href="https://drive.google.com/file/d/1ZpkHCt4XO3VDGuiYIpAYtTCpaIDdojwb/view?usp=sharing"
                           target='_blank'>Приглашаем на стажеровку</a></li>
                    <li><a
                        href="https://docs.google.com/spreadsheets/d/1XFEXAEsZMNbDo6oOpxc-Xxx93zaJYLQ2/edit?usp=sharing&ouid=104441862415797304843&rtpof=true&sd=true"
                        target='_blank'>2024 yil mart oyi Vakansiya</a></li>
                    <hr/>
                    <li><a
                        href="https://docs.google.com/spreadsheets/d/1JNdsviIxf8pEryj3cUlimN9JW3WeNZ1b/edit?usp=sharing&ouid=104441862415797304843&rtpof=true&sd=true"
                        target='_blank'>2023 yil sentabr oyi Vakansiya</a></li>
                    <li><a
                        href="https://docs.google.com/spreadsheets/d/1bzcNv-0ImGcdtR27BpZ2pPI0DOOhOocc/edit?usp=sharing&ouid=104441862415797304843&rtpof=true&sd=true"
                        target='_blank'>2023 yil may oyi Vakansiya</a></li>
                    <li><a
                        href="https://docs.google.com/spreadsheets/d/1uGEGulLsCXksoG5F_04n0wDtgB2YauGUFX_T08VVl5o/edit?usp=sharing"
                        target='_blank'>2023 yil mart oyi Vakansiya</a></li>
                    <li><a
                        href="https://docs.google.com/spreadsheets/d/1nK_xbeb_bVsMZ8-hV2Ry95atMwlolnTE/edit?usp=sharing&ouid=104441862415797304843&rtpof=true&sd=true"
                        target='_blank'>2023 yil yanvar oyi Vakansiya</a></li>

                </ul>


            </div>
        </Layout>
    );
}

export default Vacansies;