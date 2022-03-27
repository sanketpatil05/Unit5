
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './Components/Login'
import { Todos } from './Components/Todo'
import { TodoDetails } from './Components/TodoDetails'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/todos/:id" element={<TodoDetails/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
