const imgs = document.querySelectorAll(".hero-section ul img");
const prevBtn = document.querySelector(".control-prev");
const nextBtn = document.querySelector(".control-next"); 

let n = 0;

function changeImg() {
    for(let img of imgs) {
        img.style.display = "none";
    }
    imgs[n].style.display = "block";
}
changeImg();

prevBtn.addEventListener("click", (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length-1;
    }
    changeImg();
});

nextBtn.addEventListener("click", (e) => {
    if (n < imgs.length-1) {
        n++;
    } else {
        n = 0;
    }
    changeImg();
});