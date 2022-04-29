
/*

var cliente = 'abastos'

var currentBackground = 0;
var limit = 1
var timeOutTime = 5000
var proyecto = '#apps_imagenes.proyectos__imagenes'

var backgrounds = [
  "assets/img/proyectos/apps/ABASTOS-SUPER1.png",
  "assets/img/proyectos/apps/ABASTOS-SUPER2.png"
]

$('.proyectos__body').on('click','.proyectos__circles *', function() {
  cliente = $(this).attr('id')
  console.log(cliente)

  if(cliente == 'abastos'){
    limit = 1
    backgrounds[0] = "assets/img/proyectos/apps/ABASTOS-SUPER1.png"
    backgrounds[1] =  "assets/img/proyectos/apps/ABASTOS-SUPER2.png"
  }
  else if(cliente == 'combugasIos'){
    limit = 2
    backgrounds[0] = "assets/img/proyectos/apps/COMBUGAS-IOS1.png"
    backgrounds[1] =  "assets/img/proyectos/apps/COMBUGAS-IOS2.png"
    backgrounds[2] =  "assets/img/proyectos/apps/COMBUGAS-IOS3.png"
    timeOutTime = 1
  }

})







function changeBackground() {

  id = proyecto
  currentBackground = currentBackground + 1;
  
  if(currentBackground > limit) currentBackground = 0;

    $(id).fadeOut(500,function() {
        $(id).css({
            'background-image' : "url('" + backgrounds[currentBackground] + "')"
        });
        $(id).fadeIn(2000);
    });

 setTimeout(changeBackground, timeOutTime);
}

$(document).ready(function() {
  setTimeout(changeBackground, timeOutTime);        
});

*/
