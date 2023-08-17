$(document).ready(function(){
 $('.tech-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  responsive: [
   {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4
    }
   },
   {
    breakpoint: 768,
    settings: {
      slidesToShow: 3
    }
   }
  ]
 });

 $('#open-menu-btn').click(function(){
  $('.menu-lateral').css('left', '0px');
  $('body').css('overflow', 'hidden');
 })
 $('#close-menu-btn').click(function(){
  $('.menu-lateral').css('left', '-100%');
  $('body').css('overflow', 'auto');
 })
 $('#background-close').click(function(){
  $('.menu-lateral').css('left', '-100%');
  $('body').css('overflow', 'auto');
 })

 $(window).on('scroll', function() {
  if ($(window).scrollTop() > 0) {
    $('.header').addClass('scrolled');
    $('.header-mobile').addClass('scrolled');
  } else {
    $('.header').removeClass('scrolled');
    $('.header-mobile').removeClass('scrolled');
  }
 });


})