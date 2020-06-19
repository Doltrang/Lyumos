$("#get-notes").click(function () {
    $('html,body').animate({
        scrollTop: $("#down-pdf").offset().top
    }, 'slow');
});

$('a[href$=".png"]').attr('download', '').attr('target', '_blank');
