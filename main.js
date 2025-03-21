const boxs = document.querySelectorAll('.box');
function toggleOpen() {
    this.classList.toggle('open');
}
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}
boxs.forEach(box => box.addEventListener('click', toggleOpen));
boxs.forEach(box => box.addEventListener('transitionend', toggleActive));