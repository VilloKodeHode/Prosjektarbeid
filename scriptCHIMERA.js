const titleCHIMERA = "CHIMERA";
const imgCHIMERAUrl = "/images/CHIMERA/c7935f840f5e7eb127994567308c51cc.jpg";
const textCHIMERA = "COOL LION";
const cardColorCHIMERA = "darkgrey";

if (titleCHIMERA && imgCHIMERAUrl && textCHIMERA && cardColorCHIMERA) {
  document.getElementById("titleCHIMERA").textContent = titleCHIMERA;
  document.getElementById("imgCHIMERA").src = imgCHIMERAUrl;
  document.getElementById("textCHIMERA").textContent = `"${textCHIMERA}!"`;
  document.getElementById("cardCHIMERA").style.backgroundColor =
    cardColorCHIMERA;
} else {
  document.getElementById("imgCHIMERA").src = "/images/archangel.png";
}
