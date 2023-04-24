document.addEventListener('DOMContentLoaded', () => {
    var sliderShow = document.querySelectorAll('.slider-show')
    function scrollTo(element) {
        element = document.getElementById(element)
        window.scroll({
            behavior: "smooth",
            left: 0,
            top: element.offsetTop - 100
        })
    }

    sliderShow.forEach( sliderShow => {
        sliderShow.addEventListener('click', e => {
            let attributeSlider = e.target.closest('.slider-show').getAttribute('data-id');
            scrollTo(attributeSlider);
        })
    })
})

document.addEventListener('DOMContentLoaded', () => {
    var ret = document.querySelectorAll('.button-return')
    function scrollTo(element) {
        element = document.getElementById(element)
        window.scroll({
            behavior: "smooth",
            left: 0,
            top: element.offsetTop - 100
        })
    }

    ret.forEach( ret => {
        ret.addEventListener('click', e => {
            let attributeReturn = e.target.closest('.button-return').getAttribute('data-id');
            scrollTo(attributeReturn);
        })
    })
})