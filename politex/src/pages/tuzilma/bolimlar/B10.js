import { getBulimId } from "@/api/general";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import CustomTitle from "@/components/custom_title";
import RektorCard from "@/components/tuzilma/RektorCard";
import Layout from "@/layout/Layout";
import React from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import bg from "@/assets/bolimlar/TalimSifati.jpg";

const B10 = () => {
    const { data } = useQuery({
        queryKey: ["bulim", 20],
        queryFn: () => getBulimId(20),
    });
    let datas = data?.data?.data[0];
    const { t } = useTranslation();

    return (
        <>
            <Layout>
                <BigFotoBack
                    img={bg}
                    text={t("header.header__sub__menu.menu-2.item-10")}
                />

                <CustomTitle name={t("header.header__sub__menu.menu-2.item-10")} />
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
                <CustomTitle name={""} />
                <div className="container">
                    <div dangerouslySetInnerHTML={{ __html: datas?.text }} />
                </div>
            </Layout>
        </>
    );
};

export default B10;
