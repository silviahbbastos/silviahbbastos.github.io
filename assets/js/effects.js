var toggled = false;

$("#dropdown").click(function(){
    $("#dropdown_links").slideToggle("slow");
    if(toggled)
        toggled = false;
    else
        toggled = true;
    //deslizar página ao abrir
    if(toggled){
        $('html').animate({
            scrollTop: $("#dropdown").offset().top
        }, 500);
    }
    //se está aberto
    if(toggled){
        $("#dropdown h2").text("30 days, 30 emotions \u00A0 \u25b4");
    }
    //se está fechado
    else {
        $("#dropdown h2").text("30 days, 30 emotions \u00A0 \u25bf");
    };
    
});