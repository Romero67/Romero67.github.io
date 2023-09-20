function initSlider(){
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
}

function initMenuLateral(){
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
}

function initShowHideHeader(){
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) {
      $('.header').addClass('scrolled');
      $('.header-mobile').addClass('scrolled');
    } else {
      $('.header').removeClass('scrolled');
      $('.header-mobile').removeClass('scrolled');
    }
  });
}

// Función para limitar los caracteres y mostrar el contador
function limitarCaracteres() {
  const maxCaracteres = 500; // Número máximo de caracteres
  const $textarea = $('#form_mensaje');
  const $contador = $('.form-contador-text');
  
  $textarea.on('input', function() {
    const caracteresRestantes = maxCaracteres - $textarea.val().length;
    
    if (caracteresRestantes >= 0) {
      $contador.text(`${caracteresRestantes}/${maxCaracteres}`);
    } else {
      $textarea.val($textarea.val().slice(0, maxCaracteres));
    }
  });
}

function showErrorMessage(msg){
  const $msjError = $('.form-msj-error');
  $msjError.text(msg);
  setTimeout(() =>{
    $msjError.text('');
  }, 3000)
}

function showSuccesMessage(msg){
  const $msjError = $('.form-msj-error');
  $msjError.text(msg);
  setTimeout(() =>{
    $msjError.text('');
  }, 3000)
}

function validarFormContacto(){
  if(!$('#form_nombre').val() || $('#form_nombre').val() == ''){
    showErrorMessage("Completar campo nombre, por favor");
    return false;
  }
  if(!$('#form_mail').val() || $('#form_mail').val() == ''){
    showErrorMessage("Completar campo mail, por favor");
    return false;
  }
  if(!$('#form_mensaje').val() || $('#form_mensaje').val() == ''){
    showErrorMessage("Escribe el mensaje, por favor");
    return false;
  }

  return true;
}

function limpiarForm(){
  $('#form_nombre').val('');
  $('#form_mail').val('');
  $('#form_mensaje').val('');
}

function initFormContact(){
  limitarCaracteres();
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    if(!validarFormContacto()) return;

    $('#contact-form').off('submit');

    this.contact_number.value = Math.random() * 100000 | 0;

    emailjs.sendForm('service_pkqjivo', 'template_dv1q3cb',this)
    .then(function() {
        limpiarForm();
        showSuccesMessage('¡Se ha enviado correctamente!');
    }, function(error) {
        showErrorMessage('Ha ocurrido un error');
        initFormContact();
    });
  });
}

$(document).ready(function(){
  emailjs.init('hMBEO4TAW2Lc_EqOs');
  initSlider();
  initMenuLateral();
  initShowHideHeader();
  initFormContact();
  


})