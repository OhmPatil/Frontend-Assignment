// Tab Group Functionality
let tab_buttons = document.querySelectorAll('.tab-button')
let all_contents = document.querySelectorAll('.tab-content')
tab_buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        tab_buttons.forEach(tab => {tab.classList.remove('active-tab')})
        button.classList.add('active-tab')

        all_contents.forEach(content => {content.classList.remove('active-content')})
        all_contents[index].classList.add('active-content')
    })
})