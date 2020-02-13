//import 'bulma/css/bulma.css';
//require('bulma/css/bulma.css');
require('./scss/style.scss'); 
//require('./scss/style_test.scss'); 

//import Button from '@material-ui/core/Button';

console.log('%c Web development by In0rbit @ planet Earth 🌎', 'background: #222; color: #bada55');

import AOS from 'aos';
import $ from "jquery";

var easyScroll = require('easy-scroll');

AOS.init();


var second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

var countDown = new Date('Jun 27, 2020 00:00:00').getTime(),
    x = setInterval(function() {

      var now = new Date().getTime(),
          distance = countDown - now;

        $('.days').html(Math.floor(distance / (day)));
        $('.hours').html (Math.floor((distance % (day)) / (hour)));
        $('.minutes').html (Math.floor((distance % (hour)) / (minute)));
        $('.seconds').html (Math.floor((distance % (minute)) / second));
      
      // do something later when date is reached
      // if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S THE DAY!;
      // }

    }, second);



var potvrdaRadios = document.getElementsByName('potvrda');
for (var test = 0; test < potvrdaRadios.length; test++) {
  potvrdaRadios[test].onclick = function(e){

    if ($("input[name='potvrda']").is(':checked')) {
      console.log($(e.target).val());
      if($( e.target ).val() == 'da'){
        $('.potvrda-forma').addClass('show-form');
      }else{
        $('.potvrda-forma').removeClass('show-form');
      }
      var isTestclicked = $('[aria-label="potvrda"]').find('.radbtn').hasClass( "clicked" );
      //console.log($(e.target).parent().parent());
      //console.log(isTestclicked);
      if(isTestclicked){
        //console.log('IMA KLIKNUTO');
        $('[aria-label="potvrda"]').find('.radbtn').removeClass( "clicked" );
        $( e.target ).next().toggleClass('clicked');
        
        
      }else{
        //console.log( $( e.target ).value);
        console.log('value: ' + $( e.target ).value);
        
        $( e.target ).next().toggleClass('clicked');
      }
    }
    
  }
  
}

var drustvoRadios = document.getElementsByName('drustvo');
for (var t = 0; t < drustvoRadios.length; t++) {
  drustvoRadios[t].onclick = function(e){

    if ($("input[name='drustvo']").is(':checked')) {
      console.log($(e.target).val());
      if($( e.target ).val() == 'da'){
        $('.drustvo-forma').addClass('show-form');
      }else{
        $('.drustvo-forma').removeClass('show-form');
      }
      var isTestclicked = $('[aria-label="drustvo"]').find('.radbtn').hasClass( "clicked" );
      //console.log($(e.target).parent().parent());
      //console.log(isTestclicked);
      if(isTestclicked){
        //console.log('IMA KLIKNUTO');
        $('[aria-label="drustvo"]').find('.radbtn').removeClass( "clicked" );
        $( e.target ).next().toggleClass('clicked');
        
        
      }else{
        //console.log( $( e.target ).value);
        console.log('value: ' + $( e.target ).value);
        
        $( e.target ).next().toggleClass('clicked');
      }
    }
    
  }
  
}


$('.add_people').on("click", function(event) {
  var contents = this.parentNode.innerHTML;
  var rows = $(this).parent().find('section').length;
  var naziv;
  if($('body').hasClass("hr")){
  //if($('.hr').is(":visible")){
    naziv = 'Ime i prezime';
  } else{
    naziv = 'Name & Surname';
  }
  //console.log($(this).parent().find('section').length);
  var row = '<section class="form-element form-input extraname">';
  row += '<input type="text" class="form-element-field" placeholder=" " name="extraName_'+rows+'"/>';
  row += '<div class="form-element-bar"></div>';
  row += '<label class="form-element-label">'+ naziv + '</label>';
  row += '</section>';
  row = $(row);
  $(this).before(row);
});




$('.hrv').on("click", function(e) {
  console.log('hrv');
  $("body").css("overflow", "initial");
  e.preventDefault();
  //$('.hr').fadeIn(1000);
  $('#overlay').fadeOut(800);
});

$('.eng').on("click", function(e) {
  console.log('eng');
  e.preventDefault();
  window.location.href = '/en.html';

  //$('.en').fadeIn(1000);
  //$('#overlay').fadeOut(800);
});



  $('.form-card').on("submit", function(e) {
    console.log('submit');
    e.preventDefault();

    
    $.ajax({
      type: "POST",
      url: "form.php",
      data: $(this).serialize(),
      success: function(data) {
        console.log("OUR FORM SUBMITTED CORRECTLY");
        if(data === 'true'){
          console.log('data true');
          $('.form-content').fadeOut();
          $('.form-info').fadeIn();
          $('.reply').fadeOut();
          $(document.body).animate({
            'scrollTop':   $('#formStart').offset().top
          }, 2000);

          
          
        }else{

          $('.form-error').fadeIn();
          $('.form-info').fadeOut();
          console.log('data false');
          
        }
      },
      error: function(){
        //dev
        // $('.form-content').fadeOut();
        // $('.reply').fadeOut();
        // $('.form-info').fadeIn(1500);
        // $(document.body).animate({
        //   'scrollTop':   $('#formStart').offset().top
        // }, 2000);



        //prod
        // $('.form-error').fadeIn();
        // $('.form-info').fadeOut();
      }
    })
});




