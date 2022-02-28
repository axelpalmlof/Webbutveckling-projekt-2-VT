var overlayBtn = document.getElementsByClassName('overlay_button');
var main_wrapper = document.getElementById('main_wrapper');
var body = document.getElementsByTagName('body').item(0);
console.log(overlayBtn);
for (btn of overlayBtn) {
    console.log(btn);
    btn.addEventListener('click', () => {
        if (main_wrapper.classList.contains('overlay')) {
            main_wrapper.classList.remove('overlay')
            // body.classList.remove('pressed');
        } else {
            main_wrapper.classList.add('overlay');
            // body.classList.add('pressed');
        }
    })
}