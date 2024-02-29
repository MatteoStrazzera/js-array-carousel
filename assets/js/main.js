// console.log('connesso');


// creiamo una lista (array) con le immagini
const imgList = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

// console.log(imgList);

// creiamo le varie variabili per i controlli, per il conteiner 'slides'
const slidesContainer = document.querySelector('.slides');

// console.log(slidesContainer);

// variabili controlli
const prevControl = document.querySelector('.prev');

const nextControl = document.querySelector('.next');

// console.log(prevControl, nextControl);

let activeImg = 0;

// creiamo un ciclo (for) per ciclare tra le immagini

for (let i = 0; i < imgList.length; i++) {
    const imgSlide = imgList[i];

    // console.log(imgSlide);

    // inseriamo le immagini nel documento html
    let markupImg = `<img class=" ${i === activeImg ? 'active' : ''}" src="./assets/img/${imgSlide}" alt="">`;

    // console.log(markupImg);

    slidesContainer.insertAdjacentHTML('beforeend', markupImg);
}

// rendiamo i controlli 'attivi' (eventlistener) che permettano di cambiare l'immagine sia avanti che indietro

nextControl.addEventListener('click', function () {
    // console.log('next');

    activeImg++
    let maxIndexLength = imgList.length - 1

    // console.log(activeImg);

    if (activeImg > maxIndexLength) {
        activeImg = 0;
    }

    const currentImg = document.querySelector('img.active')
    // console.log(currentImg);

    currentImg.classList.remove('active')
    // console.log(currentImg);

    const allImg = document.querySelectorAll(".slides>img")
    allImg[activeImg].classList.add('active')

    // console.log(allImg[activeImg]);

})

prevControl.addEventListener('click', function () {
    // console.log('prev');

    activeImg--

    if (activeImg < 0) {
        activeImg = imgList.length - 1
    }

    // console.log(activeImg);

    const currentImg = document.querySelector('img.active')
    // console.log(currentImg);

    currentImg.classList.remove('active')
    // console.log(currentImg);

    const allImg = document.querySelectorAll(".slides>img")
    // console.log(allImg[activeImg]);


    allImg[activeImg].classList.add('active')


})