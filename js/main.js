$(document).ready(function(){

  //Slider
  if(window.location.href.indexOf('index') > -1){
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: false,
      slideWidth: 1200,
      responsive: true
    });
  }


  // Posts
  if(window.location.href.indexOf('index') > -1){
    moment.locale('es-us');

  var posts = [
    {
      title: 'Prueba de título 1',
      date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del '+ moment().format('YYYY'),
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Prueba de título 2',
      date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del '+ moment().format('YYYY'),
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Prueba de título 3',
      date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del '+ moment().format('YYYY'),
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Prueba de título 4',
      date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del '+ moment().format('YYYY'),
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

 posts.forEach((item, index) =>{
   var post = `
   <article class="post">
     <h2>${item.title}</h2>
     <span class="date">${item.date}</span>
     <p>
       ${item.content}
     </p>

     <a href="#" class="button-more">Leer más</a>
   </article>
   `;

   $('#posts').append(post);
 });
}

 /*Selector de tema*/
var theme = $('#theme');

 $('#to-green').click(function(){
   theme.attr('href', 'css/green.css')
 })

 $('#to-blue').click(function(){
   theme.attr('href', 'css/blue.css')
 })

 $('#to-red').click(function(){
   theme.attr('href', 'css/red.css')
 })

//Scroll arriba de la web
$('.subir').click(function(e){

  e.preventDefault();

  $('html, body').animate({
    scrollTop: 0
  }, 500)

  return false;
});

//Login falso
$('#login form').submit(function(){

  var form_name = $('#form_name').val();

  localStorage.setItem('form_name', form_name);

});

var form_namee = localStorage.getItem('form_name');

if(form_namee!=null && form_namee!='undefined'){
  var about_parrafo = $('#about p');

  $('#about p').html('<br><strong>Bienvenido ' + form_namee + '</strong>');

  about_parrafo.append('<a href="#" id="logout">Cerrar sesión</a>');

  $('#login').hide();

  $('#logout').click(function(){
    localStorage.clear();
    location.reload();
  });
}

//Acordeon
if(window.location.href.indexOf('about') > -1){
  $('#acordeon').accordion();
}

//Reloj
if(window.location.href.indexOf('reloj') > -1){

  setInterval(function(){
    var reloj = moment().format('hh:mm:ss');
    $('#reloj').html(reloj);
  }, 1000);

}

//Validación

if(window.location.href.indexOf('contact') > -1){

  $('form input[name="date"]').datepicker({
    dateFormat: 'dd-mm-yy'
  });

  $.validate({
    lang : 'es',
    errorMessagePosition: 'top',
    scrollToTopOnError: true 
  });

}



});
