import React from "react";
import { AbCardWrapper } from "./style";
import { ButtonHeigthWrapper } from "@/assets/styles/constClass";
import { imgUrl } from "@/api/general";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AbituriyentCard({ data }) {
  const { t } = useTranslation();


  return (
    <AbCardWrapper>
      <div className="container">
        {data?.map((v, i) => (
          <div key={i} className={"card-item"}>
            <div className={"left-item"}>
              <div className={"top-item"}>
                <p>{v?.subtext}</p>
              </div>
              <div className={"bottom-item"}>
                <Link to={`${v.id}`}>
                  <ButtonHeigthWrapper>{t("batafsil")}</ButtonHeigthWrapper>
                </Link>
              </div>
            </div>
            <div className={"right-item"}>
              <div></div>
              <img src={imgUrl + v?.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </AbCardWrapper>
  );
}

export default AbituriyentCard;
