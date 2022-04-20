
'use strict';

/**
 * Handle mobile menu functionality to hide/reveal sidebar on mobile layouts
 */
const body = document.querySelector('body');
const githubSVG = document.querySelector('svg');
const githubSpan = document.querySelector('span.github');
const grid = document.querySelectorAll('a.cell');
const technologiesListItems = document.querySelectorAll('.technologies li');
const nonBreakingSpace = '&nbsp;';
let headerBtnClicked = false;

document.querySelector('#menu-icon').addEventListener('click', e => {
  !headerBtnClicked ? body.style.transform = 'translateX(300px)' : body.style.transform = 'translateX(0px)';
  return headerBtnClicked = !headerBtnClicked;
});

/**
 * Rotate github SVG on hover
 */
githubSpan.onmouseover = ()=> {
  githubSVG.classList.add('rotate-svg')
};
githubSpan.onmouseout = ()=> {
  githubSVG.classList.remove('rotate-svg')
};

grid.forEach(cell => {
  cell.onmouseover = ()=> {
    cell.children[1].style.opacity = "1";
  }
  cell.onmouseout = ()=> {
    cell.children[1].style.opacity = "0";
  }
});

technologiesListItems.forEach(item => {
  item.innerHTML = nonBreakingSpace + item.innerHTML + nonBreakingSpace;
});