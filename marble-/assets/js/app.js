$(document).ready(function(){
  $('.bars').click(function(){
    $('.navbar_nav').slideToggle()
  })
  $(window).on('scroll', function(){
    var scroll = $(this).scrollTop();
    if (scroll > 400) {
      $('.back_top').fadeIn()
    }
    else {
      $('.back_top').fadeOut()
    }
  })
  $('.back_top').click(function(){
    $('html, body').animate({scrollTop: 0})
  })
})


new WOW().init();