import { ReactSVG } from 'react-svg'
import SvgLogo from '../icons/logo.svg'
import aboutLogo from '../icons/aboutLogo.svg'
import '../App.css';
import { useHistory } from "react-router-dom"
import { useState, useEffect } from 'react';


function Onboarding3() {
    const history = useHistory()

    const [checkedArray, setCheckedArray] = useState([false, false, false])

    useEffect(() => {
    }, [checkedArray])


    return (
        <div className="home_wrapper">

            <ReactSVG
                beforeInjection={(svg) => {
                    svg.classList.add("logo_icon_scnd");
                }}
                src={SvgLogo}
            />

            <div
                className={"user_input_wrapper"}
            >
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column' }}>

                    <div style={{ marginTop: '20px', color: 'black', fontSize: '40px', textAlign: 'end', fontWeight: '500', marginTop: '50px', fontWeight: '600', lineHeight: '106%' }}> עבור מי נפתח את מעגל המשפחה</div>
                    <div style={{ color: 'white', fontSize: '40px', textAlign: 'end' }}>לדור הקודם</div>
                    <div style={{ color: 'white', fontSize: '18px', marginTop: '25px', textAlign: 'end' }}>

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label style={{ marginTop: '25px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <text style={{ color: '#162858', marginTop: 'auto', marginBottom: 'auto', display: 'flex', alignContent: 'center', fontSize: 22, alignItems: 'center', height: '30px' }}> סבא</text>
                                <input type="radio" value="option1" checked={checkedArray[0]}
                                    onClick={() => {
                                        let array = [...checkedArray];
                                        array[0] = array[0] ? false : true;
                                        array[1] = false
                                        array[2] = false
                                        setCheckedArray(array)
                                    }}
                                />
                            </label>

                            <label style={{ marginTop: '25px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <text style={{ color: '#162858', marginTop: 'auto', marginBottom: 'auto', display: 'flex', alignContent: 'center', fontSize: 22, alignItems: 'center', height: '30px' }}> סבתא</text>
                                <input type="radio" value="option1" checked={checkedArray[1]}
                                    onClick={() => {
                                        let array = [...checkedArray];
                                        array[1] = array[1] ? false : true;
                                        array[0] = false
                                        array[2] = false
                                        setCheckedArray(array)
                                    }}
                                />
                            </label>

                            <label style={{ marginTop: '25px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <text style={{ color: '#162858', marginTop: 'auto', marginBottom: 'auto', display: 'flex', alignContent: 'center', fontSize: 22, alignItems: 'center', height: '30px' }}> אחר</text>
                                <input type="radio" value="option1" checked={checkedArray[2]}
                                    onClick={() => {
                                        let array = [...checkedArray];
                                        array[2] = array[2] ? false : true;
                                        array[1] = false
                                        array[0] = false
                                        setCheckedArray(array)
                                    }}
                                />
                            </label>
                        </div>


                        {/* <div style={{ marginTop: '20px', color: 'black', fontSize: '42px', textAlign: 'end', fontWeight: '500', marginTop: '70px', fontWeight: '600' }}> העלו תמונה</div> */}

                        <div
                            onClick={() => {
                                history.push("/Onboarding4",{type:
                                            checkedArray[0] ? 'סבא' :
                                                (checkedArray[1] ? 'סבתא':'אחר')})}
                            }
                            style={{
                                width: "80%",
                                left: '10%',
                                right: '10%',
                                height: "70px",
                                background: "linear-gradient(167.88deg, #191129 9.94%, #2c2a6c 94.12%",
                                // background: '#F76940',
                                borderRadius: "10px",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: "15px",
                                alignItems: "center",
                                display: "flex",
                                cursor: "pointer",
                                position: 'absolute',
                                bottom: '30px'
                            }}
                        >
                            <div
                               
    
                                style={{
                                color: "white",
                                fontSize: "25px",
                                justifyContent: "center",
                                display: "flex",
                                position: "relative",
                                alignSelf: "center",
                                marginLeft: "auto",
                                marginRight: "auto",
                            }}
                            >
                                הבא        </div>
                    </div>


                </div></div>
        </div>

        </div >

    );
}

export default Onboarding3;
