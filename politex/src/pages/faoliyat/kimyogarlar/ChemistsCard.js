import React from "react";
import { useNavigate } from "react-router-dom";
import { RektorCardWrapper } from "@/components/tuzilma/TuzilmaWrapper";

function getTexFromHtml(str) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return doc.body.textContent.trim()
}
const ChemistsCard = ({img, name,text, id}) => {
    let navigate = useNavigate();
    let Alltext = getTexFromHtml(text).slice(0,500);

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
                <div className='mt-2' style={{textAlign:"justify"}}>{Alltext} ...</div>
            </div>
        </RektorCardWrapper>
    );
};

export default ChemistsCard;
