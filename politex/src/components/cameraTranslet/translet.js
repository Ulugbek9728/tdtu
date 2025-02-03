import React from "react";
import ReactPlayer from "react-player";

export default function Translet(data) {
    const src = data.data;
    return (
            <ReactPlayer url={src} controls width='100%' height={250} />
    );
}
