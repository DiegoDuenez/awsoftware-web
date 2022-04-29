
$('#siguiente').hover(function(){
    $('#txtSiguiente').css('opacity','1')
})

$("#siguiente").mouseover(function(){
    $('#txtSiguiente').css('opacity','1')
});
$("#siguiente").mouseout(function(){
    $('#txtSiguiente').css('opacity','0')
});

$("#anterior").mouseover(function(){
    $('#txtAnterior').css('opacity','1')
});
$("#anterior").mouseout(function(){
    $('#txtAnterior').css('opacity','0')
});


view = 1;
logo = $('#logo')

$("#siguiente").click(function(){

    if(view == 1){
        
        $("#nosotros").fadeOut('slow');
        $("#software").fadeIn('slow');
        $("#software-header").addClass('animate__fadeInUp');
        $("body").css('background-image', "url('assets/img/SERVICIOS.jpg')")
        view = 2
        console.log(view)
    }
    else if(view == 2){
        
        $("#software").fadeOut('slow');
        $("#apps").fadeIn('slow');

        //$("#apps-header").removeClass('animate__fadeInUp');
        $("apps-header").addClass('animate__fadeInUp');

        view = 3
        console.log(view)

    }
    else if(view == 3){
       
        $("#apps").fadeOut('slow');
        $("#tiendas").fadeIn('slow');

        //$("#paginas-header").removeClass('animate__fadeInUp');
        $("#tiendas-header").addClass('animate__fadeInUp');

        view = 4
        console.log(view)

    }
    else if(view == 4){
        $("#tiendas").fadeOut('slow');
        $("#paginas").fadeIn('slow');

       // $("#tiendas-header").removeClass('animate__fadeInUp');
        $("#paginas-header").addClass('animate__fadeInUp');

        view = 5
        console.log(view)

    }
    else if(view == 5){
        $("#paginas").fadeOut('slow');
        $("#otros").fadeIn('slow');

        //$("#software-header").removeClass('animate__fadeInUp');

        view = 6
        console.log(view)
    }
    else if(view == 6){
        $("#otros").fadeOut('slow');
        $("#contacto").fadeIn('slow');
        $("body").css('background-image', "url('assets/img/CONTACTO.jpg')")

        $("#contacto-header").addClass('animate__fadeInUp');

        view = 7
        console.log(view)
    }
    
});

$("#anterior").click(function(){

    if(view == 2){
        
        $("#nosotros").fadeIn('slow');
        $("#software").fadeOut('slow');
        view = 1
        $("body").css('background-image', "url('assets/img/NOSOTROS.jpg')")
    }
    else if(view == 3){
        
        $("#software").fadeIn('slow');
        $("#apps").fadeOut('slow');
        view = 2
    }
    else if(view == 4){
       
        $("#apps").fadeIn('slow');
        $("#tiendas").fadeOut('slow');
        view = 3

    }
    else if(view == 5){
        
        $("#paginas").fadeOut('slow');
        $("#tiendas").fadeIn('slow');
        view = 4
    }
    else if(view == 6){
        
        $("#otros").fadeOut('slow');
        $("#paginas").fadeIn('slow');
        view = 5
    }
    else if(view == 7){
        
        $("#contacto").fadeOut('slow');
        $("#otros").fadeIn('slow');
        view = 6
        $("body").css('background-image', "url('assets/img/SERVICIOS.jpg')")
    }
    
});


var navigation_logo = $(".navigation__logo")

$(function () {

    const cursor = document.querySelector(".menu-cursor")
            
    document.addEventListener('mousemove', (e)=>{
        cursor.style.left = e.clientX + "px";
        cursor.style.top =  e.clientY + "px";
    })

    
    $(".fullscreen__input").hover(function(){
        $(".cursor").css("display", "none");
    }, function(){
        $(".cursor").css("display", "block");
    });
    $(".fullscreen__social-media i").hover(function(){
        $(".cursor").css("display", "none");
    }, function(){
        $(".cursor").css("display", "block");
    });

    $(".fullscreen-close").click(function(){
        /*$('.fullscreen__close-button').css('background-color','white')
        $('.fullscreen__close-button').css('color','var(--azul-100)')*/

        $('.circulo').css('background-color','var(--azul-100)')
        $("#apps_proyectos").removeClass('open');

        $(".fullscreen-close").addClass('animate__hinge')

        $("#navigation-image").css("display", "block");
        $("body").css('overflow','scroll')
        $(".cursor").css("display", "none");
        navigation_logo.css("display","block")
    })
    $(".fullscreen__input").click(function(event){
        event.stopPropagation();
    })

    $(".fullscreen-open").click(function () {
        $(".fullscreen-close").removeClass('animate__hinge')
        $('.circulo').css('background-color','white')
        if($("#apps_proyectos").hasClass('open')){
            $("#apps_proyectos").removeClass('open');
            //$("#navigation-image").attr("src","assets/menu_verde.png");
            $("#navigation-image").css("display", "block");
            $("body").css('overflow','scroll')
            $(".cursor").css("display", "none");
            navigation_logo.css('display','block')
            
        }
        else{
            $("#apps_proyectos").addClass('open');
            //$("#navigation-image").attr("src","assets/menu_blanco.png");
            //$("body").css('overflow','hidden')
            $(".cursor").css("display", "block");
            $("#navigation-image").css("display", "none");
            navigation_logo.css("display","none")
            
            const cursor = document.querySelector(".cursor")
            
            document.addEventListener('mousemove', (e)=>{
               /* cursor.style.left = e.clientX + "px";
                cursor.style.top =  e.clientY + "px";*/
            })
        }
    })

    /*$(".fullscreen__link").click(function(){
        if($("#apps_proyectos").hasClass('open')){
            $("#apps_proyectos").removeClass('open');
            $("#navigation-image").css("display", "block");
            navigation_logo.css("display","block")
            $("body").css('overflow','scroll')
        }
        else{
            $("#apps_proyectos").addClass('open');
            $("#navigation-image").css("display", "none");
            $("body").css('overflow','hidden')
        }
    })*/

})


