import { ReactSVG } from 'react-svg'
import SvgLogo from '../icons/logo.svg'
import SvgHome from '../icons/home.svg'
import SvgClock from '../icons/clock.svg'

import '../App.css';
import { useHistory } from "react-router-dom"
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import ScrollMenu from 'react-horizontal-scrolling-menu';

const codesNames = ['', 'שיחת טלפון', 'יציאה לגינה', 'משלוח פרחים', 'ביקור עם הילדים', 'קניות', 'שיחת ווידיאו']
function Onboarding5(props) {
    const history = useHistory()
    const location = useLocation();
    const [checkedArray, setCheckedArray] = useState([false, false, false])
    const list = [
        { name: 'item1', date: '10.12.2020', codes: [1, 2, 3, 4] },
        { name: 'item2', date: '11.12.2020', codes: [3, 3, 5, 6] },
        { name: 'item3', date: '10.03.2020', codes: [1, 6, 3, 4] },
        { name: 'item4', date: '17.12.2020', codes: [5, 2, 3, 4] },
        { name: 'item5', date: '15.12.2020', codes: [1, 2, 3, 4] },
        { name: 'item6', date: '10.12.2020', codes: [1, 2, 3, 4] },
        { name: 'item7', date: '16.12.2020', codes: [1, 2, 3, 4] },
        { name: 'item8', date: '10.12.2020', codes: [1, 2, 3, 4] },
        { name: 'item9', date: '10.12.2020', codes: [1, 2, 3, 4] },
    ];

    const hugTaskIcon = (index) => {
        let color;
        if (index == 0)
            color = '#1FD0DE'
        if (index == 1)
            color = '#8462AA'
        if (index == 2)
            color = '#F76940'
        if (index == 3)
            color = '#F76940'

        return color;
    }

    const MenuItem = ({ text, date, codes, selected }) => {
        return <div
            className={"item_wrapper"}
            style={{
                height: '200px',
                width: '300px',
                background: '#F5F6F8',
                borderRadius: '15px',
                marginLeft: '8px',
                marginRight: '8px',
                outlineWidth: 0,
                border: 'none'
            }}
        // className={`menu-item ${selected ? 'active' : ''}`}
        >
            <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', height: '100%', background: '' }}>
                <div style={{ height: '25%', width: '100%', background: '' }}>
                    <text style={{ color: '#0B204C', fontSize: '22px', fontWeight: '500', marginLeft: 'auto', display: 'flex', justifyContent: 'flex-end', paddingTop: '10%' }}>{date}</text>
                </div>
                <div style={{ marginBottom: '3px', height: '2px', background: '#0B204C', opacity: '0.1', width: '100%' }}></div>
                <br></br>
                {codes.map((item, index) => {
                    return <div style={{ display: 'flex', flexDirection: 'row', marginTop: '3px' }}>
                        <div style={{ background: '', height: '25px', width: '100%', fontSize: '18px', alignContent: 'flex-end', color: '#2A2042', textAlign: 'end', backgroundColor: '', marginRight: '5px', marginTop: '2px' }}>

                            <text style={{ background: '' }}>{codesNames[item]}</text>
                        </div>
                        <div style={{ width: '9px', height: '22px', borderRadius: '3px', backgroundColor: hugTaskIcon(index) }}></div>

                    </div>
                })}
            </div>
        </div>;
    };

    const Menu = (list, selected) =>
        list.map(el => {

            return <MenuItem text={el.name} key={el.name} date={el.date} codes={el.codes} selected={el.selected} />;
        });

    const Arrow = ({ text, className }) => {
        return (
            <div
                className={className}
            >{text}</div>
        );
    };


    const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
    const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
    const selected = 'item1';
    let menuItems = Menu(list, selected);
    const menu = menuItems;


    let value;
    if (location.state.type == 'סבתא')
        value = 'מעדיפה'
    else
        value = 'מעדיף'

    useEffect(() => {
    }, [checkedArray])

    return (
        <div className="home_wrapper">
            <div style={{ paddingTop: '30px', color: 'white', fontSize: '25px', textAlign: 'end', fontWeight: '500', fontWeight: '600', lineHeight: '101%', justifyContent: 'center', display: 'flex' }}>?כמה חיבוקים שלחתם ל{location.state.type}</div>
            <ReactSVG
                beforeInjection={(svg) => {
                    svg.classList.add("home_logo");
                }}
                src={SvgHome}
            />

            <div
                className={"user_input_wrapper_home"}
            >
                <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', background: '', height: '233px', marginTop: '70px' }}>


                    <ScrollMenu
                        data={menu}
                    />

                    <div style={{ paddingTop: '30px', color: '#0B204C', fontSize: '25px', textAlign: 'end', fontWeight: '500', fontWeight: '600', lineHeight: '101%', justifyContent: 'center', display: 'flex' }}>החיבוקים שלי</div>

                    <div style={{ height: '2px', background: '#0B204C', opacity: 0.1, width: '100%' }}> </div>

                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '3px', marginTop:'20px', width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <div style={{ backgroundColor: '', width: '95%',height:'70px', }}>

                            <text style={{ color: '#F76940', fontSize: '22px', fontWeight: '500', margnLeft: 'auto', display: 'flex', justifyContent: 'flex-end', marginRight: '15px', height: '50%', alignItems: 'center' }}>ביקור עם הילדים</text>
                            <div style={{ alignItems: 'center', background: '', marginRight: '15px', flexDirection: 'row', height: '50%', display: 'flex' }}>
                                <div style={{ width: '25%', background: '' }}>
                                    <div style={{ fontSize: '20px', color: '#B2BAC9', textAlign: 'end', justifyContent: 'center', display: 'flex' }}>יום א</div>
                                </div>
                                <div style={{ width: '25%', background: '' }}>
                                    <div style={{ fontSize: '20px', color: '#B2BAC9', textAlign: 'end', justifyContent: 'center', display: 'flex' }}>15/08'</div>
                                </div>
                                <div style={{ width: '35%', background: '' }}>
                                    <div style={{ fontSize: '20px', color: '#B2BAC9', textAlign: 'end', justifyContent: 'center', display: 'flex', }}>17:00 - 18:00</div>
                                </div>

                                <div style={{ width: '15%',textAlign:'right' }}>
                                    <ReactSVG
                                        beforeInjection={(svg) => {
                                            // svg.classList.add("home_logo");
                                        }}
                                        src={SvgClock}
                                    />
                                </div>
                            </div>
                        </div>

                        <div style={{ width: '7px', height: '70px', borderRadius: '3px', backgroundColor: '#F76940' }}>

                        </div>
                    </div>


                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '3px', marginTop:'20px', width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <div style={{ backgroundColor: '', width: '95%',height:'70px', }}>

                            <text style={{ color: '#8462AA', fontSize: '22px', fontWeight: '500', margnLeft: 'auto', display: 'flex', justifyContent: 'flex-end', marginRight: '15px', height: '50%', alignItems: 'center' }}>משלוח פרחים</text>
                            <div style={{ alignItems: 'center', background: '', marginRight: '15px', flexDirection: 'row', height: '50%', display: 'flex' }}>
                                <div style={{ width: '25%', background: '' }}>
                                    <div style={{ fontSize: '20px', color: '#B2BAC9', textAlign: 'end', justifyContent: 'center', display: 'flex' }}>יום ג</div>
                                </div>
                                <div style={{ width: '25%', background: '' }}>
                                    <div style={{ fontSize: '20px', color: '#B2BAC9', textAlign: 'end', justifyContent: 'center', display: 'flex' }}>17/08</div>
                                </div>
                                <div style={{ width: '35%', background: '' }}>
                                    <div style={{ fontSize: '20px', color: '#B2BAC9', textAlign: 'end', justifyContent: 'center', display: 'flex', }}>13:00 - 15:00</div>
                                </div>

                                <div style={{ width: '15%',textAlign:'right' }}>
                                    <ReactSVG
                                        beforeInjection={(svg) => {
                                            // svg.classList.add("home_logo");
                                        }}
                                        src={SvgClock}
                                    />
                                </div>
                            </div>
                        </div>

                        <div style={{ width: '7px', height: '70px', borderRadius: '3px', backgroundColor: '#8462AA' }}>

                        </div>
                    </div>


                </div>


            </div>

        </div >

    );
}

export default Onboarding5;
