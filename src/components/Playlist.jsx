
function Playlist({playlist}) {

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
                {playlist.map((song) => (
                    <li key={song.id}>
                        <span style={highlight5StarSongs(song.rating)}>
                            {song.title} ({song.artist})  - {song.duration}
                            </span>
                        <button type="submit" className="btn" style={{marginLeft: '50px', marginBottom: '10px'}}>
                            Remove to Playlist
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Playlist;