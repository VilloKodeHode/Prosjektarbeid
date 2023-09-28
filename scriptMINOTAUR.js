const titleMINOTAUR = "MINOTAUR";
const imgMINOTAURUrl = "/images/MINOTAUR/";
const textMINOTAUR = "I am the MINOTAUR";
const cardColorMINOTAUR = "";

if (titleMINOTAUR && imgMINOTAURUrl && textMINOTAUR && cardColorMINOTAUR) {
  document.getElementById("titleMINOTAUR").textContent = titleMINOTAUR;
  document.getElementById("imgMINOTAUR").src = imgMINOTAURUrl;
  document.getElementById("textMINOTAUR").textContent = `"${textMINOTAUR}!"`;
  document.getElementById("cardMINOTAUR").style.backgroundColor =
    cardColorMINOTAUR;
} else {
  document.getElementById("imgMINOTAUR").src = "/images/archangel.png";
}
