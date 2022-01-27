
'use strict';

/**
 * Handle mobile menu functionality to hide/reveal sidebar on mobile layouts
 */
const body = document.querySelector('body');
const githubSVG = document.querySelector('svg');
const githubSpan = document.querySelector('span.github');
let headerBtnClicked = false;

document.querySelector('#menu-icon').addEventListener('click', e => {
  !headerBtnClicked ? body.style.transform = 'translateX(300px)' : body.style.transform = 'translateX(0px)';
  return headerBtnClicked = !headerBtnClicked;
});

/**
 * Rotate github SVG on hover
 */
githubSVG.addEventListener('mouseover', (e) => {
  console.log("naides");
});


githubSpan.onmouseover = ()=> {
  githubSVG.classList.add('rotate-svg')
  console.log("naides");
};
githubSpan.onmouseout = ()=> {
  githubSVG.classList.remove('rotate-svg')
  console.log("chiss");
};