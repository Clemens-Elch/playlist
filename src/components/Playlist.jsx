
function Playlist({playlist, removeFromPlaylist}) {

    function highlight5StarSongs(rating) {
        const style = {};
        if (rating === 5) {
            style.backgroundColor = 'lightgreen';
        }
        return style;
    }

    return (
        <div style={{"textAlign": "center"}}>
            <h2>Songs ({playlist.length})</h2>
            <ul>
                {playlist.map((song, index) => (
                    <li key={index}>
                        <span style={highlight5StarSongs(song.rating)}>
                            {song.title} ({song.artist})  - {song.duration}
                            </span>
                        <button onClick={() => removeFromPlaylist(index)} className="btn" style={{marginLeft: '50px', marginBottom: '10px'}}>
                            Remove from Playlist
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Playlist;