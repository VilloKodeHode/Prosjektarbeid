const titleDRAGON = "Dragon";
const imgDRAGONUrl = "/images/dragon/audunbarsk_red_dragon_c38dd704-8211-4921-b44a-8a429451bec1.png";
const textDRAGON = "I am the DRAGON";
const cardColorDRAGON = "red";

if (titleDRAGON && imgDRAGONUrl && textDRAGON && cardColorDRAGON) {
  document.getElementById("titleDRAGON").textContent = titleDRAGON;
  document.getElementById("imgDRAGON").src = imgDRAGONUrl;
  document.getElementById("textDRAGON").textContent = `"${textDRAGON}!"`;
  document.getElementById("cardDRAGON").style.backgroundColor = cardColorDRAGON;
} else {
  document.getElementById("imgDRAGON").src = "/images/archangel.png";
}
