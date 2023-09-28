const titleDRAGON = "DRAGON";
const imgDRAGONUrl = "/images/DRAGON/";
const textDRAGON = "I am the DRAGON";
const cardColorDRAGON = "";

if (titleDRAGON && imgDRAGONUrl && textDRAGON && cardColorDRAGON) {
  document.getElementById("titleDRAGON").textContent = titleDRAGON;
  document.getElementById("imgDRAGON").src = imgDRAGONUrl;
  document.getElementById("textDRAGON").textContent = `"${textDRAGON}!"`;
  document.getElementById("cardDRAGON").style.backgroundColor = cardColorDRAGON;
} else {
  document.getElementById("imgDRAGON").src = "/images/archangel.png";
}
