import React from 'react'

import UsersList from './components/UsersList/UsersList'
import UserForm from './components/UserForm/UserForm'

import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Users</h1>
      </header>

      <main className="app-main">
        <div className="app-left-column">
          <UsersList />
        </div>
        <div>
          <UserForm />
        </div>
      </main>
    </div>
  )
}

export default App
