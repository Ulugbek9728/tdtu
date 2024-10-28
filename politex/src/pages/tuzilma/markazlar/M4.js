import { getCenterId } from "@/api/general";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import CustomTitle from "@/components/custom_title";
import RektorCard from "@/components/tuzilma/RektorCard";
import Layout from "@/locales/en/layout/Layout";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

const M4 = () => {
  useEffect(() => {
    window.location.href = "https://ujicy.uz/";
  }, []);

  return (
    <></>
  );
};

export default M4;
