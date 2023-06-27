import { apiRequestFilmToGenre } from "./api"

let index = 1
let timer = null

const $slider = document.querySelector('.slider')

async function createSlider(genre = 1) {
    $slider.innerHTML = ''
    if (timer !== null) {
        clearTimeout(timer)
    }
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
            <div href="${item.link}" class="slider__item">
                <a href="${item.link}" class="slider__link" target="_blank">
                    <img class="slider__img" src="${item.img}" alt="${item.name}"}>
                </a>
            </div>
        `
    })

    for (const $slide of $slides) {
        $slider.insertAdjacentHTML('beforeend', $slide)
    }

    showSlider(index)
}

function showSlider(i) {
    const $slides = document.querySelectorAll('.slider__item')

    for (const $slide of $slides) {
        $slide.style.display = 'none'
    }

    $slides[i - 1].style.display = 'block'

    timer = setTimeout(() => {
        if (index < $slides.length) {
            index += 1
            showSlider(index)
        } else {
            index = 1
            showSlider(index)
        }
    }, 4000)
}

export default createSlider
