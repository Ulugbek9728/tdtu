import {getPrepartion, getCameraList} from "@/api/general";
import CustomTitle from "@/components/custom_title";
import Layout from "@/locales/en/layout/Layout";
import React, {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import {useQuery} from "react-query";
import {MoliyaviyFaoliatWrapper} from "./faoliyat/moliyaviy_faoliat/style";
import Hls from "hls.js";
import axios from "axios";
import Translet from "@/components/cameraTranslet/translet";

const Preparation = () => {
    const {t} = useTranslation();

    const {data} = useQuery({
        queryKey: "tayorlov-kursi",
        queryFn: () => getPrepartion(),
    });

    const CamerraList = useQuery({
        queryKey: "allCameraList",
        queryFn: () => getCameraList(),
    });

    console.log(CamerraList?.data?.data?.data)

    return (
        <Layout>
            <MoliyaviyFaoliatWrapper>
                <CustomTitle name={t("header.center.header-center-nav.item-3")}/>

                {/*<div style={{height:"90vh"}}*/}
                {/*     className="container"*/}
                {/*     dangerouslySetInnerHTML={{ __html: data?.data?.data?.[0].text }}*/}
                {/*/>*/}
                <div className="container">
                    <div className="row">
                        {CamerraList?.data?.data?.data?.map((item,index)=>{
                            return <div className="col-4 border rounded-3">
                                <Translet data={item?.url}/>
                                <p>{item?.name}</p>
                            </div>
                        })}

                    </div>
                </div>


                {/*<video ref={videoRef} controls autoPlay*/}
                {/*       style={{width: '60%', height: 'auto'}}/>*/}

            </MoliyaviyFaoliatWrapper>
        </Layout>
    );
};

export default Preparation;
