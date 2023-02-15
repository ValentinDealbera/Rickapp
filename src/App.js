import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'

function App () {

  const [characters, setCharacters] = useState([])
  const navigate = useNavigate()
  const [access, setAccess] = useState(false)
  const username = 'valentindealbera01@gmail.com'
  const password = 'asdqwe123'
  
  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      console.log(access);
      setAccess(true);
      navigate('/home');
  }
    else window.alert('credenciales incorrectas')
}

const logout = () =>{
  setAccess(true)
  navigate('/login')
}

  useEffect(()=>{
    !access && navigate('/login')
  }, [access])

  const onSearch = (character) => {
    let arrId = characters.map(e => e.id)
    if (!arrId.includes(character*1)){
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          navigate('/home')
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });}
    else window.alert('Ese personaje ya esta en tu lista!')
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  const location = useLocation()
  if (location.pathname === '/login' || location.pathname === '/') {
    return (
      <div className='App' style={{ padding: '25px' }}>
      <Routes>
        <Route path='/login' element={<Form login={login} />} />
      </Routes>
    </div>
    )
  }
  return (
    <div className='App' style={{ padding: '25px' }}>
      <NavBar onSearch={onSearch} logout={logout} />
      <Routes>
        <Route path='/favorites' element={<Favorites onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App