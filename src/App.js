import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner'
import Matchs from './components/Matchs'
import Player from './components/Player'
import Ranks from './components/Ranks'
import Pigeon from './components/Pigeon'

function App() {
    return (
    <>
      <Banner />
      <Player/>
      <Matchs />
      <Ranks />
      <Pigeon/>
    </>
    )
}

export default App