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
        type: 3
    },
    {
        name: 'לעשות קניות',
        type: 4
    },
    {
        name: 'לשלוח תמונה של הילדים',
        type: 1
    },
    {
        name: 'לקחת לרופא',
        type: 3
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

          
        </div >

    );
}

export default Onboarding6;
