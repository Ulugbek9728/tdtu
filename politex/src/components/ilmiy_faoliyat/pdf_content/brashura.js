import React, { useState } from "react";
import { PdfContentWrapper } from "./style";

function Brashura({ data }) {
    const [hide, setHide] = useState(false);
    console.log(data)

    return (
        <PdfContentWrapper hide={hide}>
            <div className="content">
                <a href={data?.url} target={"_blank"} className="content-pdf" onClick={() => setHide(!hide)}>
                    <p>{data?.name}</p>
                </a>

            </div>
        </PdfContentWrapper>
    );
}

export default Brashura;
