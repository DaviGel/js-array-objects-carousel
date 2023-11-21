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
const imagesArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const items = document.querySelector('.items');
let counter = 0;
let item = '';
let thumbnail = '';

for (let i = 0; i < imagesArray.length; i++) {
  if (i === 0) {
    item += `<div class = "item active"><img src = "img/${imagesArray[i]}" alt = "img${i}"></div>`;
    thumbnail += `<div class = "thumbnail"><img src = "img/${imagesArray[i]}" alt = "img${i}"></div>`;
  } else {
    item += `<div class = "item"><img src = "img/${imagesArray[i]}" alt = "img${i}"></div>`;
    thumbnail += `<div class = "thumbnail overlay"><img src = "img/${imagesArray[i]}" alt = "img${i}"></div>`;
  }
}

items.innerHTML +=
  item + `<div class = "thumbnailsContainer">${thumbnail}</div>`;

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const domItem = document.querySelectorAll('.item');
const domThumbnails = document.querySelectorAll('.thumbnail');
const thumbnailsContainer = document.querySelector('.thumbnailsContainer');
const play = document.querySelector('.start i');
const pause = document.querySelector('.stop i');
const fragment = new DocumentFragment();

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

thumbnailsContainer.addEventListener('click', function (event) {
  for (let i = 0; i < domItem.length; i++)
    if (event.target.innerHTML === domItem[i].innerHTML) {
      domItem[counter].classList.remove('active');
      domThumbnails[counter].classList.add('overlay');
      counter = i;
      domItem[counter].classList.add('active');
      domThumbnails[counter].classList.remove('overlay');
    }
});
