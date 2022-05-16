{
    let location = document.querySelectorAll('.locations__location')
    let liAboutTravel = document.querySelectorAll('.options--li-about-travel')

    location.forEach((item, index) => {

        liAboutTravel[index].addEventListener('click',()=> {
            for (var i = 0; i < location.length; i++) {
                if (i != index) {

                    location[index].classList.add('location--active')
                    location[i].classList.remove('location--active')
                    

                    /* active bullets */
                    liAboutTravel[index].classList.add('li-about-travel-active')
                    liAboutTravel[i].classList.remove('li-about-travel-active')

                }
            }


        })
    })
}