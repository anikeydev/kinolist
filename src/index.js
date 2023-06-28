import './styles/style.sass'
import './styles/loader.css'

import createSlider from './js/slider'
import createCategories from './js/createCategories'
import createFilmsList from './js/createFilmsList'

const $main = document.querySelector('.main')
const $content = document.querySelector('.main__content')

createCategories(20)

const $loader = document.createElement('span')
$loader.classList.add('loader')
$main.appendChild($loader)

document.addEventListener('click', eventHandler)
document.addEventListener('DOMContentLoaded', createMain())

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
    await createFilmsList($content, genre)
    $loader.style.display = 'none'
}