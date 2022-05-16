const modal = document.querySelector('.illustration--modal')
const buttonCloseModal = document.querySelector('.modal--inter-button-close')


buttonCloseModal.addEventListener('click', ()=>{
    modal.classList.add('close-modal')
    modal.classList.remove('open-modal')
})


const buttonOpenModal = document.querySelector('.illustration--mobile-active-3')
buttonOpenModal.addEventListener('click', ()=>{
    modal.classList.remove('close-modal')
    modal.classList.add('open-modal')
})