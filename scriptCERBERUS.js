const titleCERBERUS = "CERBERUS";
const imgCERBERUSUrl = "/images/CERBERUS/";
const textCERBERUS = "I am the CERBERUS";
const cardColorCERBERUS = "";

if (titleCERBERUS && imgCERBERUSUrl && textCERBERUS && cardColorCERBERUS) {
  document.getElementById("titleCERBERUS").textContent = titleCERBERUS;
  document.getElementById("imgCERBERUS").src = imgCERBERUSUrl;
  document.getElementById("textCERBERUS").textContent = `"${textCERBERUS}!"`;
  document.getElementById("cardCERBERUS").style.backgroundColor =
    cardColorCERBERUS;
} else {
  document.getElementById("imgCERBERUS").src = "/images/archangel.png";
}
