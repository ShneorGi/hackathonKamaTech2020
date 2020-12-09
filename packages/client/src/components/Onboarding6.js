import { ReactSVG } from 'react-svg'
import phone from '../icons/phone.svg'
import close from '../icons/close.svg'
import service from '../icons/service.svg'
import out from '../icons/out.svg'
import plus from '../icons/plus.svg'

import '../App.css';
import { useHistory } from "react-router-dom"
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import ScrollMenu from 'react-horizontal-scrolling-menu';

const hugs = [
    {
        name: 'ביקור עם הילדים',
        type: 1
    },
    {
        name: 'להרים טלפון לפני שבת',
        type: 2
    }
    ,
    {
        name: 'לצאת לבית קפה',
        type: 4
    },
    {
        name: 'לעשות קניות',
        type: 3
    },
    {
        name: 'לשלוח תמונה של הילדים',
        type: 1
    }
]
function Onboarding6(props) {
    const history = useHistory()
    const location = useLocation();
    const [checkedArray, setCheckedArray] = useState([false, false, false])
    const getColor = (type) => {
        if (type == 1)
            return '#1FD0DE'

        if (type == 2)
            return '#5D5AA6'

        if (type == 3)
            return '#8462AA'

        if (type == 4)
            return '#F76940'
    }

    return (
        <div className="home_wrapper">

            <div style={{ paddingTop: '30px', color: 'white', fontSize: '28px', paddingTop: '70px', textAlign: 'end', fontWeight: '500', fontWeight: '600', lineHeight: '101%', justifyContent: 'center', display: 'flex' }}>הוספת חיבוק חדש</div>

            <div style={{ background: 'white', height: '60px', borderRadius: '10px', width: '90%', display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '25%', background: '#1FD0DE', height: '100%', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
                    <ReactSVG
                        beforeInjection={(svg) => {
                            svg.classList.add("new_hug_icons");
                        }}
                        src={phone}
                    />
                </div>
                <div style={{ width: '25%', background: '#5D5AA6', height: '100%' }}>
                    <ReactSVG
                        beforeInjection={(svg) => {
                            svg.classList.add("new_hug_icons");
                        }}
                        src={service}
                    />
                </div>
                <div style={{ width: '25%', background: '#8462AA', height: '100%' }}>
                    <ReactSVG
                        beforeInjection={(svg) => {
                            svg.classList.add("new_hug_icons");
                        }}
                        src={out}
                    />
                </div>
                <div style={{ width: '25%', background: '#F76940', height: '100%', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}>
                    <ReactSVG
                        beforeInjection={(svg) => {
                            svg.classList.add("new_hug_icons");
                        }}
                        src={close}
                    />
                </div>
            </div>


            <div className={"user_input_wrapper_home2"}           >

                <div style={{ marginTop: '50px' }}>
                    {hugs.map((item, index) => {
                        return <>
                            <div
                                onClick={() => {
                                    history.push("/Onboarding7")

                                }}
                                style={{ background: '', display: 'flex', flexDirection: 'row', marginTop: '3px', marginTop: '20px', width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>

                                <div style={{ width: '15%' }}>
                                    <ReactSVG
                                        beforeInjection={(svg) => {
                                            svg.classList.add("new_hug_icon_plus");
                                        }}
                                        src={plus}
                                    />
                                </div>


                                <div style={{ backgroundColor: '', width: '75%', height: '50px', }}>

                                    <text style={{ color: getColor(item.type), fontSize: '22px', fontWeight: '500', margnLeft: 'auto', display: 'flex', justifyContent: 'flex-end', marginRight: '15px', height: '100%', alignItems: 'center' }}>{item.name}</text>

                                </div>

                                <div style={{
                                    width: '5px', height: '30px', borderRadius: '3px', backgroundColor: getColor(item.type), marginTop: 'auto',
                                    marginBottom: 'auto',
                                }}>

                                </div>



                            </div>
                            <div style={{ marginBottom: '3px', height: '2px', background: '#0B204C', opacity: '0.1', width: '100%', marginTop: '10px' }}>33</div>
                        </>

                    })}

                    <div className="newHugFromUser">
                       
                        <text style={{ color: '#2c2a6c', fontSize: '20px', fontWeight: '500', fontWeight: '600', justifyContent: 'center', display: 'flex', alignItems: 'center', alignContent: 'center', marginTop: '15px' }}>צור חיבוק משלך</text>
                    </div>

                </div>
            </div>

        </div >

    );
}

export default Onboarding6;
