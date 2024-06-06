// JavaScript for Lightbox
var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightbox-img");
var captionText = document.getElementById("lightbox-caption");

function openLightbox(img) {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    captionText.innerHTML = img.alt;
}

document.getElementsByClassName("close-lightbox")[0].onclick = function() { 
    lightbox.style.display = "none";
}

lightbox.onclick = function(event) {
    if (event.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
}
