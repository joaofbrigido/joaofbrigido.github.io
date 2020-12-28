import SlideNav from './modules/slide.js'
import ScrollSuave from './modules/scroll-suave.js'
import typeWriter from './modules/maquina-escrever.js'

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');

const scrollSuave = new ScrollSuave('.btnProjects');
scrollSuave.init();

const titulo = document.querySelector('.mainText h1');
typeWriter(titulo);