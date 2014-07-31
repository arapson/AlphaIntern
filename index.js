
$( document ).ready(function() {
    console.log( "ready!" );

    $('.col-md-3 p').slideUp(0);

    $('.col-md-3').on('click', function(event){
        console.log(this);
        $(event.currentTarget).find("p").slideDown(500);
        console.log(event)
    });

    $('.col-md-3').on('click', function(event){
        $(event.currentTarget).find(".btn").text('weeee!');
    })
});
