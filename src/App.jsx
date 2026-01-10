import './App.css'
import {useState} from 'react';
import {songsData} from './data/songsData.js'
import SongList from './components/SongList.jsx';
import Playlist from './components/Playlist.jsx';

function App() {

    const [playlist, setPlaylist] = useState([]);

    function addToPlaylist(song) {
        console.log("Adding to playlist:", song);
        setPlaylist([...playlist, song]);
    }

    function removeFromPlaylist(removeSongIndex) {
        console.log("Removing from playlist:", removeSongIndex);
        setPlaylist((prev) =>
        prev.filter((_,index) => index !== removeSongIndex));
    }


    return (
        <>
            <div>
                <div>
                    <h1>Awesome Playlist Implementation</h1>
                    <SongList songs={songsData} addToPlaylist={addToPlaylist} />
                </div>
               <div>
                   <h1>Playlist</h1>
                   <Playlist playlist={playlist} removeFromPlaylist={removeFromPlaylist} />
               </div>
            </div>
        </>
    )
}

export default App;
