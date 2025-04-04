import { useEffect, useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers, selectUser } from '../../redux/actions/userActions'
import { FaUser } from 'react-icons/fa'
import './UserList.css'

const UsersList = () => {
  const users = useSelector((state) => state.user.users)
  const dispatch = useDispatch()

  const [page, setPage] = useState(1)
  const usersPerPage = 50

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const paginatedUsers = useMemo(() => {
    const startIndex = (page - 1) * usersPerPage
    return users.slice(startIndex, startIndex + usersPerPage)
  }, [users, page])

  if (!users.length) {
    return <div className="user-list">Загрузка пользователей...</div>
  }

  return (
    <div className="user-list">
      <ul>
        {paginatedUsers.map((user) => (
          <li key={user.id} onClick={() => dispatch(selectUser(user))}>
            <FaUser className="user-logo" />
            {user.id} - {user.name} {user.surname}
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Назад
        </button>
        <button
          disabled={page * usersPerPage >= users.length}
          onClick={() => setPage(page + 1)}
        >
          Вперед
        </button>
      </div>
    </div>
  )
}

export default UsersList
