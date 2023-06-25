import './styles/style.sass'
import apiRequestGenres from './api'

const genresArr = await apiRequestGenres()
const genresList = genresArr.map(item => {
    return item.genre
}).slice(0, 15)


const genresListHtml = genresList.map(item => {
    return `<li class="categories__item">${item}</li>`
})

const $categories = document.querySelector('.main__categories')

for (const genreHtml of genresListHtml) {
    $categories.insertAdjacentHTML('beforeend', genreHtml)
}