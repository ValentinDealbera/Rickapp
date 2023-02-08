import './App.css'
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import characters, { Rick } from './data.js'
import NavBar from './components/NavBar/NavBar'

function App () {
  return (
    <div className='App Bg' style={{ padding: '25px' }}>
      <NavBar />
      <div className='Card'>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <div>
        <Cards
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
