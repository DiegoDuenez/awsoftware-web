/*
|  ----------------------------------------------------------------------------------
|   @JS (Index)
|  ----------------------------------------------------------------------------------
|
*/



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
        /*if($("#tiendas-header").hasClass('animate__fadeInUp')){
            $("#tiendas-header").removeClass('animate__fadeInUp');
        }*/
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
        $("#nosotros-header").addClass('animate__fadeInUp');
        $("body").css('background-image', "url('assets/img/NOSOTROS.jpg')")
    }
    else if(view == 3){
        
        $("#software").fadeIn('slow');
        $("#apps").fadeOut('slow');
        $("#software-header").addClass('animate__fadeInUp');

        view = 2
    }
    else if(view == 4){
       
        $("#apps").fadeIn('slow');
        $("#tiendas").fadeOut('slow');
        $("#apps-header").addClass('animate__fadeInUp');

        view = 3

    }
    else if(view == 5){
        
        $("#paginas").fadeOut('slow');
        $("#tiendas").fadeIn('slow');
        $("#tiendas-header").addClass('animate__fadeInUp');
        view = 4
    }
    else if(view == 6){
        
        $("#otros").fadeOut('slow');
        $("#paginas").fadeIn('slow');
        $("#paginas-header").addClass('animate__fadeInUp');

        view = 5
    }
    else if(view == 7){
        
        $("#contacto").fadeOut('slow');
        $("#otros").fadeIn('slow');
        $("#otros-header").addClass('animate__fadeInUp');
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

        if(view == 1){
            $('#nosotros').fadeIn()
        }
        else if(view == 2){
            $('#software').fadeIn()
        }
        else if(view == 3){
            $('#apps').fadeIn()
        }
        else if(view == 4){
            $('#tiendas').fadeIn()
        }
        else if(view == 5){
            $('#paginas').fadeIn()
        }
        else if(view == 6){
            $('#otros').fadeIn()
        }
        else if(view == 7){
            $('#contacto').fadeIn()
        }

        $('.circulo').css('background-color','var(--azul-100)')
        
        $("#apps_proyectos").removeClass('open');
        $("#software_proyectos").removeClass('open');
        $("#tiendas_proyectos").removeClass('open');
        $("#paginas_proyectos").removeClass('open');


        $(".fullscreen-close").addClass('animate__hinge')

        $("#navigation-image").css("display", "block");
        $("body").css('overflow','scroll')
        $(".cursor").css("display", "none");
        navigation_logo.css("display","block")
    })
    $(".fullscreen__input").click(function(event){
        event.stopPropagation();
    })

    $("#btnProyectosApps.fullscreen-open").click(function () {

        if(view == 1){
            $('#nosotros').fadeOut()
            /*$('#menuBg').css('background-image', "url('assets/img/NOSOTROS.jpg')")*/
        }
        else if(view == 2){
            $('#software').fadeOut()
        }
        else if(view == 3){
            $('#apps').fadeOut()
        }
        else if(view == 4){
            $('#tiendas').fadeOut()
        }
        else if(view == 5){
            $('#paginas').fadeOut()
        }
        else if(view == 6){
            $('#otros').fadeOut()
        }
        else if(view == 7){
            $('#contacto').fadeOut()
        }

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
            })
        }
    })

    $("#btnProyectosSoftware.fullscreen-open").click(function () {

        if(view == 1){
            $('#nosotros').fadeOut()
            /*$('#menuBg').css('background-image', "url('assets/img/NOSOTROS.jpg')")*/
        }
        else if(view == 2){
            $('#software').fadeOut()
        }
        else if(view == 3){
            $('#apps').fadeOut()
        }
        else if(view == 4){
            $('#tiendas').fadeOut()
        }
        else if(view == 5){
            $('#paginas').fadeOut()
        }
        else if(view == 6){
            $('#otros').fadeOut()
        }
        else if(view == 7){
            $('#contacto').fadeOut()
        }

        $(".fullscreen-close").removeClass('animate__hinge')
        $('.circulo').css('background-color','white')
        if($("#software_proyectos").hasClass('open')){
            $("#software_proyectos").removeClass('open');
            $("#navigation-image").css("display", "block");
            $("body").css('overflow','scroll')
            $(".cursor").css("display", "none");
            
        }
        else{
            $("#software_proyectos").addClass('open');
            $(".cursor").css("display", "block");
            $("#navigation-image").css("display", "none");
           
        }
    })

    $("#btnProyectosTiendas.fullscreen-open").click(function () {

        if(view == 1){
            $('#nosotros').fadeOut()
            /*$('#menuBg').css('background-image', "url('assets/img/NOSOTROS.jpg')")*/
        }
        else if(view == 2){
            $('#software').fadeOut()
        }
        else if(view == 3){
            $('#apps').fadeOut()
        }
        else if(view == 4){
            $('#tiendas').fadeOut()
        }
        else if(view == 5){
            $('#paginas').fadeOut()
        }
        else if(view == 6){
            $('#otros').fadeOut()
        }
        else if(view == 7){
            $('#contacto').fadeOut()
        }

        $(".fullscreen-close").removeClass('animate__hinge')
        $('.circulo').css('background-color','white')
        if($("#tiendas_proyectos").hasClass('open')){
            $("#tiendas_proyectos").removeClass('open');
            $("#navigation-image").css("display", "block");
            $("body").css('overflow','scroll')
            $(".cursor").css("display", "none");
            navigation_logo.css('display','block')
            
        }
        else{
            $("#tiendas_proyectos").addClass('open');
            $(".cursor").css("display", "block");
            $("#navigation-image").css("display", "none");
            
        }
    })

    $("#btnProyectosPaginas.fullscreen-open").click(function () {

        if(view == 1){
            $('#nosotros').fadeOut()
            /*$('#menuBg').css('background-image', "url('assets/img/NOSOTROS.jpg')")*/
        }
        else if(view == 2){
            $('#software').fadeOut()
        }
        else if(view == 3){
            $('#apps').fadeOut()
        }
        else if(view == 4){
            $('#tiendas').fadeOut()
        }
        else if(view == 5){
            $('#paginas').fadeOut()
        }
        else if(view == 6){
            $('#otros').fadeOut()
        }
        else if(view == 7){
            $('#contacto').fadeOut()
        }

        $(".fullscreen-close").removeClass('animate__hinge')
        $('.circulo').css('background-color','white')
        if($("#paginas_proyectos").hasClass('open')){
            $("#paginas_proyectos").removeClass('open');
            $("#navigation-image").css("display", "block");
            $("body").css('overflow','scroll')
            $(".cursor").css("display", "none");
            navigation_logo.css('display','block')
            
        }
        else{
            $("#paginas_proyectos").addClass('open');
            $(".cursor").css("display", "block");
            $("#navigation-image").css("display", "none");
            
        }
    })

})



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


 
  $('.slider__otros').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    touchThreshold: 100,
    
    speed: 1000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
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