import { apiRequestFilmToGenre } from "./api"

export default async function createFilmsList(parentNode, genreId = 1) {
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