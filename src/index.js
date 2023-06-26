import './styles/style.sass'
import {apiRequestFilmToGenre, apiRequestGenres} from './api'

const genresArr = await apiRequestGenres()
const topGenres = genresArr.slice(0, 10)
// console.log(topGenres);


const topGenresListHtml = topGenres.map(item => {
    return `<li class="categories__item" data-id="${item.id}">${item.genre}</li>`
})

const $categories = document.querySelector('.main__categories')

for (const genreHtml of topGenresListHtml) {
    $categories.insertAdjacentHTML('beforeend', genreHtml)
}

const filmsToGenreArr =  await apiRequestFilmToGenre()
const topFilmsToGenre = filmsToGenreArr.items.map(item => item).slice(0, 10)
console.log(topFilmsToGenre)
const topFilmsToGenreListHtml = topFilmsToGenre.map(item => {
    return `
        <li class="filmsList__film-item film-item" data-kid="${item.kinopoiskId}">
            <img src="${item.posterUrlPreview}" class="film-item__poster" alt="${item.nameOriginal}"/>
            <p class="film-item__name">${item.nameRu}</p>
        </li>
    `
})

const $filmsList = document.querySelector('.filmsList')

for (const filmHtml of topFilmsToGenreListHtml) {
    $filmsList.insertAdjacentHTML('beforeend', filmHtml)
}