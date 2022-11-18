const $ = document.querySelector.bind(document);

export default function Toggle(popUp) {
    $(popUp).classList
        .remove('sumido')

    $(".popUp-container").classList
        .remove('sumido')
}