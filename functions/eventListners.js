const $ = document.querySelectorAll.bind(document);

export default function EventListners() {

    $(".popUp-container")[0].addEventListener('click', () => {
        $(".popUp-container")[0].classList
            .add('sumido')

        $(".popUp").forEach(item => item.classList.add('sumido'))
    })
}