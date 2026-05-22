const alphabetImg = document.getElementById("alphabet-img");
const popup = document.getElementById("img-popup");

alphabetImg.addEventListener("click", () => {
    popup.style.display = "flex";
});

popup.addEventListener("click", () => {
    popup.style.display = "none";
});
