import './App.css'
import {songsData} from './data/songsData.js'
import SongList from './components/SongList.jsx';
import Playlist from './components/Playlist.jsx';

function App() {

    return (
        <>
            <div>
                <div>
                    <h1>Awesome Playlist Implementation</h1>
                    <SongList songs={songsData}/>
                </div>
               <div>
                   <h1>Playlist</h1>
                   <Playlist playlist={{songsData}}/>
               </div>
            </div>
        </>
    )
}

export default App;
