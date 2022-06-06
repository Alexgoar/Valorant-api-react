import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Matchs from './components/Matchs';
import Player from './components/Player';
import Pigeon from './components/Pigeon';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';

function App() {
    return (
    <>
    <Banner />
    <Routes>
     <Route path="/" element={<Layout />}>
        <Route index element={<SearchBar/>} />
        <Route path="pigeon" element={<Pigeon/> } />
        <Route path="historique" element={<Matchs/> } />
      </Route> 
    </Routes>
    </>
    )
}

export default App