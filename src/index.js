//import 'bulma/css/bulma.css';
//require('bulma/css/bulma.css');
require('./scss/style.scss'); 

//import Button from '@material-ui/core/Button';

console.log('test')

//import img from './img/map.jpg';
//console.log(img)


import AOS from 'aos';
import $ from "jquery";
//import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Jun 27, 2020 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second);

    const potvrdaForma = document.getElementById("potvrda-forma");
    var potvrda_radios = document.getElementsByName('potvrda');
    for (let index = 0; index < potvrda_radios.length; index++) {
      potvrda_radios[index].onclick = function(){
        console.log(this.value);
        if(this.value == 'da'){
          potvrdaForma.classList.add('show-form');
        }else{
          potvrdaForma.classList.remove('show-form');
        }
      }
      
    }


const drustvo = document.getElementById("drustvo");
const drustvoForma = document.getElementById("drustvo-forma");

var radios = document.getElementsByName('drustvo');
for(var i = 0; i < radios.length; i++){
    radios[i].onclick = function(){
      console.log(this.value);
      if(this.value == 'da'){
        drustvoForma.classList.add('show-form');
      }else{
        drustvoForma.classList.remove('show-form');
      }
    }
}


const add_people_btn = document.getElementById("add_people");
add_people_btn.addEventListener('click', add_people);

function add_people(event) {
  let contents = this.parentNode.innerHTML;
  var rows = $(this).parent().find('section').length;
  console.log($(this).parent().find('section').length);
  var row = '<section class="form-element form-input extraname">';
  row += '<input type="text" class="form-element-field" name="extraName_'+rows+'" placeholder="Ime i Prezime"/>';
  row += '<div class="form-element-bar"></div>';
  row += '</section>';
  row = $(row);
  $(this).before(row);
  
}


