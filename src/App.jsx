import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//CONTEXT
import { HookUseContext } from './context/HookUseContext'

//PAGES
import Edit from './pages/Edit'
import Home from './pages/Home'



function App() {


  return (
    <div className="App">
      <HookUseContext>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/edit' element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  )
}

export default App
