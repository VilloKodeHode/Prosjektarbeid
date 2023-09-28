const titleCHIMERA = "CHIMERA";
const imgCHIMERAUrl = "/images/CHIMERA/";
const textCHIMERA = "I am the CHIMERA";
const cardColorCHIMERA = "";

if (titleCHIMERA && imgCHIMERAUrl && textCHIMERA && cardColorCHIMERA) {
  document.getElementById("titleCHIMERA").textContent = titleCHIMERA;
  document.getElementById("imgCHIMERA").src = imgCHIMERAUrl;
  document.getElementById("textCHIMERA").textContent = `"${textCHIMERA}!"`;
  document.getElementById("cardCHIMERA").style.backgroundColor =
    cardColorCHIMERA;
} else {
  document.getElementById("imgCHIMERA").src = "/images/archangel.png";
}
