var overlayBtn = document.getElementsByClassName('overlay_button');
var main_wrapper = document.getElementById('main_wrapper');
var body = document.getElementsByTagName('body').item(0);
console.log(overlayBtn);
for (var btn of overlayBtn) {
    console.log(btn);
    btn.addEventListener('click', () => {
        main_wrapper.classList.toggle('overlay');
    });
}