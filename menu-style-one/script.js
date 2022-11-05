const underLine = document.querySelector('#underline');

const menu = document.querySelector('nav');

menu.addEventListener('click', e => {
    if (e.target.nodeName === 'A'){
    underLine.style.left = e.target.offsetLeft + 'px';
    underLine.style.left = e.target.offsetWidth + 'px';
}
});