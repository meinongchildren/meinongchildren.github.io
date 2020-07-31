$(".btn-primary").click(function(){
        $(".collapse").collapse('toggle');
    });
$(".btn-success").click(function(){
    $(".collapse").collapse('show');
});
$(".btn-warning").click(function(){
    $(".collapse").collapse('hide');
});


$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });