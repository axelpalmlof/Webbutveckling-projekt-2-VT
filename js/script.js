var menuBtn = document.getElementById('menu_right');
var quote = document.getElementById('quote');
menuBtn.addEventListener('click', () => {
    if (menuBtn.classList.contains('pressed')) {
        quote.classList.remove('pressed')
        menuBtn.classList.remove('pressed');
    } else {
        quote.classList.add('pressed')
        menuBtn.classList.add('pressed')
    }
})