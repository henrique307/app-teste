const $ = document.querySelector.bind(document);

export default function EventListners() {

    $(".popUp-container").addEventListener('click', () => {
        $(".popUp-container").classList
            .add('sumido')

        $(".popUp").classList
            .add('sumido')
    })
}