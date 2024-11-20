import React from 'react';
import Layout from "@/locales/en/layout/Layout";
import dataChemists1Element from "./Info"
import {useParams} from "react-router";
import {ChemistsStyle} from "./stayle";

function CemistsId(props) {
    const {id} = useParams();
    const filterInfo = dataChemists1Element.filter((item) => item.id === id);

    return (
        <div>
            <Layout>
                <ChemistsStyle>


                <div className="container">
                    <div className="box">
                        <img className='image' src={filterInfo[0].img} alt=""/>
                        <div className="text" dangerouslySetInnerHTML={{__html: filterInfo[0].text}}/>
                    </div>
                </div>
                </ChemistsStyle>

            </Layout>
        </div>
    );
}

export default CemistsId;