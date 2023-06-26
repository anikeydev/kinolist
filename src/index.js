import './styles/style.sass'
import './styles/loader.css'
import {apiRequestFilmToGenre, apiRequestGenres} from './api'

const genresArr = await apiRequestGenres()
const topGenres = genresArr.slice(0, 15)
// console.log(topGenres);


const topGenresListHtml = topGenres.map(item => {
    return `<li class="categories__item" data-id="${item.id}">${item.genre}</li>`
})

const $categories = document.querySelector('.main__categories')

for (const genreHtml of topGenresListHtml) {
    $categories.insertAdjacentHTML('beforeend', genreHtml)
}

async function createdTopListOfGenre(genreId = 1) {
    const $filmsList = document.querySelector('.filmsList')
    $filmsList.innerHTML = '<span class="loader"></span>'
    const filmsToGenreArr = await apiRequestFilmToGenre(genreId)
    setTimeout(() => {
        const topFilmsToGenre = filmsToGenreArr.items.map(item => item).slice(0, 15)
        // console.log(topFilmsToGenre)
        const topFilmsToGenreListHtml = topFilmsToGenre.map(item => {
            return `
                <li class="filmsList__film-item film-item" data-kid="${item.kinopoiskId}">
                    <img src="${item.posterUrlPreview}" class="film-item__poster" alt="${item.nameOriginal}"/>
                    <p class="film-item__name">${item.nameRu}</p>
                </li>
            `
        })
        $filmsList.innerHTML = ''
        for (const filmHtml of topFilmsToGenreListHtml) {
                $filmsList.insertAdjacentHTML('beforeend', filmHtml)
            }
    }, 1000)
}

// const $filmsList = document.querySelector('.filmsList')

// for (const filmHtml of topFilmsToGenreListHtml) {
//     $filmsList.insertAdjacentHTML('beforeend', filmHtml)
// }

function eventHandler(event) {
    event.preventDefault()
    if (event.target.dataset.id) {
        console.log(event.target.dataset.id);
        createdTopListOfGenre(event.target.dataset.id)
    }
}

document.addEventListener('click', eventHandler)
document.addEventListener('DOMContentLoaded', createdTopListOfGenre())