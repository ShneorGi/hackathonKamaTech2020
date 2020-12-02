import { ReactSVG } from "react-svg"
import SvgLogo from "../icons/logo.svg"
import aboutLogo from "../icons/aboutLogo.svg"
import "../App.css"

function Onboarding2() {
  return (
    <div className="home_wrapper">
      <ReactSVG
        beforeInjection={(svg) => {
          svg.classList.add("welcome_logo_icon")
        }}
        src={SvgLogo}
      />

      <div
        style={{
          marginTop: "20px",
          color: "white",
          fontSize: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        מחזירים אהבה
      </div>
      <div
        style={{
          color: "white",
          fontSize: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        לדור הקודם
      </div>
      <ReactSVG
        beforeInjection={(svg) => {
          svg.classList.add("logo_icon")
        }}
        src={aboutLogo}
      />
    </div>
  )
}

export default Onboarding2
