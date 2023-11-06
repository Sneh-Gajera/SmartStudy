
// btn_top

$(document).ready(function () {
    $(window).scroll(function () {
        var x = $(document).scrollTop();
        if (x > 300) {
            $("#bottom_to_top").show();
        }
        else {
            $("#bottom_to_top").hide();
        }
    });

    $("#bottom_to_top").click(function () {
        $(window).scrollTop(0);
    });
});
//counter js

$(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
})


// aos
 AOS.init({
    offset:300,
    duration:2000
 });
// filter search

$(document).ready(function(){
    $("#myserach").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".lec").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  






// faq

$(document).ready(function () {
    $(".head").click(function () {
        $(".para").slideDown('slow');
        $(".para1").slideUp('slow');
        $(".para2").slideUp('slow');
        $(".para3").slideUp('slow');
        $(".para4").slideUp('slow');
    })

    $(".head1").click(function () {
        $(".para1").slideDown('slow');
        $(".para").slideUp("slow");
        $(".para2").slideUp("slow");
        $(".para3").slideUp('slow');
        $(".para4").slideUp('slow');
    })

    $(".head2").click(function () {
        $(".para2").slideDown('slow');
        $(".para").slideUp("slow");
        $(".para1").slideUp("slow");
        $(".para3").slideUp('slow');
        $(".para4").slideUp('slow');
    })
    $(".head3").click(function () {
        $(".para3").slideDown('slow');
        $(".para").slideUp("slow");
        $(".para1").slideUp("slow");
        $(".para2").slideUp('slow');
        $(".para4").slideUp('slow');
    })
})



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplaySpeed:1000,
    // navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

