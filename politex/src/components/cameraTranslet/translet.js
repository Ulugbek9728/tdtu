import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function Translet(data) {
    console.log(data.data)
    const videoRef = useRef(null);
    const src = data.data;
    useEffect(() => {
        const video = videoRef.current;

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(src);
            hls.attachMedia(video);

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.play();
            });

            hls.on(Hls.Events.ERROR, (event, data) => {
                console.error("HLS.js error:", data);
            });

            return () => {
                hls.destroy();
            };
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = src;
            video.addEventListener("loadedmetadata", () => {
                video.play();
            });

            return () => {
                video.removeEventListener("loadedmetadata", () => {
                    video.play();
                });
            };
        } else {
            console.error("HLS is not supported in this browser");
        }
    }, [src]);
    return (
        <video ref={videoRef} style={{ width: "100%", height: "auto" }} controls />
    );
}
