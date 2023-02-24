 import '../assets/particles/particles'
 import Swiper from 'swiper/bundle';
 import 'swiper/css/bundle';
 import '../styles/main.scss'
 import '../index.html'


new Swiper('.slider',{
    // direction: 'vertical',

    speed : 3000,
    spaceBetween: 20,
    parallax: true,
    mousewheel: {
		enabled: true,
		sensitivity: 2.5
	}
})

let soundButton = document.querySelector('.soundbatton'),
audio = document.querySelector('.audio')

soundButton.addEventListener('click', e =>{
 soundButton.classList.toggle('paused')
 audio.paused ? audio.play() : audio.pause()
});

window.onfocus = function(){
    soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function(){
    audio.pause()
}