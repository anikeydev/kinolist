async function apiRequestGenres() {
    let response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/filters', {
    method: 'GET',
    headers: {
        'X-API-KEY': 'b29c9d52-3c46-4b93-89a5-c01de9cbb0b6',
        'Content-Type': 'application/json'
    }})
    let result = await response.json()
    return result.genres
}

async function apiRequestFilmToGenre(genre = 1) {
    let response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=${genre}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`, {
    method: 'GET',
    headers: {
        'X-API-KEY': 'b29c9d52-3c46-4b93-89a5-c01de9cbb0b6',
        'Content-Type': 'application/json'
    }})
    let result = await response.json()
    return result
}

export {
    apiRequestFilmToGenre,
    apiRequestGenres
}