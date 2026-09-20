import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './Components/Layout/Layout'

import ErrorMessage from './Components/ErrorMessage/ErrorMessage'
import Blog from './Components/Blog/Blog'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Details from './Components/Details/Details'


function App() {
  

  return (
    <>
    <BrowserRouter>

    <Routes>

      <Route path='/' element={<Layout/>}>
      <Route index element={<Hero/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog/:slug' element={<Details/>} />




      <Route path='*' element={<ErrorMessage/>}/>


      </Route>


    </Routes>



    </BrowserRouter>
    </>
  )
}

export default App
