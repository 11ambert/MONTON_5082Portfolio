document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    var modalCaption = document.getElementById("modal-caption");
    var images = document.querySelectorAll(".clickable");
    var close = document.getElementsByClassName("close")[0];

    images.forEach(image => {
        image.onclick = function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            modalCaption.textContent = this.alt;
        }
    });

    close.onclick = function() {
        modal.style.display = "none";
    }

    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
