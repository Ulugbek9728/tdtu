import React from 'react';
import Layout from "@/locales/en/layout/Layout";
import {Nav} from 'rsuite';
import "../../../assets/schedule/schedule.css"

const Navbar = ({active, onSelect, ...props}) => {
    return (
        <Nav {...props} activeKey={active} onSelect={onSelect} style={{marginBottom: 50}}>
            <Nav.Item eventKey="news">Joriy Hafta</Nav.Item>
            <Nav.Item eventKey="solutions">Keyingi Hafta</Nav.Item>
        </Nav>
    );
};

function Schedule(props) {
    const [active, setActive] = React.useState('news');
    const [schedule, setShedule] = React.useState([]);

    return (
        <Layout>
            <div className="mt-5">
                <div className="container">
                    <Navbar appearance="tabs" active={active} onSelect={setActive}/>
                    <table className="table table-bordered">
                        <tbody>
                        <tr className='bg-primary'>
                            <td rowSpan='2'>Dushanba</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Seshanba</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>Chorshanba</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                            <td>july@example.com</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}

export default Schedule;