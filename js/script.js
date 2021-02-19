import Menu from './menu.js';
import ScrollSuave from './scrollSuave.js';

Menu();

const scrollSuave = new ScrollSuave('a[href^="#"]');
scrollSuave.init();
