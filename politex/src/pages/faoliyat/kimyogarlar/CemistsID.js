import React, {useEffect} from 'react';
import Layout from "@/locales/en/layout/Layout";
import dataChemists1Element from "./Info"
import {useParams} from "react-router";
import {RektorCardWrapper} from "@/components/tuzilma/TuzilmaWrapper";


function CemistsId(props) {
    const {id} = useParams();
    const filterInfo = dataChemists1Element.filter((item) => item.id === id);

    return (
        <div>
            <Layout>
                <div className="container" id={"testID"}>
                    <div className="row">
                        <RektorCardWrapper>
                            <div className="boder"></div>
                            <div className="picture">
                                <div className="boder"></div>
                                <img src={filterInfo[0].img} alt="" />
                            </div>
                            <div className="text-box">
                                <p>{filterInfo[0].name}</p>
                                <span className='mt-2' style={{textAlign:"justify"}}>{filterInfo[0].text}</span>
                            </div>
                        </RektorCardWrapper>
                    </div>
                </div>

            </Layout>
        </div>
    );
}

export default CemistsId;