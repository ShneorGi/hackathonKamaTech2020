import { ReactSVG } from "react-svg"
import SvgLogo from "../icons/logo.svg"
import aboutLogo from "../icons/aboutLogo.svg"
import "../App.css"
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

function Onboarding2() {
  const history = useHistory()
  const user = useSelector((state) => state.user)
  const questions = useSelector((state) => state.questions)

  console.log("user", user)
  console.log("questions", questions)

  return (
    <div className="home_wrapper">
      <div
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <ReactSVG
          beforeInjection={(svg) => {
            svg.classList.add("welcome_logo_icon")
          }}
          src={SvgLogo}
        />
      </div>

      <div
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            marginTop: "30px",
            color: "white",
            fontSize: "40px",
            textAlign: "end",
            lineHeight: "101%",
          }}
        >
          מחזירים אהבה
        </div>
        <div
          style={{
            color: "white",
            fontSize: "40px",
            textAlign: "end",
            lineHeight: "101%",
          }}
        >
          לדור הקודם
        </div>
        <div
          style={{
            color: "white",
            lineHeight: "28px",
            fontSize: "22px",
            marginTop: "25px",
            textAlign: "end",
          }}
        >
          על מנת לפתוח משפחה ב עלינו לזכור ללמוד מה ההעדפות של המבוגר שלכם ומה
          יגרום לו להרגיש יותר מחובר
        </div>
        <ReactSVG
          beforeInjection={(svg) => {
            svg.classList.add("logo_body")
          }}
          src={aboutLogo}
        />
      </div>

      <div
        onClick={() => {
          history.push("/Onboarding3")
        }}
        style={{
          width: "80%",
          left: "10%",
          right: "10%",
          height: "70px",
          background: "white",
          borderRadius: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "15px",
          alignItems: "center",
          display: "flex",
          cursor: "pointer",
          position: "absolute",
          bottom: "30px",
        }}
      >
        <div
          onClick={() => {}}
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
          קח אותי לשאלון ההיכרות{" "}
        </div>
      </div>
    </div>
  )
}

export default Onboarding2
