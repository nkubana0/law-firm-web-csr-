const mainMenu = document.querySelector('.menu li a');
const closeMenu = document.querySelector('.close-icon');
const openMenu = document.querySelector('.menu-icon');
const menu_items = document.querySelectorAll('.menu li a');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    mainMenu.style.right = '0';
    openMenu.style.display = 'none';
}
function close(){
    mainMenu.style.right = '-120%';
    openMenu.style.display = 'block';
}