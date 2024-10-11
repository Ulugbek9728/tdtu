import {getInstance} from "@/utils/httpClient";

const sendSpellingMistake = (data) => {
    getInstance()
        .post(
            'https://api-wifi.tdtu.uz/api/tdtu/mistake-url',
            data
        )
        .then(res => {
            console.log(res)
        });
}

export default sendSpellingMistake;