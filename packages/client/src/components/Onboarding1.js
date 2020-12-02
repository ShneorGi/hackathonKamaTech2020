import "../App.css"
import { ReactSVG } from "react-svg"
import SvgLogo from "../icons/logo.svg"
import Clozer from "../icons/Clozer.svg"
import React from "react"
import { useHistory } from "react-router-dom"

function Onboarding1() {
  const history = useHistory()

  return (
    <div className="home_wrapper">
      {" "}
      <ReactSVG
        beforeInjection={(svg) => {
          svg.classList.add("logo_icon")
        }}
        src={SvgLogo}
      />
      <ReactSVG
        beforeInjection={(svg) => {
          svg.classList.add("logo_title")
        }}
        src={Clozer}
      />
      <div
        style={{
          color: "white",
          fontSize: "28px",
          bottom: "50px",
          justifyContent: "center",
          marginTop: "380px",
        }}
      >
        {" "}
        clozer -ברוכים הבאים ל
      </div>
      <div
        style={{
          width: "80%",
          height: "70px",
          background: "white",
          borderRadius: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "15px",
          alignItems: "center",
          display: "flex",
          cursor: "pointer",
        }}
      >
        <div
          onClick={() => {
            history.push("/Onboarding2")
          }}
          style={{
            color: "#0B204C",
            fontSize: "25px",
            justifyContent: "center",
            display: "flex",
            position: "relative",
            alignSelf: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
           הבא{" "}
        </div>
      </div>
    </div>
  )
}

export default Onboarding1
