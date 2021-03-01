// $(document).ready(function(){
//     $('.slider').slick({

//     });
//   });

$(function () {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 700,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1175,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.menu_btn').on('click', function () {
        $('.menu_list').toggleClass('menu_list-active')
    });


});
