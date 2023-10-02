const titleCHIMERA = "Chimdun the Multifaceted";
const imgCHIMERAUrl = "/images/CHIMERA/chimera.png";
const textCHIMERA = "Why be just ONE animal?";
const cardColorCHIMERA = "#b48648";

if (titleCHIMERA && imgCHIMERAUrl && textCHIMERA && cardColorCHIMERA) {
  document.getElementById("titleCHIMERA").textContent = titleCHIMERA;
  document.getElementById("imgCHIMERA").src = imgCHIMERAUrl;
  document.getElementById("textCHIMERA").textContent = `"${textCHIMERA}!"`;
  document.getElementById("cardCHIMERA").style.backgroundColor =
    cardColorCHIMERA;
} else {
  document.getElementById("imgCHIMERA").src = "/images/archangel.png";
}
