
function SongList({songs, addToPlaylist}) {

    function highlight5StarSongs(rating) {
        const style = {};
        if (rating === 5) {
            style.backgroundColor = 'lightgreen';
        }
        return style;
    }

    return (
        <div style={{"textAlign": "center"}}>
            <h2>Songs ({songs.length})</h2>
            <ul>
                {songs.map((song) => (
                    <li key={song.id}>
                        <span style={highlight5StarSongs(song.rating)}>
                            {song.title} ({song.artist})  - {song.duration}
                            </span>
                        <button onClick={()=> addToPlaylist(song)} className="btn" style={{marginLeft: '50px', marginBottom: '10px'}}>
                            Add to Playlist
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SongList;