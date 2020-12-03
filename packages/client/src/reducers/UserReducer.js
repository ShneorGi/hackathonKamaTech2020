import Axios from "axios"
import host from "./Utils"

export const SAVE_USER = "SAVE_USER"
const initialState = {
  user: { name: "sammy" },
}

export default (state = initialState, action) => {
  console.log("action", action)

  switch (action.type) {
    case SAVE_USER: {
      return {
        ...state,
        user: action.payload,
      }
    }

    default: {
      return { ...state }
    }
  }
}

export const loadUser = () => (dispatch) => {
  console.log("!!!!!!!11 load from server")
  Axios.post(host + "/users").then((response) => {
    dispatch({ type: SAVE_USER, payload: response.data })
  })
}
