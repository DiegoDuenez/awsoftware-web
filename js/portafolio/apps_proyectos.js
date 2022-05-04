/*
|  ----------------------------------------------------------------------------------
|   @Portafolio (Apps)
|  ----------------------------------------------------------------------------------
|
*/



var clienteViewApps = 1;

var proyecto = '#apps_imagenes.proyectos__imagenes'

var descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihilo.'
var cliente = `<span class="proyectos__text--azul">01 - CLIENTE:</span> Abastos Super </p>`


$('.siguienteClienteApps').click(function(){

  if(clienteViewApps == 1){
    
    descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihilo.'
    cliente = `<span class="proyectos__text--azul">02 - CLIENTE:</span> Combugas </p>`

    var img1 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/COMBUGAS-IOS1.png" alt="Abastos" class="slider__img" >
      </div>
    </div> `

    var img2 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/COMBUGAS-IOS2.png" alt="CombugasIOS" class="slider__img" >
      </div>
    </div> `

    var img3 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/COMBUGAS-IOS3.png" alt="CombugasIOS" class="slider__img" >
      </div>
    </div> `

    $('.slider').slick('slickAdd', img1)
    $('.slider').slick('slickAdd', img2)
    $('.slider').slick('slickAdd', img3)
  

    if($(".slider").slick("getSlick").slideCount == 6){
      for(let i = 0; i < 3; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }
    else if($(".slider").slick("getSlick").slideCount == 5){
      for(let i = 0; i < 2; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }else if($(".slider").slick("getSlick").slideCount == 4){
      for(let i = 0; i < 2; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }

    clienteViewApps = 2

    $('#apps_proyectos_descripcion').fadeOut(500, function() {
    }).fadeIn(500);
  
    $('#apps_proyectos_cliente').fadeTo(500,0.10, function() {
        $('#apps_proyectos_descripcion').empty().show()
        $('#apps_proyectos_descripcion').prepend(`<p class="proyectos__text" id="apps_proyectos_cliente">${cliente}</p> ` + descripcion)
    }).fadeTo(500,1);
  
    $("#apps_proyectos_img").fadeTo(500,0.10, function() {
        $('#apps_proyectos_img').attr("src", img);
    }).fadeTo(500,1);
    return false;

  }
  else if(clienteViewApps == 2){

    descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihilo.'
    cliente = `<span class="proyectos__text--azul">03 - CLIENTE:</span> Digital Company </p>`

    var img1 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/DIGITAL-COMPANY1.png" alt="Digital" class="slider__img" >
      </div>
    </div> `

    var img2 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/DIGITAL-COMPANY2.png" alt="Digtial" class="slider__img" >
      </div>
    </div> `

    $('.slider').slick('slickAdd', img1)
    $('.slider').slick('slickAdd', img2)

  
    if($(".slider").slick("getSlick").slideCount == 6){
      for(let i = 0; i < 3; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }
    else if($(".slider").slick("getSlick").slideCount == 5){
      for(let i = 0; i < 3; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }else if($(".slider").slick("getSlick").slideCount == 4){
      for(let i = 0; i < 2; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }

    clienteViewApps = 3

    $('#apps_proyectos_descripcion').fadeOut(500, function() {
    }).fadeIn(500);
  
    $('#apps_proyectos_cliente').fadeTo(500,0.10, function() {
        $('#apps_proyectos_descripcion').empty().show()
        $('#apps_proyectos_descripcion').prepend(`<p class="proyectos__text" id="apps_proyectos_cliente">${cliente}</p> ` + descripcion)
    }).fadeTo(500,1);
  
    $("#apps_proyectos_img").fadeTo(500,0.10, function() {
        $('#apps_proyectos_img').attr("src", img);
    }).fadeTo(500,1);
    return false;

  }
  else if(clienteViewApps == 3){

    descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihilo.'
    cliente = `<span class="proyectos__text--azul">04 - CLIENTE:</span> Power Force </p>`

    var img1 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/POWERFORCE1.png" alt="PowerForce" class="slider__img" >
      </div>
    </div> `

    var img2 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/POWERFORCE2.png" alt="PowerForce" class="slider__img" >
      </div>
    </div> `

    $('.slider').slick('slickAdd', img1)
    $('.slider').slick('slickAdd', img2)

  
    if($(".slider").slick("getSlick").slideCount == 6){
      for(let i = 0; i < 3; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }
    else if($(".slider").slick("getSlick").slideCount == 5){
      for(let i = 0; i < 3; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }else if($(".slider").slick("getSlick").slideCount == 4){
      for(let i = 0; i < 2; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }

    clienteViewApps = 4

    $('#apps_proyectos_descripcion').fadeOut(500, function() {
    }).fadeIn(500);
  
    $('#apps_proyectos_cliente').fadeTo(500,0.10, function() {
        $('#apps_proyectos_descripcion').empty().show()
        $('#apps_proyectos_descripcion').prepend(`<p class="proyectos__text" id="apps_proyectos_cliente">${cliente}</p> ` + descripcion)
    }).fadeTo(500,1);
  
    $("#apps_proyectos_img").fadeTo(500,0.10, function() {
        $('#apps_proyectos_img').attr("src", img);
    }).fadeTo(500,1);
    return false;

  }
  else if(clienteViewApps == 4){

    descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihilo.'
    cliente = `<span class="proyectos__text--azul">05 - CLIENTE:</span> Combugas </p>`

    var img1 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/TANQUES-COMBUGAS1.png" alt="Combugas Inventarios" class="slider__img" >
      </div>
    </div> `

    var img2 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/TANQUES-COMBUGAS2.png" alt="Combugas Inventarios" class="slider__img" >
      </div>
    </div> `

    var img3 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/TANQUES-COMBUGAS3.png" alt="Combugas Inventarios" class="slider__img" >
      </div>
    </div> `


      $('.slider').slick('slickAdd', img1)
      $('.slider').slick('slickAdd', img2)
      $('.slider').slick('slickAdd', img3)


    if($(".slider").slick("getSlick").slideCount == 6){
      for(let i = 0; i < 3; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }
    else if($(".slider").slick("getSlick").slideCount == 5){
      for(let i = 0; i < 2; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }else if($(".slider").slick("getSlick").slideCount == 4){
      for(let i = 0; i < 2; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }

    clienteViewApps = 5

    $('#apps_proyectos_descripcion').fadeOut(500, function() {
    }).fadeIn(500);
  
    $('#apps_proyectos_cliente').fadeTo(500,0.10, function() {
        $('#apps_proyectos_descripcion').empty().show()
        $('#apps_proyectos_descripcion').prepend(`<p class="proyectos__text" id="apps_proyectos_cliente">${cliente}</p> ` + descripcion)
    }).fadeTo(500,1);
  
    $("#apps_proyectos_img").fadeTo(500,0.10, function() {
        $('#apps_proyectos_img').attr("src", img);
    }).fadeTo(500,1);
    return false;

  }
  else if(clienteViewApps == 5){

    descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihilo.'
    cliente = `<span class="proyectos__text--azul">06 - CLIENTE:</span> Combugas </p>`

    var img1 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/tableta/TABLETA-1.png" alt="Combugas" class="slider__img" >
      </div>
    </div> `

    var img2 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/tableta/TABLETA-2.png" alt="Combugas" class="slider__img" >
      </div>
    </div> `

    var img3 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/tableta/TABLETA-3.png" alt="Combugas" class="slider__img" >
      </div>
    </div> `

    $('.slider').slick('slickAdd', img1)
      $('.slider').slick('slickAdd', img2)
      $('.slider').slick('slickAdd', img3)


    if($(".slider").slick("getSlick").slideCount == 6){
      for(let i = 0; i < 3; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }
    else if($(".slider").slick("getSlick").slideCount == 5){
      for(let i = 0; i < 2; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }else if($(".slider").slick("getSlick").slideCount == 4){
      for(let i = 0; i < 2; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }

    clienteViewApps = 6

    $('#apps_proyectos_descripcion').fadeOut(500, function() {
    }).fadeIn(500);
  
    $('#apps_proyectos_cliente').fadeTo(500,0.10, function() {
        $('#apps_proyectos_descripcion').empty().show()
        $('#apps_proyectos_descripcion').prepend(`<p class="proyectos__text" id="apps_proyectos_cliente">${cliente}</p> ` + descripcion)
    }).fadeTo(500,1);
  
    $("#apps_proyectos_img").fadeTo(500,0.10, function() {
        $('#apps_proyectos_img').attr("src", img);
    }).fadeTo(500,1);
    return false;

  }

    
  

})


$('.anteriorClienteApps').click(function(){


  if(clienteViewApps == 6){

    descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihilo.'
    cliente = `<span class="proyectos__text--azul">05 - CLIENTE:</span> Combugas </p>`

    var img1 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/TANQUES-COMBUGAS1.png" alt="Combugas Inventarios" class="slider__img" >
      </div>
    </div> `

    var img2 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/TANQUES-COMBUGAS2.png" alt="Combugas Inventarios" class="slider__img" >
      </div>
    </div> `

    var img3 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/TANQUES-COMBUGAS3.png" alt="Combugas Inventarios" class="slider__img" >
      </div>
    </div> `


      $('.slider').slick('slickAdd', img1)
      $('.slider').slick('slickAdd', img2)
      $('.slider').slick('slickAdd', img3)


    if($(".slider").slick("getSlick").slideCount == 6){
      for(let i = 0; i < 3; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }
    else if($(".slider").slick("getSlick").slideCount == 5){
      for(let i = 0; i < 2; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }else if($(".slider").slick("getSlick").slideCount == 4){
      for(let i = 0; i < 2; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }

    clienteViewApps = 5

    $('#apps_proyectos_descripcion').fadeOut(500, function() {
    }).fadeIn(500);
  
    $('#apps_proyectos_cliente').fadeTo(500,0.10, function() {
        $('#apps_proyectos_descripcion').empty().show()
        $('#apps_proyectos_descripcion').prepend(`<p class="proyectos__text" id="apps_proyectos_cliente">${cliente}</p> ` + descripcion)
    }).fadeTo(500,1);
  
    $("#apps_proyectos_img").fadeTo(500,0.10, function() {
        $('#apps_proyectos_img').attr("src", img);
    }).fadeTo(500,1);
    return false;

  }
  else if(clienteViewApps == 5){

    descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihilo.'
    cliente = `<span class="proyectos__text--azul">04 - CLIENTE:</span> Power Force </p>`

    var img1 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/POWERFORCE1.png" alt="PowerForce" class="slider__img" >
      </div>
    </div> `

    var img2 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/POWERFORCE2.png" alt="PowerForce" class="slider__img" >
      </div>
    </div> `

    $('.slider').slick('slickAdd', img1)
    $('.slider').slick('slickAdd', img2)

  
    if($(".slider").slick("getSlick").slideCount == 6){
      for(let i = 0; i < 3; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }
    else if($(".slider").slick("getSlick").slideCount == 5){
      for(let i = 0; i < 3; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }else if($(".slider").slick("getSlick").slideCount == 4){
      for(let i = 0; i < 2; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }

    clienteViewApps = 4

    $('#apps_proyectos_descripcion').fadeOut(500, function() {
    }).fadeIn(500);
  
    $('#apps_proyectos_cliente').fadeTo(500,0.10, function() {
        $('#apps_proyectos_descripcion').empty().show()
        $('#apps_proyectos_descripcion').prepend(`<p class="proyectos__text" id="apps_proyectos_cliente">${cliente}</p> ` + descripcion)
    }).fadeTo(500,1);
  
    $("#apps_proyectos_img").fadeTo(500,0.10, function() {
        $('#apps_proyectos_img').attr("src", img);
    }).fadeTo(500,1);
    return false;

  }
  else if(clienteViewApps == 4){

    descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihilo.'
    cliente = `<span class="proyectos__text--azul">03 - CLIENTE:</span> Digital Company </p>`

    var img1 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/DIGITAL-COMPANY1.png" alt="Digital" class="slider__img" >
      </div>
    </div> `

    var img2 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/DIGITAL-COMPANY2.png" alt="Digtial" class="slider__img" >
      </div>
    </div> `

    $('.slider').slick('slickAdd', img1)
    $('.slider').slick('slickAdd', img2)

  
    if($(".slider").slick("getSlick").slideCount == 6){
      for(let i = 0; i < 3; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }
    else if($(".slider").slick("getSlick").slideCount == 5){
      for(let i = 0; i < 3; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }else if($(".slider").slick("getSlick").slideCount == 4){
      for(let i = 0; i < 2; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }

    clienteViewApps = 3

    $('#apps_proyectos_descripcion').fadeOut(500, function() {
    }).fadeIn(500);
  
    $('#apps_proyectos_cliente').fadeTo(500,0.10, function() {
        $('#apps_proyectos_descripcion').empty().show()
        $('#apps_proyectos_descripcion').prepend(`<p class="proyectos__text" id="apps_proyectos_cliente">${cliente}</p> ` + descripcion)
    }).fadeTo(500,1);
  
    $("#apps_proyectos_img").fadeTo(500,0.10, function() {
        $('#apps_proyectos_img').attr("src", img);
    }).fadeTo(500,1);
    return false;

  }
  else if(clienteViewApps == 3){

    descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihilo.'
    cliente = `<span class="proyectos__text--azul">02 - CLIENTE:</span> Combugas </p>`

    var img1 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/COMBUGAS-IOS1.png" alt="Abastos" class="slider__img" >
      </div>
    </div> `

    var img2 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/COMBUGAS-IOS2.png" alt="CombugasIOS" class="slider__img" >
      </div>
    </div> `

    var img3 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/COMBUGAS-IOS3.png" alt="CombugasIOS" class="slider__img" >
      </div>
    </div> `

    $('.slider').slick('slickAdd', img1)
    $('.slider').slick('slickAdd', img2)
    $('.slider').slick('slickAdd', img3)
  

    if($(".slider").slick("getSlick").slideCount == 6){
      for(let i = 0; i < 3; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }
    else if($(".slider").slick("getSlick").slideCount == 5){
      for(let i = 0; i < 2; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }else if($(".slider").slick("getSlick").slideCount == 4){
      for(let i = 0; i < 2; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }

    clienteViewApps = 2

    $('#apps_proyectos_descripcion').fadeOut(500, function() {
    }).fadeIn(500);
  
    $('#apps_proyectos_cliente').fadeTo(500,0.10, function() {
        $('#apps_proyectos_descripcion').empty().show()
        $('#apps_proyectos_descripcion').prepend(`<p class="proyectos__text" id="apps_proyectos_cliente">${cliente}</p> ` + descripcion)
    }).fadeTo(500,1);
  
    $("#apps_proyectos_img").fadeTo(500,0.10, function() {
        $('#apps_proyectos_img').attr("src", img);
    }).fadeTo(500,1);
    return false;

  }
  else if(clienteViewApps == 2){

    descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihilo.'
    cliente = `<span class="proyectos__text--azul">01 - CLIENTE:</span> Abastos Super </p>`

    var img1 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/ABASTOS-SUPER1.png" alt="Abastos" class="slider__img" >
      </div>
    </div> `

    var img2 = `
    <div class="wrapper" id="imgCombugas1">
      <div class="container">
        <img src="assets/img/proyectos/apps/ABASTOS-SUPER2.png" alt="Abastos" class="slider__img" >
      </div>
    </div> `

      $('.slider').slick('slickAdd', img1)
      $('.slider').slick('slickAdd', img2)
    

    if($(".slider").slick("getSlick").slideCount == 6){
      for(let i = 0; i < 3; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }
    else if($(".slider").slick("getSlick").slideCount == 5){
      for(let i = 0; i < 3; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }else if($(".slider").slick("getSlick").slideCount == 4){
      for(let i = 0; i < 2; i++){
        
        $('.slider').slick('slickRemove',0);
      }
    }

    clienteViewApps = 1

    $('#apps_proyectos_descripcion').fadeOut(500, function() {
    }).fadeIn(500);
  
    $('#apps_proyectos_cliente').fadeTo(500,0.10, function() {
        $('#apps_proyectos_descripcion').empty().show()
        $('#apps_proyectos_descripcion').prepend(`<p class="proyectos__text" id="apps_proyectos_cliente">${cliente}</p> ` + descripcion)
    }).fadeTo(500,1);
  
    $("#apps_proyectos_img").fadeTo(500,0.10, function() {
        $('#apps_proyectos_img').attr("src", img);
    }).fadeTo(500,1);
    return false;

  }

  

   


 




})