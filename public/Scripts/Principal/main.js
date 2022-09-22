const imagenes_derecha = document.querySelectorAll('.imagen_derecha')
const imagenes_izquierda = document.querySelectorAll('.imagen_izquierda')
const imagenes_centro = document.querySelectorAll('.imagen_centro')

const observerIzquierda = new IntersectionObserver( entries => {
    entries.forEach( entry => {
        entry.target.classList.toggle( "show_izquierda" , entry.isIntersecting )
    })
}, { threshold: 1 })

const observerDerecha = new IntersectionObserver( entries => {
    entries.forEach( entry => {
        entry.target.classList.toggle( "show_derecha" , entry.isIntersecting )
    })
}, { threshold: 1 })

const observerCentro = new IntersectionObserver( entries => {
    entries.forEach( entry => {
        entry.target.classList.toggle( "show_centro" , entry.isIntersecting )
    })
}, { threshold: 1 })

imagenes_izquierda.forEach( imagen => {
    observerIzquierda.observe( imagen )
})

imagenes_derecha.forEach( imagen => {
    observerDerecha.observe( imagen )
})

imagenes_centro.forEach( imagen => {
    observerCentro.observe( imagen )
})