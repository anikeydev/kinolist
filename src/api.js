async function apiRequestGenres() {
    let response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/filters', {
    method: 'GET',
    headers: {
        'X-API-KEY': 'a4004076-26f5-4012-8371-9e8bc4d39606',
        'Content-Type': 'application/json',
    },})
    let result = await response.json()
    return result.genres
}

export default apiRequestGenres