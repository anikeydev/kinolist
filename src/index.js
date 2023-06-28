import './styles/style.sass'
import './styles/loader.css'
import {apiRequestFilmToGenre, apiRequestGenres} from './api'
import createSlider from './slider'

const genresArr = await apiRequestGenres()
const topGenres = genresArr.slice(0, 20)

const $main = document.querySelector('.main')
const $content = document.querySelector('.main__content')

const topGenresListHtml = topGenres.map(item => {
    return `<li class="categories__item" data-id="${item.id}">${item.genre}</li>`
})

const $categories = document.querySelector('.categories')

for (const genreHtml of topGenresListHtml) {
    $categories.insertAdjacentHTML('beforeend', genreHtml)
}

async function createdTopListOfGenre(parentNode, genreId = 1) {
    const $filmsList = document.createElement('div')
    $filmsList.classList.add('filmsList')
    $filmsList.classList.add('main__filmsList')
    const filmsToGenreArr = await apiRequestFilmToGenre(genreId)
    const topFilmsToGenre = filmsToGenreArr.items.map(item => item).slice(5, 20)
    const topFilmsToGenreListHtml = topFilmsToGenre.map(item => {
        return `
            <li class="filmsList__film-item film-item" data-kid="${item.kinopoiskId}">
                <a href="https://www.kinopoisk.ru/film/${item.kinopoiskId}" class="film-item__link" target="_blank">
                    <img src="${item.posterUrlPreview}" class="film-item__poster" alt="${item.nameOriginal}"/>
                </a>
                <p class="film-item__name">${item.nameRu}</p>
            </li>
        `
    })
    for (const filmHtml of topFilmsToGenreListHtml) {
            $filmsList.insertAdjacentHTML('beforeend', filmHtml)
        }

    parentNode.appendChild($filmsList)
}

const $loader = document.createElement('span')
$loader.classList.add('loader')
$main.appendChild($loader)

function eventHandler(event) {
    if (event.target.dataset.id) {
        event.preventDefault()
        createMain(event.target.dataset.id)
    }
}

async function createMain(genre) {
    $content.innerHTML = ''
    $loader.style.display = 'block'
    await createSlider($content, genre)
    await createdTopListOfGenre($content, genre)
    $loader.style.display = 'none'
}

document.addEventListener('click', eventHandler)
document.addEventListener('DOMContentLoaded', createMain())