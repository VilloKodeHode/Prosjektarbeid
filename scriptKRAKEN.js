const titleKRAKEN = "KRAKEN";
const imgKRAKENUrl = "/images/KRAKEN/";
const textKRAKEN = "I am the KRAKEN";
const cardColorKRAKEN = "";

if (titleKRAKEN && imgKRAKENUrl && textKRAKEN && cardColorKRAKEN) {
  document.getElementById("titleKRAKEN").textContent = titleKRAKEN;
  document.getElementById("imgKRAKEN").src = imgKRAKENUrl;
  document.getElementById("textKRAKEN").textContent = `"${textKRAKEN}!"`;
  document.getElementById("cardKRAKEN").style.backgroundColor = cardColorKRAKEN;
} else {
  document.getElementById("imgKRAKEN").src = "/images/archangel.png";
}
