{
    const menuBurguer = document.querySelector('.menu_menuBurguer')
    const navBar = document.querySelector(".menuAndLog__navBar") 
    const navBarLi = document.querySelector(".menuAndLog__navBar li") 

    menuBurguer.addEventListener('click', ()=>{
        navBar.classList.toggle("openMenuBurguer")
        navBarLi.classList.toggle("openLiMenuBurguer")


    })
}