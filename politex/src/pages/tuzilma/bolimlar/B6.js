import { getBulimId } from "@/api/general";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import CustomTitle from "@/components/custom_title";
import RektorCard from "@/components/tuzilma/RektorCard";
import Layout from "@/locales/en/layout/Layout";
import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import bg from "../../../assets/bolimlar/ilmiy.jpg"

const B6 = () => {

  useEffect(() => {
    window.location.href = "http://www.science-tstu.uz/";
  }, []);

  return (
    <>

    </>
  );
};

export default B6;
