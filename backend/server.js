const express = require('express')
const cors = require('cors')
const path = require('path')
const initUsers = require('./initUsers') // подключение генератора

const app = express()
const PORT = 5000

// Разрешаем CORS
app.use(cors())

// Инициализация файла usersData.json при первом запуске
initUsers()

// Маршрут для отдачи usersData.json
app.get('/api/users', (req, res) => {
  const filePath = path.join(__dirname, 'usersData.json')
  res.sendFile(filePath)
})

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`)
})
