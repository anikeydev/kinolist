import { apiRequestFilmToGenre } from "./api"

let index = 1

async function createSlider(genre = 1) {
    const filmsToGenre = await apiRequestFilmToGenre(genre)
    const topFilms = filmsToGenre.items.slice(0, 5)
    const imageArr = topFilms.map(item => {
        return {
            name: item.nameRu,
            img: item.posterUrl,
            link: `https://www.kinopoisk.ru/film/${item.kinopoiskId}/`
        }
    })

    const $slides = imageArr.map(item => {
        return `
            <div class="slider__item">
                <a href="${item.link}" class="slider__link">
                    <img class="slider__img" src="${item.img}" alt="${item.name}"}>
                </a>
            </div>
        `
    })

    for (const $slide of $slides) {
        $slide.style.display = 'none'
    }

    return $slides
}



export default createSlider
