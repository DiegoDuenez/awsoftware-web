


var cliente = 'abastos'

var currentBackground = 0;
var limit = 1
var timeOutTime = 5000
var proyecto = '#apps_imagenes.proyectos__imagenes'

var descripcion = ''
var cliente = `<span class="proyectos__text--azul">01 - CLIENTE:</span> Abastos Super </p>`


$('#apps_proyectos_body').on('click','.proyectos__circles *', function() {

  cliente = $(this).attr('id')
    $(this).data('clicked', true);

    if($(this).data('clicked')){
        
        $(".proyectos__circles *").each(function() {   

            var element = $(this);
            
            if(!element.is("#"+cliente)){
                if(element.hasClass('proyectos__circle--active')){
                    element.removeClass('proyectos__circle--active')
                }
            }
            
        })
        $(this).addClass('proyectos__circle--active')
    
    }

  if(cliente == 'abastos'){

   // $('.slider').fadeOut(1).delay(500).fadeIn(300);
  
    descripcion = ''
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
        console.log(i)
        $('.slider').slick('slickRemove',0);
      }
    }
    else if($(".slider").slick("getSlick").slideCount == 5){
      for(let i = 0; i < 3; i++){
        console.log(i)
        $('.slider').slick('slickRemove',0);
      }
    }else if($(".slider").slick("getSlick").slideCount == 4){
      for(let i = 0; i < 2; i++){
        console.log(i)
        $('.slider').slick('slickRemove',0);
      }
    }


  }
  else if(cliente == 'combugasIos'){

    //$('.slider').fadeOut(1).delay(500).fadeIn(300);

    descripcion = ''
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
        console.log(i)
        $('.slider').slick('slickRemove',0);
      }
    }
    else if($(".slider").slick("getSlick").slideCount == 5){
      for(let i = 0; i < 2; i++){
        console.log(i)
        $('.slider').slick('slickRemove',0);
      }
    }else if($(".slider").slick("getSlick").slideCount == 4){
      for(let i = 0; i < 2; i++){
        console.log(i)
        $('.slider').slick('slickRemove',0);
      }
    }


  }
  else if(cliente == 'digital'){

    //$('.slider').fadeOut(1).delay(500).fadeIn(300);

    descripcion = ''
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
        console.log(i)
        $('.slider').slick('slickRemove',0);
      }
    }
    else if($(".slider").slick("getSlick").slideCount == 5){
      for(let i = 0; i < 3; i++){
        console.log(i)
        $('.slider').slick('slickRemove',0);
      }
    }else if($(".slider").slick("getSlick").slideCount == 4){
      for(let i = 0; i < 2; i++){
        console.log(i)
        $('.slider').slick('slickRemove',0);
      }
    }
  
  }
  else if(cliente == 'power'){

    //$('.slider').fadeOut(1).delay(500).fadeIn(300);

    descripcion = ''
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
        console.log(i)
        $('.slider').slick('slickRemove',0);
      }
    }
    else if($(".slider").slick("getSlick").slideCount == 5){
      for(let i = 0; i < 3; i++){
        console.log(i)
        $('.slider').slick('slickRemove',0);
      }
    }else if($(".slider").slick("getSlick").slideCount == 4){
      for(let i = 0; i < 2; i++){
        console.log(i)
        $('.slider').slick('slickRemove',0);
      }
    }
  
  }
  else if(cliente == 'tanquesCombugas'){
   
    //$('.slider').fadeOut(1).delay(500).fadeIn(300);

    descripcion = ''
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
        console.log(i)
        $('.slider').slick('slickRemove',0);
      }
    }
    else if($(".slider").slick("getSlick").slideCount == 5){
      for(let i = 0; i < 2; i++){
        console.log(i)
        $('.slider').slick('slickRemove',0);
      }
    }else if($(".slider").slick("getSlick").slideCount == 4){
      for(let i = 0; i < 2; i++){
        console.log(i)
        $('.slider').slick('slickRemove',0);
      }
    }
  
  }

  console.log(cliente)

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

  /*$('#apps_proyectos_cliente').fadeOut(500, function() {
      $('#apps_proyectos_cliente').empty().show()
      $('#apps_proyectos_cliente').append(cliente).fadeIn(500);

  })*/

  

})



