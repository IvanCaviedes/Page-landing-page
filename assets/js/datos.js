let baseImagenes = 'assets/img/';

// Preguntas Frecuentes
let t = document.querySelector('#preguntas').content;
const lista = document.querySelector('#listapreguntas');
const fragment = document.createDocumentFragment();

const preguntasFrecuentes = [
  {
    id: '1',
    pregunta: '¿Que es una página web ?',
    solucion:
      'Puede ser una tienda en línea, un sitio web o una aplicación a medida, Una herramienta digital orientada a cumplir objetivos, respaldada por un concept creativo que llame la atención Su propósito siempre será conectar con tu audiencia para ayudarte a vender tus productos, posicionar tu marca o promocionar tus servicios.',
  },
  {
    id: '2',
    pregunta: '¿Cual es el propósito de página web?',
    solucion:
      'Queremos que te recuerden! Desarrollamos páginas web y aplicaciones con personalidad No te arriesgues con la primera agencia que encuentres. Deja el desarrollo digital de tu empresa a devandesing, nosotros haremos que tu empresa permanezca en la mente de tus clientes.',
  },
  {
    id: '2',
    pregunta: '¿Como elegir mi página web?',
    solucion:
      'Entendemos que cada empresa tiene necesidades y requerimientos que deben solventarse de manera única. En devandesing nos obsesionamos con cada detalle y trabajamos nuestros proyectos pensando específicamente en cada cliente, cada empresa y cada usuario. ',
  },
];

preguntasFrecuentes.forEach((item) => {
  t.querySelector('.col-lg-5 h4').textContent = item.pregunta;
  t.querySelector('.col-lg-7 p').textContent = item.solucion;
  const clone = t.cloneNode(true);

  fragment.appendChild(clone);
});
lista.appendChild(fragment);

// Testimonios

let t1 = document.querySelector('#testimonios').content;
const lista1 = document.querySelector('#listatestimonial');
const fragment1 = document.createDocumentFragment();

const Testimonios = [
  {
    id: '1',
    text: 'Este es un testimonio cargado por medio de js',
    author: 'autor 1',
    occupacion: 'el loco',
  },
  {
    id: '2',
    text: 'etxto2',
    author: 'autor 2',
    occupacion: 'ninguna',
  },
];

Testimonios.forEach((item) => {
  t1.querySelector('.testimonial-text').textContent = item.text;
  t1.querySelector('.testimonial-author').textContent = item.author;
  t1.querySelector('.occupation').textContent = item.occupacion;

  const clone = t1.cloneNode(true);
  fragment1.appendChild(clone);
});
lista1.appendChild(fragment1);

// Nuestro Equipo

let t2 = document.querySelector('#teamember').content;
const lista2 = document.querySelector('#listeam');
const fragment2 = document.createDocumentFragment();

const Team = [
  {
    id: '1',
    nombre: 'Iván Caviedes',
    cargo: 'seo',
    redes: {
      facebook: 'https://www.facebook.com/Ivancaviedes09/',
      twitter: '',
      instagram: 'https://www.instagram.com/ivan_caviedes9/',
      linkedin: 'https://co.linkedin.com/',
    },
  },
  {
    id: '2',
    nombre: 'Daniela Fresneda',
    cargo: 'Diseñadora Grafica',
    redes: {
      facebook: 'https://www.facebook.com/danielita.fresneda',
      twitter: '',
      instagram: 'https://www.instagram.com/danuuuela/',
      linkedin: 'https://co.linkedin.com/',
    },
  },
  {
    id: '3',
    nombre: 'Andres Castillo',
    cargo: 'Ingeniero',
    redes: {
      facebook: 'https://www.facebook.com/xandresballenx',
      twitter: '',
      instagram: 'https://www.instagram.com/andresballen9/',
      linkedin: 'https://co.linkedin.com/',
    },
  },
  {
    id: '5',
    nombre: 'John Herrera',
    cargo: 'Developer',
    redes: {
      facebook: 'https://www.facebook.com/johnharold.herrera',
      twitter: '',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://co.linkedin.com/',
    },
  },
];

