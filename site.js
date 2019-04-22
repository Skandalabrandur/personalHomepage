var makeItGo = (loc) => {
    var el = $(`#${loc}`);
    var np = $(el).offset();
    $('html, body').stop().animate({ scrollTop: np.top }, 500);

}


$(document).ready(
    () => {
        $(".sidebar div a").on("click", (e) => {
            makeItGo(e.target.dataset.loc);
        });

        $(".skill-child").each(function() {
            $(this).children().css("width", $(this).data("prog") + "%");
        });

    }

);

$(document).on('scroll', () => {
    if($(this).scrollTop() + 10 >= $('#projects-block').position().top){
        $(".sub-level-nav").css("display", "flex").animate({marginLeft: "0px"});
    }
})

