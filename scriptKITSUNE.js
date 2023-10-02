const titleKITSUNE = "KITSUNE";
const imgKITSUNEUrl = "https://images.nightcafe.studio/jobs/7IVIioBfBIIR7TgekT2Y/7IVIioBfBIIR7TgekT2Y--1--5h5rp.jpg?tr=w-1600,c-at_max";
const textKITSUNE = "I am the KITSUNE";
const cardColorKITSUNE = "pink";

if (titleKITSUNE && imgKITSUNEUrl && textKITSUNE && cardColorKITSUNE) {
  document.getElementById("titleKITSUNE").textContent = titleKITSUNE;
  document.getElementById("imgKITSUNE").src = imgKITSUNEUrl;
  document.getElementById("textKITSUNE").textContent = `"${textKITSUNE}!"`;
  document.getElementById("cardKITSUNE").style.backgroundColor =
    cardColorKITSUNE;
} else {
  document.getElementById("imgKITSUNE").src = "/images/archangel.png";
}
