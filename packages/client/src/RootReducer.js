import { combineReducers } from "redux"
import ui from "./reducers/UiReducer"
import user from "./reducers/UserReducer"

const rootReducer = combineReducers({
  ui,
  user,
})

export default rootReducer
