let baseImagenes = "assets/img/"


// Preguntas Frecuentes
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
    },
    {
        id: "2",
        pregunta: "esta es una pregunta",
        solucion: "esta es una solucion Solucion"
    }
]

preguntasFrecuentes.forEach(item => {

    t.querySelector(".col-lg-5 h4").textContent = item.pregunta
    t.querySelector(".col-lg-7 p").textContent = item.solucion
    const clone = t.cloneNode(true)

    fragment.appendChild(clone)

})
lista.appendChild(fragment)

// Testimonios

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

// Nuestro Equipo

let t2 = document.querySelector('#teamember').content
const lista2 = document.querySelector("#listeam")
const fragment2 = document.createDocumentFragment();

const Team = [
    {
        id: "1",
        nombre: "Ivan",
        cargo: "seo",
        redes: {
            facebook: "https://www.facebook.com/Ivancaviedes09/",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: "2",
        nombre: "Daniela",
        cargo: "Diseñadora Grafica",
        redes: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    },
    {
        id: "3",
        nombre: "Carlos",
        cargo: "Ingeniero",
        redes: {
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: ""
        }
    }
]


Team.forEach(item => {
    t2.querySelector(".member h4").textContent = item.nombre
    t2.querySelector(".member span").textContent = item.cargo
    t2.querySelector(".member .pic img").src = `${baseImagenes}/team/team-${item.id}.jpg`
    t2.querySelector(".member .social #facebook").href = item.redes.facebook
    t2.querySelector(".member .social #twitter").href = item.redes.twitter
    t2.querySelector(".member .social #instagram").href = item.redes.instagram
    t2.querySelector(".member .social #linkedin").href = item.redes.linkedin
    const clone = t2.cloneNode(true)
    fragment2.appendChild(clone)
})

lista2.appendChild(fragment2)


// Nuestros Trabajos


let t3 = document.querySelector('#trabajos').content
const lista3 = document.querySelector("#listrabajos")
const fragment3 = document.createDocumentFragment();

const Trabajos = [
    {
        id: "1",
        imagen: "",
        link: "",
        titulo: "",
        descripcion: "",
        clase: "filter-web"

    },
    {
        id: "1",
        imagen: "",
        link: "",
        titulo: "",
        descripcion: "",
        clase: "filter-Ilustraciones"

    }
]

Trabajos.forEach(item => {
    t3.querySelector("#item-trabajo").classList.add(item.clase);
    const clone = t3.cloneNode(true)
    fragment3.appendChild(clone)
})

lista3.appendChild(fragment3)

// Nuestros servicios
let t4 = document.querySelector('#servicios').content
const lista4 = document.querySelector("#listaservicios")
const fragment4 = document.createDocumentFragment();

let Servicios = [
    {
        imagen:"bannerAppsWeb.jpg",
        titulo:"Aplicaciones Web",
        descripcion:"descripcion"
    },
    {
        imagen:"bannerAppsPersonalizada.jpg",
        titulo:"Aplicaciones Personalizadas",
        descripcion:"descripcion"
    },
    {
        imagen:"bannerAppsMovil.jpg",
        titulo:"Aplicaciones Movil",
        descripcion:"descripcion"
    },
    {
        imagen:"ux.jpg",
        titulo:"Diseño UX",
        descripcion:"descripcion"
    },
    {
        imagen:"ui.png",
        titulo:"Diseño UI",
        descripcion:"descripcion"
    },
    {
        imagen:"photografia.jpg",
        titulo:"Fotografia",
        descripcion:"descripcion"
    }
]
Servicios.forEach(item => {
    t4.querySelector(".card-img img").src = `${baseImagenes}${item.imagen}`
    t4.querySelector(".card-title").textContent = item.titulo
    t4.querySelector(".card-text").textContent = item.descripcion
    const clone = t4.cloneNode(true)
    fragment4.appendChild(clone)
})

lista4.appendChild(fragment4)