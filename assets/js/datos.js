
let t = document.querySelector('#preguntas').content
const lista = document.querySelector("#listapreguntas")
const fragment = document.createDocumentFragment();
const preguntasFrecuentes = [
    {
        id: "1",
        pregunta: "Pregunta 1",
        solucion: "Solucion 1"
    },
    {
        id: "2",
        pregunta: "Pregunta 2",
        solucion: "Solucion 2"
    }
]
preguntasFrecuentes.forEach(item => {

    t.querySelector(".col-lg-5 h4").textContent = item.pregunta
    t.querySelector(".col-lg-7 p").textContent = item.solucion
    const clone = t.cloneNode(true)

    fragment.appendChild(clone)

})
lista.appendChild(fragment)


let t1 = document.querySelector('#testimonios').content
const lista1 = document.querySelector("#listatestimonial")
const fragment1 = document.createDocumentFragment();

const Testimonios = [
    {
        id: "1",
        text: "Este es un testimonio cargado por medio de js",
        author: "autor 1",
        occupacion: "el loco"
    },
    {
        id: "2",
        text: "etxto2",
        author: "autor 2",
        occupacion: "ninguna"
    }
]

Testimonios.forEach(item => {
    t1.querySelector(".testimonial-text").textContent = item.text
    t1.querySelector(".testimonial-author").textContent = item.author
    t1.querySelector(".occupation").textContent = item.occupacion

    const clone = t1.cloneNode(true)
    fragment1.appendChild(clone)
})

lista1.appendChild(fragment1)


let t2 = document.querySelector('#teamember').content
const lista2 = document.querySelector("#listeam")
const fragment2 = document.createDocumentFragment();

const Team = [
    {
        id: "1",
        nombre: "ivan Caviedes",
        cargo: "Admin",
    },
    {
        id: "2",
        nombre: "Carlos andres",
        cargo: "trabajador",
    },
    {
        id: "2",
        nombre: "Daniela",
        cargo: "Diseñadora",
    }
]


Team.forEach(item => {
    t2.querySelector(".member h4").textContent = item.nombre
    t2.querySelector(".member span").textContent = item.cargo

    const clone = t2.cloneNode(true)
    fragment2.appendChild(clone)
})

lista2.appendChild(fragment2)

