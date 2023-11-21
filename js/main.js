/* Functions */

function changeSlideNext() {
  domItem[counter].classList.remove('active');
  domThumbnails[counter].classList.add('overlay');
  if (counter < domItem.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
  domItem[counter].classList.add('active');
  domThumbnails[counter].classList.remove('overlay');
}

function changeSlidePrev() {
  domItem[counter].classList.remove('active');
  domThumbnails[counter].classList.add('overlay');
  if (counter > 0) {
    counter--;
  } else {
    counter = domItem.length - 1;
  }
  domItem[counter].classList.add('active');
  domThumbnails[counter].classList.remove('overlay');
}

/* Program */

// Variables
const imagesArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const items = document.querySelector('.items');
let counter = 0;
let item = '';
let thumbnail = '';
const fragment = new DocumentFragment();
const images = [
  {
    url: 'img/01.jpg',
    titolo: 'Title 01',
    descrizione:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nisi odit ab aspernatur.',
  },
  {
    url: 'img/02.jpg',
    titolo: 'Title 02',
    descrizione:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas aliquam fugiat tenetur dignissimos labore ratione delectus?',
  },
  {
    url: 'img/03.jpg',
    titolo: 'Title 03',
    descrizione:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti, hic nesciunt, consequatur.',
  },
  {
    url: 'img/04.jpg',
    titolo: 'Title 04',
    descrizione:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus doloribus exercitationem.',
  },
  {
    url: 'img/05.jpg',
    titolo: 'Title 05',
    descrizione:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, porro eum ex nobis beatae blanditiis iure.',
  },
];

// Program
// Aggiungione immagini tramite interpolazione di stringhe
for (let i = 0; i < imagesArray.length; i++) {
  if (i === 0) {
    item += `<div class = "item active"><img src = "${
      images[i].url
    }" alt = "img${i + 1}"><div class = "caption"><h2>${
      images[i].titolo
    }</h2><br><span>${images[i].descrizione}</span></div></div>`;
    thumbnail += `<div class = "thumbnail"><img src = "${
      images[i].url
    }" alt = "img${i + 1}"></div>`;
  } else {
    item += `<div class = "item"><img src = "${images[i].url}" alt = "img${
      i + 1
    }"><div class = "caption"><h2>${images[i].titolo}</h2><br><span>${
      images[i].descrizione
    }</span></div></div>`;
    thumbnail += `<div class = "thumbnail overlay"><img src = "${images[i].url}" alt = "img${i}"></div>`;
  }
}

items.innerHTML +=
  item + `<div class = "thumbnailsContainer">${thumbnail}</div>`;

// Variables
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const domItem = document.querySelectorAll('.item');
const domThumbnails = document.querySelectorAll('.thumbnail');
const thumbnailsContainer = document.querySelector('.thumbnailsContainer');

const play = document.querySelector('.start i');
const pause = document.querySelector('.stop i');

// Program
// let myInterval = setInterval(changeSlideNext, 3_000);
let myInterval;

next.addEventListener('click', function () {
  changeSlideNext();
});

prev.addEventListener('click', function () {
  changeSlidePrev();
});

play.addEventListener('click', function () {
  clearInterval(myInterval);
  myInterval = setInterval(changeSlideNext, 3_000);
});

pause.addEventListener('click', function () {
  clearInterval(myInterval);
});

// Aggiungo l'EL al padre per gestire i click ai figli passando il parametro event alla funzione anonima
thumbnailsContainer.addEventListener('click', function (event) {
  console.log(domItem[0].childNodes[0].alt);
  console.log(event);
  for (let i = 0; i < domItem.length; i++)
    if (event.target.childNodes.alt === domItem[i].childNodes[i].alt) {
      domItem[counter].classList.remove('active');
      domThumbnails[counter].classList.add('overlay');
      counter = i;
      domItem[counter].classList.add('active');
      domThumbnails[counter].classList.remove('overlay');
    }
});
