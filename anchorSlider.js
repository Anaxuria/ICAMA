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