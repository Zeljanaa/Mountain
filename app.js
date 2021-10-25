const scrollElements = document.getElementsByClassName('scroll')

Array.from(scrollElements).forEach(function (element) {
    element.addEventListener('click', () => {
        var top = window.pageYOffset || document.documentElement.scrollTop
        window.scrollTo(top, top + 300);
    });
});