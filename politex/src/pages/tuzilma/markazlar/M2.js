import {getCenterId, imgUrl} from "@/api/general";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import CustomTitle from "@/components/custom_title";
import RektorCard from "@/components/tuzilma/RektorCard";
import Layout from "@/locales/en/layout/Layout";
import React, {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import bg from "../../../assets/markazlar/ATM.jpg"
import {t} from "i18next";
import {HodimlarWrapper} from "@/components/tuzilma/TuzilmaWrapper";
import img1 from "../../../assets/bolimlar/aliyev.jpg"
import img2 from "../../../assets/bolimlar/Abbos.jpg"
import img4 from "../../../assets/bolimlar/Dustali.jpg"
import Logoru from "@/assets/images/header/logoru.svg";
import Logouz from "@/assets/images/header/logouz.svg";
import Logoen from "@/assets/images/header/logoen.png";

const M2 = () => {
  const { data } = useQuery({
    queryKey: ["centerid", 2],
    queryFn: () => getCenterId(2),
  });
  let datas = data?.data?.data[0];
  const { t } = useTranslation();

  const [data1, setData1] = useState([

  ]);
  const [dataUZ, setDataUZ] = useState([
    {
      id:'1',
      img:img1,
      name:"Aliyev Davron Tursunmuhammad o'g'li",
      position:"Texnik qo‘llab-quvvatlash bo‘limi boshlig'i",
      phone:'+99871 207 44 45',
      email:'rttm@tdtu.uz',
    },
    {
      id:'2',
      img:img2,
      name:"Miryoqubov Mirabbos Xusanovich",
      position:"Axborot xavfsizligini ta'minlash bo'limi boshlig'i",
      phone:'+99871 207 44 45',
      email:'m.miryoqubov@tdtu.uz',
    },
    {
      id:'3',
      img:'',
      name:"Erkinov Dilmurod Doniyor o'g'li",
      position:"Tarmoqlarni boshqarish bo'limi boshlig'i",
      phone:"+99871 207 44 45",
      email:'rttm@tdtu.uz',
    },
    {
      id:'4',
      img:img4,
      name:'Avlayev Dusali Yusupovich',
      position:"Raqamli ta’lim texnalogiyalarini joriy etish bo‘limi boshlig‘i",
      phone:"+99871 207 44 45",
      email:"dust-ali@rambler.ru",
    },
  ]);
  const [dataEN, setDataEN] = useState([
    {
      id:'1',
      img:img1,
      name:"Aliyev Davron Tursunmuhammad ogli",
      position:"Head of technical support department",
      phone:'+99871 207 44 45',
      email:'rttm@tdtu.uz',
    },
    {
      id:'2',
      img:img2,
      name:"Miryoqubov Mirabbos Xusanovich",
      position:"Head of the Information Security Department",
      phone:'+99871 207 44 45',
      email:'rttm@tdtu.uz',
    },
    {
      id:'3',
      img:'',
      name:"Erkinov Dilmurod Doniyor ogli",
      position:"Head of Network Management Department",
      phone:"+99871 207 44 45",
      email:'rttm@tdtu.uz',
    },
    {
      id:'4',
      img:img4,
      name:'Avlayev Dusali Yusupovich',
      position:"Head of the department of introduction of digital educational technologies",
      phone:"+99871 207 44 45",
      email:"dust-ali@rambler.ru",
    },
  ]);
  const [dataRU, setDataRU] = useState([
    {
      id:'1',
      img:img1,
      name:"Алиев Даврон Турсунмухаммед угли",
      position:"Начальник отдела технической поддержки",
      phone:'+99871 207 44 45',
      email:'rttm@tdtu.uz',
    },
    {
      id:'2',
      img:img2,
      name:"Мирёкубов Мираббос Хусанович",
      position:"Начальник отдела информационной безопасности",
      phone:'+99871 207 44 45',
      email:'rttm@tdtu.uz',
    },
    {
      id:'3',
      img:'',
      name: "Эркинов Дилмурод Дoниёр угли",
      position:"Начальник отдела управления сетью",
      phone:"+99871 207 44 45",
      email:'rttm@tdtu.uz',
    },
    {
      id:'4',
      img:img4,
      name:'Авлаев Дусали Юсупович',
      position:"Начальник отдела внедрения цифровых образовательных технологий",
      phone:"+99871 207 44 45",
      email:"dust-ali@rambler.ru",
    },
  ]);
  
  useEffect(()=>{
    if (localStorage.getItem("i18nextLng") === "ru") {
      setData1(dataRU)
    } else if (localStorage.getItem("i18nextLng") === "uz") {
      setData1(dataUZ)
    } else {
      setData1(dataEN)
    }
  });
  
  return (
    <>
      <Layout>
        <BigFotoBack
          img={bg}
          text={t("header.header__sub__menu.menu-1.item-2")}
        />
        <CustomTitle name={t("header.header__sub__menu.menu-1.item-2")} />
        <div className="container">
          <RektorCard
            key={datas?.id}
            time={datas?.acceptance}
            degree={datas?.degree}
            position={datas?.position}
            name={datas?.directorname}
            img={datas?.director_img}
            address={datas?.email}
            phone={datas?.phone}
          />

        </div>
        <HodimlarWrapper>
          <div className="news-head">
            <div className="container">
              <p>{t("Hodimlar")}</p>
            </div>
          </div>
          <div className="container">
            <div className="card-news">
              {data1.map((v, i) => (
                  <div key={v.id} className="box-hodimlar">
                    <img
                        src={( v.img)}
                        alt=""
                    />
                    <div className="text-box">
                      <p className="bold">
                        {v.name}
                      </p>
                      <p>
                        <span className="bold">{t("person.Lavozimi")}</span> {v.position}
                      </p>
                      <p>
                        <span className="bold">{t("person.Telefon")}</span> {v.phone}
                      </p>
                      <p>
                        <span className="bold">{t("person.mail")} </span> {v.email}
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </HodimlarWrapper>
        <CustomTitle name={""} />
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: datas?.text }} />{" "}
        </div>
      </Layout>
    </>
  );
};

export default M2;
