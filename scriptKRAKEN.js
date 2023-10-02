const titleKRAKEN = "KRAKEN";
const imgKRAKENUrl = "https://medievalists.gumlet.io/wp-content/uploads/2015/01/Kraken.png?format=webp&compress=true&quality=80&w=376&dpr=2.6";
const textKRAKEN = "Release the Kraken!!!!";
const cardColorKRAKEN = "#00a5e0";

if (titleKRAKEN && imgKRAKENUrl && textKRAKEN && cardColorKRAKEN) {
  document.getElementById("titleKRAKEN").textContent = titleKRAKEN;
  document.getElementById("imgKRAKEN").src = imgKRAKENUrl;
  document.getElementById("textKRAKEN").textContent = `"${textKRAKEN}!"`;
  document.getElementById("cardKRAKEN").style.backgroundColor = cardColorKRAKEN;
} else {
  document.getElementById("imgKRAKEN").src = "/images/archangel.png";
}
