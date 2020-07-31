function display_life() {
    var l = document.getElementById("life_log");
    l.style.display = "block";
    var p = document.getElementById("picture_book");
    p.style.display = "none";  
}

function display_book() {
    var l = document.getElementById("Page1");
    l.style.display = "none";
    var p = document.getElementById("picture_book");
    p.style.display = "block";  
}

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });