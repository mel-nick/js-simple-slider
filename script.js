const images = ['slider-1','slider-2','slider-3','slider-4','slider-5','slider-6']
let index = 0
const slide = document.getElementById('slide')
slide.src = `./img/${images[0]}.jpg`

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function slider(direction) {
    if (direction == 'prev') {
        index--;
    } else {
        index++;
        index %= images.length;
    }
    if (index < 0) {
        index = images.length - 1;
    }
    slide.src = `./img/${images[index]}.jpg`
}

prevBtn.onclick = () => slider('prev')

nextBtn.onclick = () => slider('next')