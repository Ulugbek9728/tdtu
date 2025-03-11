import React from 'react';
import {PartnersWrapperCard} from "./OurPartnersWrapper";

function OurPartnersCard({img, url}) {
    return (
        <PartnersWrapperCard>
            <a href={url} target="_blank" rel="noreferrer">
                <img src={img} alt="our alumni" loading={"lazy"}/>
            </a>
        </PartnersWrapperCard>
    );
}

export default OurPartnersCard;