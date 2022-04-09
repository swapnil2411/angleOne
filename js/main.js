// mobile Navbar

$('.hamburger').on('click', function(){
    $('.mobile_navbar').addClass('active');
})

$('.close_mobile_menu').on('click', function(){
    $('.mobile_navbar').removeClass('active');
    $('.collapse').removeClass('show');
})

// search visible

$('.mobile_search .btn').on('click', function(){
    $('.top_header_right').addClass('active');
})


$('.close_search_box').on('click', function(){
    $('.top_header_right').removeClass('active');
})



// Banner Slider
$('#banner_slider').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    autoplay: true,
    autoplaySpeed: 3000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1
})

//Testimonial Slider
$('#testimonial_slider').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    autoplay: true,
    autoplaySpeed: 3000,
    items:1
})

//Tab Content
$('.tab_panels .tabs li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    var panelToShow = $(this).attr('rel');
    $('.tab_panels .panel.active').fadeOut(300, function(){
        $(this).removeClass('active');
        $('#' + panelToShow).fadeIn(300, function(){
            $(this).addClass('active');
        })
    })
})


//mobile accordion
$('.has_children').on('click', function(){
    // alert('yes')

    var $parent = $(this).parent().find('.collapse');
    $parent.toggleClass('show').parent().siblings().find('.collapse').removeClass('show');

    // $('.collapse').
})