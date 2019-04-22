var makeItGo = (loc) => {
    var el = $(`#${loc}`);
    var np = $(el).offset();
    $('html, body').stop().animate({ scrollTop: np.top }, 500);

}

$("document").ready(
    () => {
        $(".sidebar div a").on("click", (e) => {
            makeItGo(e.target.dataset.loc);
        });
    }
);
