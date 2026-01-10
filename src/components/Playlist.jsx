function Playlist({playlist, removeFromPlaylist}) {


    function highlight5StarSongs(rating) {
        const style = {};
        if (rating === 5) {
            style.backgroundColor = 'lightgreen';
        }
        return style;
    }

    function getTotalPlaylistLength(playlist) {
        let totalSeconds = 0;
        for (let i = 0; i < playlist.length; i++) {
            totalSeconds += playlist[i].duration;
        }
        const totalMinutes = Math.floor(totalSeconds / 60);
        const remainingSeconds = totalSeconds % 60;
        const displayMinutes = totalMinutes < 10 ? '0' + totalMinutes : totalMinutes;
        const displaySeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
        return displayMinutes + ":" + displaySeconds;
    }

    function getAverageRating(playlist) {
        if (playlist.length === 0) return 0;
        const totalStars = playlist.reduce((sum, song) => sum + song.rating, 0);
        return Math.round((totalStars / playlist.length) * 100) / 100;
    }




    return (
        <div>
            <div style={{"textAlign": "center"}}>
                <h2>Songs ({playlist.length})</h2>
                <ul>
                    {playlist.map((song, index) => (
                        <li key={index}>
                        <span style={highlight5StarSongs(song.rating)}>
                            {song.title} ({song.artist})  - {song.duration}
                            </span>
                            <button onClick={() => removeFromPlaylist(index)} className="btn"
                                    style={{marginLeft: '50px', marginBottom: '10px'}}>
                                Remove from Playlist
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{fontWeight: "bold"}}>
                Total duration: {getTotalPlaylistLength(playlist)} <br/>
                Average rating: {getAverageRating(playlist)}
            </div>
        </div>
    );
}

export default Playlist;