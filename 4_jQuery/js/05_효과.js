// 1. show, hide, toggle
$('#show').click(function() {
    $('#img').show(1000, 'swing');
});

$('#hide').click(function() {
    $('#img').hide(1000, 'swing');
});

$('#toggle').click(function() {
    $('#img').toggle(1000, 'swing');
});

// 2. fadeIn, fadeOut, fadeToggle
$('#fadeIn').click(function() {
    $('#img').fadeIn(3000);
});

$('#fadeOut').click(function() {
    $('#img').fadeOut(3000);
});

$('#fadeToggle').click(function() {
    $('#img').fadeToggle(3000);
});

$('#img').hover(
    function() {
        $(this).fadeTo(1000, 0.5);
    },

    function() {
        $(this).fadeTo(1000, 1);
    }
)

// 3. slideDown, slideUp, slideToggle
$('.menu').click(function(e) {
    const content = $(e.target).next();
    // if(content.css('display') === 'none') {
    //     content.slideDown(500);
    // } else {
    //     content.slideUp(500);
    // }

    // content.slideToggle(500);

    $('.contents').slideUp();
    content.slideDown(500);
});