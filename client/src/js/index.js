import { Workbox } from 'workbox-window';
import './database';
import '../css/style.css';
import Editor from './text_editor';
const main = document.querySelector('#main');
main.innerHTML = '';

const ldSp = () => {
  const sp = document.createElement('div');
  sp.classList.add('spinner');
  sp.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(sp);
};

const tEditor = new Editor();

if (typeof tEditor === 'undefined') {
  ldSp();
}


if ('serviceWorker' in navigator) {
 
  const SW = new Workbox('/src-sw.js');
  SW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
