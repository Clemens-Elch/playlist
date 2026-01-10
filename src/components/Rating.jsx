function Rating({ rating }) {
    const stars = [];

    for (let i = 1; i <= rating; i++) {
        stars.push(
            <span key={i}>★</span>
        );
    }

    return <span>{stars}</span>;
}

export default Rating;
