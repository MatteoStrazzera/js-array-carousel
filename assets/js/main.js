// console.log('connesso');


// creiamo una lista (array) con le immagini
const imgList = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

console.log(imgList);

// creiamo le varie variabili per i controlli, per il conteiner 'slides'
const slidesContainer = document.querySelector('.slides');

console.log(slidesContainer);

// variabili controlli
const prevControl = document.querySelector('.prev');

const nextControl = document.querySelector('.next');

console.log(prevControl, nextControl);

// creiamo un ciclo (for) per ciclare tra le immagini

for (let i = 0; i < imgList.length; i++) {
    const imgSlide = imgList[i];

    console.log(imgSlide);
    
}