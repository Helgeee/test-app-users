const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'usersData.json')

const generateUsers = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User${i + 1}`,
    surname: `Surname${i + 1}`,
    age: Math.floor(Math.random() * 60) + 18,
    email: `user${i + 1}@example.com`,
  }))
}

const initData = () => {
  if (!fs.existsSync(filePath)) {
    console.log('Генерация usersData.json...')
    fs.writeFileSync(filePath, JSON.stringify(generateUsers(1000000), null, 2))
    console.log('Файл создан.')
  } else {
    console.log('Файл уже существует.')
  }
}

module.exports = initData
