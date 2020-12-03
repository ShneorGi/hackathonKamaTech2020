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
  dispatch({ type: SAVE_USER, payload: { name: "leah" } })
}
