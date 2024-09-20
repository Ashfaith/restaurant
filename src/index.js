import { changeBody } from './page.js';
import "./styles.css";

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');
const content = document.querySelector('#content');

document.addEventListener('DOMContentLoaded', () => {
    content.removeChild(content.firstChild);
    let text = document.createElement('div');
    text.innerHTML = changeBody.home();
    content.appendChild(text);
    homeBtn.classList.add('clicked'); 
});

homeBtn.addEventListener('click', () => {
    content.removeChild(content.firstChild);
    let text = document.createElement('div');
    text.innerHTML = changeBody.home();
    content.appendChild(text);
    homeBtn.classList.add('clicked'); 
    menuBtn.classList.remove('clicked');
    aboutBtn.classList.remove('clicked');
});

menuBtn.addEventListener('click', () => {
    content.removeChild(content.firstChild);
    let text = document.createElement('div');
    text.innerHTML = changeBody.menu();
    content.appendChild(text);
    homeBtn.classList.remove('clicked'); 
    menuBtn.classList.add('clicked');
    aboutBtn.classList.remove('clicked');
});

aboutBtn.addEventListener('click', () => {
    content.removeChild(content.firstChild);
    let text = document.createElement('div');
    text.innerHTML = changeBody.about();
    content.appendChild(text);
    homeBtn.classList.remove('clicked'); 
    menuBtn.classList.remove('clicked');
    aboutBtn.classList.add('clicked');
});