cliente = "abastos"

var orden = [cliente]

$(document).ready(function(){


    $("#abastosd").click(function(){
        cliente = $(this).attr('id')

        if(!orden.includes(cliente)){
            orden.push(cliente)
            if(orden.length > 2){
                orden.shift()
            }
        }
        var items = orden.slice(0, 2)
        //alert(items)

        $("#apps_imagenes").removeClass('animate__backOutUp')

        $("#combugas_ios_imagenes").removeClass('animate__backInRight')
        $("#combugas_ios_imagenes").addClass('animate__backOutUp')

        /*$("#digital_imagenes").removeClass('animate__backInRight')
        $("#digital_imagenes").addClass('animate__backOutUp')*/

        $("#combugas_ios_imagenes").fadeOut(function() {
            $("#apps_imagenes").fadeIn()
            $("#apps_imagenes").addClass('animate__backInRight')
        });  

        /*$("#digital_imagenes").fadeOut(function() {
            $("#apps_imagenes").fadeIn()
            $("#apps_imagenes").addClass('animate__backInRight')
        });*/  

        $('#combugasIos').css('background-color','white')
        $('#digital').css('background-color','white')
        $('#power').css('background-color','white')
        $('#tanquesCombugas').css('background-color','white')
        $(this).css('background-color','var(--azul-100)')

    })

    /*$("#combugasIos").click(function(){

        cliente = $(this).attr('id')

        if(!orden.includes(cliente)){
            orden.push(cliente)
            if(orden.length > 2){
                orden.shift()
            }

        }
        var items = orden.slice(0, 2)
        alert(items)

        $("#combugas_ios_imagenes").removeClass('animate__backOutUp')
        $("#apps_imagenes").removeClass('animate__backInRight')
        $("#apps_imagenes").addClass('animate__backOutUp')
        $("#apps_imagenes").fadeOut(function() {
            $("#combugas_ios_imagenes").fadeIn()
            $("#combugas_ios_imagenes").addClass('animate__backInRight')
        });  

        $('#abastos').css('background-color','white')
        $('#digital').css('background-color','white')
        $('#power').css('background-color','white')
        $('#tanquesCombugas').css('background-color','white')
        $(this).css('background-color','var(--azul-100)')

    })

    $("#digital").click(function(){

        $(this).css('background-color','var(--azul-100)')

        cliente = $(this).attr('id')

        if(!orden.includes(cliente)){
            orden.push(cliente)
            if(orden.length > 2){
                orden.shift()
            }
        }

        var items = orden.slice(0, 2)
        alert(items)

        $("#combugas_ios_imagenes").removeClass('animate__backOutUp')
        $("#apps_imagenes").removeClass('animate__backInRight')
        $("#apps_imagenes").addClass('animate__backOutUp')
        $("#apps_imagenes").fadeOut(function() {
            $("#combugas_ios_imagenes").fadeIn()
            $("#combugas_ios_imagenes").addClass('animate__backInRight')
        });  

        $('#combugasIos').css('background-color','white')
        $('#abastos').css('background-color','white')
        $('#power').css('background-color','white')
        $('#tanquesCombugas').css('background-color','white')
        $(this).css('background-color','var(--azul-100)')

    })*/



    //transition(1);
  });



  /*
  function transition(first)
  {
    var img = first

    if(cliente == "abastos"){
        var src = img == 1 ? "assets/img/proyectos/apps/ABASTOS-SUPER2.png" : "assets/img/proyectos/apps/ABASTOS-SUPER1.png";
        $('.proyectos__imagenes').css('background-image', 'url('+ src +')')
    }
    else if(cliente == "combugasIos"){
        var src = img == 1 ? "assets/img/proyectos/apps/COMBUGAS-IOS1.png" : img == 2 ?  "assets/img/proyectos/apps/COMBUGAS-IOS2.png" :  "assets/img/proyectos/apps/COMBUGAS-IOS3.png";
  
        $("#combugas_ios_img").delay(5000).fadeOut(function() {
            f = img + 1
            if(f > 3){
                f = 1
            }
            $(this).attr("src",src).fadeIn(function() {
                console.log(src)
                console.log(f)
                transition(f);

            });
        });  
    }
    else if(cliente == "digital"){
        var src = img == 1 ? "assets/img/proyectos/apps/DIGITAL-COMPANY2.png" :  "assets/img/proyectos/apps/DIGITAL-COMPANY1.png";
  
        $("#combugas_ios_img").delay(5000).fadeOut(function() {
            f = img + 1
            if(f > 3){
                f = 1
            }
            $(this).attr("src",src).fadeIn(function() {
                console.log(src)
                console.log(f)
                transition(f);

            });
        });  
    }
        
  }*/

  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
    /*fade: true,
    cssEase: 'linear',*/
    speed: 1000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });