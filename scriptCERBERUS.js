const titleCERBERUS = "CERBERUS";
const imgCERBERUSUrl = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f633accf-f85f-42e3-b152-3d932278f006/dd3enbm-1f44918c-27db-44fb-afc2-afdacf2f4d08.jpg/v1/fit/w_375,h_431,q_70,strp/cerberus__gatekeeper_of_the_underworld_by_kmjoen_dd3enbm-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE3NiIsInBhdGgiOiJcL2ZcL2Y2MzNhY2NmLWY4NWYtNDJlMy1iMTUyLTNkOTMyMjc4ZjAwNlwvZGQzZW5ibS0xZjQ0OTE4Yy0yN2RiLTQ0ZmItYWZjMi1hZmRhY2YyZjRkMDguanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Z2QNzIs1ecNp-5y4tgMhnTzzpvpC1cICGDBLW2RdsY0";
const textCERBERUS = "Fear the old blood";
const cardColorCERBERUS = "#301934";

if (titleCERBERUS && imgCERBERUSUrl && textCERBERUS && cardColorCERBERUS) {
  document.getElementById("titleCERBERUS").textContent = titleCERBERUS;
  document.getElementById("imgCERBERUS").src = imgCERBERUSUrl;
  document.getElementById("textCERBERUS").textContent = `"${textCERBERUS}!"`;
  document.getElementById("cardCERBERUS").style.backgroundColor =
    cardColorCERBERUS;
} else {
  document.getElementById("imgCERBERUS").src = "/images/archangel.png";
}
