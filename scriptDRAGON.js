const titleDRAGON = "DRAGON";
const imgDRAGONUrl = "https://media.gettyimages.com/id/488578578/vector/laughing-green-dragon.jpg?s=612x612&w=0&k=20&c=u0m9On0FonlLQG7u4Bg606_BKRsK5P5lEbyM_FduB0E%3D";
const textDRAGON = "Dangerous, but not evil.";
const cardColorDRAGON = "pink";

if (titleDRAGON && imgDRAGONUrl && textDRAGON && cardColorDRAGON) {
  document.getElementById("titleDRAGON").textContent = titleDRAGON;
  document.getElementById("imgDRAGON").src = imgDRAGONUrl;
  document.getElementById("textDRAGON").textContent = `"${textDRAGON}!"`;
  document.getElementById("cardDRAGON").style.backgroundColor = cardColorDRAGON;
} else {
  document.getElementById("imgDRAGON").src = "/images/archangel.png";
}
