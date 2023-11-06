// filter js
$(document).ready(function () {
    $('.list').click(function () {
        var change = $(this).attr('data-filter');

        if (change == 'All') {
            $('.gallerylist').show('1000');
        }
        else {
            $('.gallerylist').not('.' + change).hide('1000');
            $('.gallerylist').filter('.' + change).show('1000');
        }
    })

    $('.list').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
})