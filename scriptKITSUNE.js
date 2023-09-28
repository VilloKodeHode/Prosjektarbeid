const titleKITSUNE = "KITSUNE";
const imgKITSUNEUrl = "/images/KITSUNE/";
const textKITSUNE = "I am the KITSUNE";
const cardColorKITSUNE = "";

if (titleKITSUNE && imgKITSUNEUrl && textKITSUNE && cardColorKITSUNE) {
  document.getElementById("titleKITSUNE").textContent = titleKITSUNE;
  document.getElementById("imgKITSUNE").src = imgKITSUNEUrl;
  document.getElementById("textKITSUNE").textContent = `"${textKITSUNE}!"`;
  document.getElementById("cardKITSUNE").style.backgroundColor =
    cardColorKITSUNE;
} else {
  document.getElementById("imgKITSUNE").src = "/images/archangel.png";
}
