const titlePHOENIX = "PHOENIX";
const imgPHOENIXUrl = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3c81bf4c-53df-47dd-bd2d-0015c90567ba/dfugop6-2c07987c-380e-4871-994f-9bd5f2581f49.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjODFiZjRjLTUzZGYtNDdkZC1iZDJkLTAwMTVjOTA1NjdiYVwvZGZ1Z29wNi0yYzA3OTg3Yy0zODBlLTQ4NzEtOTk0Zi05YmQ1ZjI1ODFmNDkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OGT3D2xrfmp4K3t80HuxpOA_MrUq2vic_m3t_GoN_4U";
const textPHOENIX = "I am the PHOENIX";
const cardColorPHOENIX = "orange";

if (titlePHOENIX && imgPHOENIXUrl && textPHOENIX && cardColorPHOENIX) {
  document.getElementById("titlePHOENIX").textContent = titlePHOENIX;
  document.getElementById("imgPHOENIX").src = imgPHOENIXUrl;
  document.getElementById("textPHOENIX").textContent = `"${textPHOENIX}!"`;
  document.getElementById("cardPHOENIX").style.backgroundColor =
    cardColorPHOENIX;
} else {
  document.getElementById("imgPHOENIX").src = "/images/archangel.png";
}
