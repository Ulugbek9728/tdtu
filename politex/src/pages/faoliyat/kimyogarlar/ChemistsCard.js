import React from "react";
import { useNavigate } from "react-router-dom";
import { RektorCardWrapper } from "@/components/tuzilma/TuzilmaWrapper";


const ChemistsCard = ({img, name,text, id}) => {
    let navigate = useNavigate();

    const toLink = () => {
         navigate(id);
         window.location.reload()
    };
    return (
        <RektorCardWrapper onClick={() => toLink()}>
            <div className="boder"></div>
            <div className="picture">
                <div className="boder"></div>
                <img src={img} alt="" />
            </div>
            <div className="text-box">
                <p>{name}</p>
                <span className='mt-2' style={{textAlign:"justify"}}>{text.slice(0,515)} ...</span>
            </div>
        </RektorCardWrapper>
    );
};

export default ChemistsCard;
