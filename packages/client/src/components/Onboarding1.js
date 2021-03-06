import "../App.css"
import { ReactSVG } from "react-svg"
import SvgLogo from "../icons/logo.svg"
import Hugs from "../icons/Hugs.svg"
import React from "react"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { loadUser } from "../reducers/UserReducer"
import { loadQuestions } from "../reducers/QuestionsReducer"

function Onboarding1() {
  const history = useHistory()

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  console.log("user", user)

  return (
    <div className="home_wrapper">
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
        src={Hugs}
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
        Hugs -ברוכים הבאים ל
      </div>
      <div
        style={{
          width: "80%",
          left: "10%",
          right: "10%",
          height: "70px",
          background: "white",
          borderRadius: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          // marginTop: "15px",
          alignItems: "center",
          display: "flex",
          cursor: "pointer",
          position: "absolute",
          bottom: "30px",
        }}
      >
        <div
          onClick={() => {
            dispatch(loadUser())
            dispatch(loadQuestions())
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
