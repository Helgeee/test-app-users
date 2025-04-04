// import usersData from '../../data/usersData.json'

// export const setUsers = (users) => ({ type: 'SET_USERS', payload: users })
// export const selectUser = (user) => ({ type: 'SELECT_USER', payload: user })
// export const updateUser = (user) => ({ type: 'UPDATE_USER', payload: user })

// export const fetchUsers = () => {
//   return async (dispatch) => {
//     try {
//       dispatch(setUsers(usersData))
//     } catch (error) {
//       console.error('Ошибка загрузки пользователей:', error)
//     }
//   }
// }

import axios from 'axios'

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const SELECT_USER = 'SELECT_USER'
export const UPDATE_USER = 'UPDATE_USER'

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/api/users')
    dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data })
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error)
  }
}

export const selectUser = (user) => ({
  type: SELECT_USER,
  payload: user,
})

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
})
