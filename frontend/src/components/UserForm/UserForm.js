import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaUser } from 'react-icons/fa'
import { updateUser } from '../../redux/actions/userActions'
import './UserForm.css'

const UserForm = () => {
  const selectedUser = useSelector((state) => state.user.selectedUser)
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    age: '',
    email: '',
  })

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser)
    }
  }, [selectedUser])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.surname || !formData.email) {
      alert('Заполните все поля!')
      return
    }
    dispatch(updateUser(formData))
  }

  if (!selectedUser) return <div className="no-user">Выберите пользователя</div>

  return (
    <div className="app-main">
      <form className="user-form" onSubmit={handleSubmit}>
        <h2 className="user-logo user-header">
          <FaUser /> Редактировать пользователя {formData.id}
        </h2>

        <div className="user-input">
          <label>Имя:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="user-input">
          <label>Фамилия:</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
        </div>

        <div className="user-input">
          <label>Возраст:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div className="user-input">
          <label>Почта:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Сохранить</button>
      </form>
    </div>
  )
}

export default UserForm
