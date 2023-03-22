
import './App.css'
import { Route, Routes } from 'react-router'


const App = () => {
  return (
    <>
  <Routes>
    <Route path = '/home' element = {<MainLayout />} />
  </Routes>
    </>
  )
}

export default App;
