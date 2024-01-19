import React from 'react';
import Layout from "@/locales/en/layout/Layout";

function Edu(props) {
    return (
        <Layout>
            <div className="container" style={{marginTop: 100}}>
                <iframe width="100%" height="600" src="https://www.youtube.com/embed/B9moZaHLUr8"
                        title="Kredit-modul tizimida qayta o&#39;qish uchun kontrakt.edu.uz da shartnoma olish bo&#39;yicha yo&#39;riqnoma"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>

        </Layout>
    );
}

export default Edu;