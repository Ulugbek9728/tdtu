import React from 'react';
import Layout from "@/locales/en/layout/Layout";
import "../../../assets/schedule/schedule.css"
import "../../../assets/tezkunda/tezKunda.css"

function Test(props) {
    return (
        <Layout>
            <div className="schedule">
                <div className="container">
                    <p className="tezKunda">Tez kunda</p>
                    <div className='bgimg'></div>
                </div>
            </div>

        </Layout>
    );
}

export default Test;