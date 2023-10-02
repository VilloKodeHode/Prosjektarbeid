const titleGRIFFIN = "GRIFFIN lets FLY!";
const imgGRIFFINUrl = "/images/SHISHAN/Griffin.png";
const textGRIFFIN = "I am the Mighty Griffin! Don't mess with me!";
const cardColorGRIFFIN = "#0a6681";

if (titleGRIFFIN && imgGRIFFINUrl && textGRIFFIN && cardColorGRIFFIN) {
  document.getElementById("titleGRIFFIN").textContent = titleGRIFFIN;
  document.getElementById("imgGRIFFIN").src = imgGRIFFINUrl;
  document.getElementById("textGRIFFIN").textContent = `"${textGRIFFIN}!"`;
  document.getElementById("cardGRIFFIN").style.backgroundColor =
    cardColorGRIFFIN;
} else {
  document.getElementById("imgGRIFFIN").src = "/images/archangel.png";
}
