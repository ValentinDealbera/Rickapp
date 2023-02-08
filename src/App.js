import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar'
import { useState } from 'react'

function App () {

  const [characters, setCharacters] = useState([])

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  return (
    <div className='App Bg' style={{ padding: '25px' }}>
      <NavBar onSearch={onSearch} />
      <div>
        <Cards characters={characters} onClose={onClose}/>
      </div>
    </div>
  )
}

export default App