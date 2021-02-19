import Menu from './menu.js';
import ScrollSuave from './scrollSuave.js';
import AnimaAoScroll from './scrollAnima.js';

Menu();
AnimaAoScroll();

const scrollSuave = new ScrollSuave('a[href^="#"]');
scrollSuave.init();
