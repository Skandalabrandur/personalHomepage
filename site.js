var currentOffset = 0;
var makeItGo = (loc) => {
    var el = $(`#${loc}`);
    var np = $(el).offset();
        $('html, body').stop().animate({ scrollTop: np.top }, Math.max(Math.abs(np.top - currentOffset) / 3, 500));

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
    currentOffset = $(this).scrollTop();
    if(currentOffset + 10 >= $('#projects-block').position().top){
        $(".sub-level-nav").css("display", "flex").animate({marginLeft: "0px"});
    }
})