Team.forEach((item) => {
  t2.querySelector('.member h4').textContent = item.nombre;
  // t2.querySelector(".member span").textContent = item.cargo
  t2.querySelector(
    '.member .pic img'
  ).src = `${baseImagenes}team/team-${item.id}.jpg`;
  t2.querySelector('.member .social #facebook').href = item.redes.facebook;
  // t2.querySelector(".member .social #twitter").href = item.redes.twitter
  t2.querySelector('.member .social #instagram').href = item.redes.instagram;
  t2.querySelector('.member .social #linkedin').href = item.redes.linkedin;
  const clone = t2.cloneNode(true);
  fragment2.appendChild(clone);
});

lista2.appendChild(fragment2);

// Nuestros Trabajos

let t3 = document.querySelector('#trabajos').content;
const lista3 = document.querySelector('#listrabajos');
const fragment3 = document.createDocumentFragment();

const Trabajos = [
  {
    id: '1',
    imagen: '',
    link: '',
    titulo: '',
    descripcion: '',
    clase: 'filter-web',
  },
  {
    id: '1',
    imagen: '',
    link: '',
    titulo: '',
    descripcion: '',
    clase: 'filter-Ilustraciones',
  },
];

Trabajos.forEach((item) => {
  t3.querySelector('#item-trabajo').classList.add(item.clase);
  const clone = t3.cloneNode(true);
  fragment3.appendChild(clone);
});

lista3.appendChild(fragment3);

// Nuestros servicios
let t4 = document.querySelector('#servicios').content;
const lista4 = document.querySelector('#listaservicios');
const fragment4 = document.createDocumentFragment();

let Servicios = [
  {
    imagen: 'bannerAppsWeb.jpg',
    titulo: 'Aplicaciones Web',
    descripcion:
      'Somos una empresa enfocada al desarrollo a la medida, creamos sitios web y diseño web. ofrecemos la una solucion completa mejorar tu presencia en internet.',
  },
  {
    imagen: 'bannerAppsPersonalizada.jpg',
    titulo: 'Tiendas Online',
    descripcion:
      'Aumenta las ventas de tu negocio con una tienda online. Son realizadas por profecionales enfocados a el aumento de produccion.',
  },
  {
    imagen: 'bannerAppsMovil.jpg',
    titulo: 'Aplicaciones Movil',
    descripcion:
      'Diseñamos aplicaciones para moviles (Android o ios) ajustandonos a tus necesidades y ofreciendo la una solucion completa mejorar tu presencia las tiendas mobiles.',
  },
  {
    imagen: 'ux.jpg',
    titulo: 'Diseño UX',
    descripcion:
      'Diseñamos aplicaciones utilizando un enfoque de diseño resposive. Somos desarrolladores que creamos interfaces y estrategias web.',
  },
  {
    imagen: 'ui.png',
    titulo: 'Diseño UI',
    descripcion:
      'Diseñamos mockups de tus aplicaciones utilizando un enfoque de diseño resposive. Creamos un interfaces de usuario que te ayudara a guiar a tus clientes por las diferentes partes de tu aplicacion.',
  },
  {
    imagen: 'photografia.jpg',
    titulo: 'Fotografia',
    descripcion:
      'Atrae clientes con fotografias profecionales, Nuestros fotografos tienen en cuenta la calidad la prespectiva y el angulo ideal para que tengas un exelente resultado en lo esperado.',
  },
];
Servicios.forEach((item) => {
  t4.querySelector('.card-img img').src = `${baseImagenes}${item.imagen}`;
  t4.querySelector('.card-title').textContent = item.titulo;
  t4.querySelector('.card-text').textContent = item.descripcion;
  const clone = t4.cloneNode(true);
  fragment4.appendChild(clone);
});

lista4.appendChild(fragment4);
