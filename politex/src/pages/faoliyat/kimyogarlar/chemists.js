import React, {useState} from 'react';
import CustomTitle from "@/components/custom_title";
import Layout from "@/locales/en/layout/Layout";
import BigFotoBack from "@/components/bigFotoBack/BigFotoBack";
import bg from "./img/chemical.jpg";
import ChemistsCard from "@/pages/faoliyat/kimyogarlar/ChemistsCard";

import dataChemists1Element from "./Info"

function Chemists(props) {

    return (
        <Layout>
            <BigFotoBack
                img={bg}
                text={"Kimyogar olimlar"}
            />
            <CustomTitle name={"Kimyogar olimlar"}/>
            <div className="container">
                <div className="row">
                    {dataChemists1Element.map((item,index)=>(
                            <ChemistsCard
                                key={index}
                                text={item?.text}
                                name={item?.fullName}
                                img={item?.img}
                                id={item?.id}
                            />
                        ))
                    }

                </div>

            </div>
        </Layout>
    );
}

export default Chemists;