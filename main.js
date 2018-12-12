/////BG SLIDER
const allimg = $(".img");
let currentimg = 0;
function changeimg(){
    $(allimg[currentimg]).fadeOut(1000, "linear", function(){
        if (currentimg == allimg.length - 1) {
            currentimg = 0;
        } else {
            currentimg++;
        }
        $(allimg[currentimg]).fadeIn(1000, "linear", function(){

            setTimeout(changeimg, 3000);  
        });
    });   
}
setTimeout(changeimg, 3000); 
/////////////

////FADE IN PANEL ON CLICK
const panel = $("#panel");
$("li:first-child").on("click", function(){
    $(panel).fadeToggle(1000);
})
////////////

//////////// EXPAND SLIDE MENU ON CLICK
$("#panel ul").slideToggle("slow");
$("#rozwin").on("click",function(){
    $("#panel ul").slideToggle(1000);


    var text = $('#rozwin').text();
    $('#rozwin').text(text == "Zwiń" ? "Rozwiń" : "Zwiń");
})
///////////

///////////// ANIMATE ON SCROLL EFFECT
const textscroll = $('.barbetween span');
let scrollState = 'top';

$(window).scroll(function(){ 

    let scrollPos = $(window).scrollTop(); ///position scroll top
    ///if position scroll top > position of grabbed element do...
    if( ( scrollPos > textscroll.offset().top/5) && ( scrollState === 'top' ) ) {
        $(textscroll).stop().animate({"left":"50%", "opacity":"1"}, 1500);
        scrollState = 'scrolled';
    }       
    else if( ( scrollPos < textscroll.offset().top/5 ) && ( scrollState === 'scrolled' ) ) {
        $(textscroll).stop().animate({"left":"20%", "opacity":"0"}, 1000);
        scrollState = 'top';
    }

});