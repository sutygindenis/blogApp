let title = ''

const inputTitleNode = document.querySelector ('.js-title-input')
const newPostBtnNode = document.querySelector ('.js-new-post-btn')

newPostBtnNode.addEventListener ('click', function () {
    title = inputTitleNode.value

    alert (title)
})