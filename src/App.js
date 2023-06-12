
import TodoDisplay from './Componets/Todos/TodoDisplay'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Componets/pages/Login'


const App = () => {
  
  return (
    <BrowserRouter >
    <Routes>
      <Route  path="/" element={ <TodoDisplay />}/>
      <Route  path="/login" element={<Login/>} />
    </Routes>
      

    
    </BrowserRouter>
  )
}

export default App
