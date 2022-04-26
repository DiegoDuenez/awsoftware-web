

abastosApp = true
combugasApp = false
digitalApp = false
powerForce = false
combugasTanques = false
var intervalAbastos
var intervalCombugas

$(document).ready(function(){

    /*if(abastosApp){
        cambiarAbastosApp()
    }*/
   
})


$('#abastos').click(function(){
    clearInterval(intervalCombugas)
    $('#app_abastos').fadeIn('fast')
    $('#app_combugas').css('display','none')
    cambiarAbastosApp()
})

$('#combugasIos').click(function(){
    clearInterval(intervalAbastos)
    $('#app_combugas').fadeIn('fast')
    $('#app_abastos').css('display','none')
    cambiarCombugasIosApp()
    abastosApp = false
})

function cambiarAbastosApp() {
    let i =0; 

    let imagenes = [
        'url(assets/img/proyectos/apps/ABASTOS-SUPER1.png)',
        'url(assets/img/proyectos/apps/ABASTOS-SUPER2.png)'
    ];

    var imagen =  $("#app_abastos.img__background")

    intervalAbastos = setInterval(function () {
       
        imagen.fadeOut(1000, function () {
        //imagen.css('background-image', 'linear-gradient(to left, rgba(245, 246, 252, 0),rgba(30, 61, 9, 0.699)), '  + imagenes[i++]);
        imagen.css('background-image', ''  + imagenes[i++]);
        imagen.fadeIn(1000);
          
        });
       
    if(i == imagenes.length)
        i = 0;
    }, 3000);            

}

function cambiarCombugasIosApp() {
    let i =0; 

    let imagenes = [
        'url(assets/img/proyectos/apps/COMBUGAS-IOS1.png)',
        'url(assets/img/proyectos/apps/COMBUGAS-IOS2.png)',
        'url(assets/img/proyectos/apps/COMBUGAS-IOS3.png)',
    ];

    var imagen =  $("#app_combugas.img__background")

    intervalCombugas = setInterval(function () {
       
        imagen.fadeOut(1000, function () {
        //imagen.css('background-image', 'linear-gradient(to left, rgba(245, 246, 252, 0),rgba(30, 61, 9, 0.699)), '  + imagenes[i++]);
        imagen.css('background-image', ''  + imagenes[i++]);
        imagen.fadeIn(1000);
          
    });
       
    if(i == imagenes.length)
        i = 0;
    }, 3000);            

}





/*
var i = 0;
setInterval(fadeDivs, 3000);

function fadeDivs() {

    $('.fullscreen__content img').fadeOut(400, function(){
        $(this).attr('src', imagesAbastos[i]).fadeIn(100);
    })
    i++;
}
*/

/* $('.img').each(function(index) {
    $(this).attr('src',imagesAbastos[index]).fadeIn('slow').delay(500).fadeOut('slow');
});*/






/*
$('#abastos').click(function(){
    images = [
        'assets/img/proyectos/apps/ABASTOS-SUPER1.png',
        'assets/img/proyectos/apps/ABASTOS-SUPER2.png'
    ]

    $("#image").fadeTo(1000,0.30, function() {
        $("#image").attr("src",images[1]);
        $("#image").on('load', function(){
            $("#image").fadeTo(500,1);
        });
      
    });
    return false;
})*/