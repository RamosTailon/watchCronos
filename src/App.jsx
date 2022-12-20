import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Edit from './pages/Edit'
import Home from './pages/Home'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
