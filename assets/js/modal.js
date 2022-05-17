const modal = document.querySelector('.illustration--modal')
const buttonCloseModal = document.querySelector('.modal--inter-button-close')


buttonCloseModal.addEventListener('click', ()=>{
    modal.classList.add('close-modal')
    modal.classList.remove('open-modal')
    document.querySelector(".body").style.overflowY = "scroll"
})


const buttonOpenModal = document.querySelector('.section-illustrations')
buttonOpenModal.addEventListener('click', ()=>{
    modal.classList.remove('close-modal')
    modal.classList.add('open-modal')
    document.querySelector(".body").style.overflowY = "hidden"
})