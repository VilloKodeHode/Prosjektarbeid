const titleGRIFFIN = "GRIFFIN";
const imgGRIFFINUrl = "/images/Griffin.webp";
const textGRIFFIN = "GRIFFIN";
const cardColorGRIFFIN = "darkbrown";

if (titleGRIFFIN && imgGRIFFINUrl && textGRIFFIN && cardColorGRIFFIN) {
  document.getElementById("titleGRIFFIN").textContent = titleGRIFFIN;
  document.getElementById("imgGRIFFIN").src = imgGRIFFINUrl;
  document.getElementById("textGRIFFIN").textContent = `"${textGRIFFIN}!"`;
  document.getElementById("cardGRIFFIN").style.backgroundColor =
    cardColorGRIFFIN;
} else {
  document.getElementById("imgGRIFFIN").src = "/images/archangel.png";
}
