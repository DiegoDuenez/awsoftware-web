




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

  if(cliente == 'abastos'){

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
    backgrounds[0] = "assets/img/proyectos/apps/COMBUGAS-IOS1.png"
    backgrounds[1] =  "assets/img/proyectos/apps/COMBUGAS-IOS2.png"
    backgrounds[2] =  "assets/img/proyectos/apps/COMBUGAS-IOS3.png"

   /* $('.wrapper').fadeOut(100, function(){
      $(this).delay(1000).fadeIn()
    })*/

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


})


