import { titleSHISHAN, imgSHISHANUrl, textSHISHAN, cardColorSHISHAN } from './shishan.js'

function populateDiv(divId, title, imgUrl, text, cardColor) {
  const div = document.getElementById(divId);
  div.querySelector('.cardTitle').textContent = title;
  div.querySelector('img').src = imgUrl;
  div.querySelector('.cardDescription').textContent = `"${text}!"`;
  div.style.backgroundColor = cardColor;
}

populateDiv("SHISHAN", titleSHISHAN, imgSHISHANUrl, textSHISHAN, cardColorSHISHAN);
