// const initialState = {
//   users: [],
//   selectedUser: null,
// }

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_USERS':
//       return { ...state, users: action.payload }
//     case 'SELECT_USER':
//       return { ...state, selectedUser: action.payload }
//     case 'UPDATE_USER':
//       return {
//         ...state,
//         users: state.users.map((user) =>
//           user.id === action.payload.id ? action.payload : user
//         ),
//         selectedUser: action.payload,
//       }
//     default:
//       return state
//   }
// }

// export default userReducer
import {
  FETCH_USERS_SUCCESS,
  SELECT_USER,
  UPDATE_USER,
} from '../actions/userActions'

const initialState = {
  users: [],
  selectedUser: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload }
    case SELECT_USER:
      return { ...state, selectedUser: action.payload }
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
        selectedUser: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
