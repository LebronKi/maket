const menu = document.getElementById('menu');
const open = document.getElementById('open');
const close = document.getElementById('close');

window.ontouchstart = function (event){
    if(event.target == close || event.target ==open){
        menu.classList.remove('close');
    }
    else{
        menu.classList.add('open');
    }
}