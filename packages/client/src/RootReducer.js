import { combineReducers } from "redux"
import ui from "./reducers/UiReducer"
import user from "./reducers/UserReducer"
import questions from "./reducers/QuestionsReducer"

const rootReducer = combineReducers({
  ui,
  user,
  questions,
})

export default rootReducer
