import { apiRequestGenres } from './api'

export default async function createCategories(countCategories) {
    const genresArr = await apiRequestGenres()
    const topGenres = genresArr.slice(0, countCategories)

    const $categories = document.querySelector('.categories')

    const topGenresListHtml = topGenres.map(item => {
        return `<li class="categories__item" data-id="${item.id}">${item.genre}</li>`
    })
    
    for (const genreHtml of topGenresListHtml) {
        $categories.insertAdjacentHTML('beforeend', genreHtml)
    }
}