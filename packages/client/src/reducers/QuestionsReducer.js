import Axios from "axios"
import host from "./Utils"

export const LOAD_QUESTIONS = "LOAD_QUESTIONS"
const initialState = {
  questions: {},
}

export default (state = initialState, action) => {
  console.log("action", action)

  switch (action.type) {
    case LOAD_QUESTIONS: {
      return {
        ...state,
        questions: action.payload,
      }
    }

    default: {
      return { ...state }
    }
  }
}

export const loadQuestions = () => (dispatch) => {
  Axios.get(host + "/questions/getPreQuestions").then((response) => {
    console.log(response)
    dispatch({ type: LOAD_QUESTIONS, payload: response.data })
  })
}
