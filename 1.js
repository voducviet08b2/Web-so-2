document.addEventListener("DOMContentLoaded", function() {
    var container = document.querySelectorAll(".Container");
    console.log(container[1].offsetTop);


    document.addEventListener("scroll", function() {
        for (i = 0; i < container.length; i++) {
            if (window.pageYOffset >= container[i].offsetTop - 600) {
                container[i].classList.add("up-effect");
            }
        }
    })
})