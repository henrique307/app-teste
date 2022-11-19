import Toggle from './functions/toggle.js'
import EventListners from './functions/eventListners.js'
const $ = document.querySelector.bind(document)

EventListners()

$(".login").addEventListener('click', () => Toggle(".popUp-login"))

$(".cadastro-button").addEventListener('click', () => Toggle(".popUp-cadastro"))



// popUpContainer.addEventListener('click', (e) => {
//     popUpContainer
//         .classList
//             .add('sumido')

//     popUpMain
//         .classList
//             .add('sumido')
// })