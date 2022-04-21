
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
        logo.removeClass('animate__backInLeft')
        logo.removeClass('animate__wobble')
        window.requestAnimationFrame(function() {
            logo.addClass('animate__wobble')
        });
        $("#apps").fadeOut('slow');
        $("#paginas").fadeIn('slow');

        $("#paginas-header").addClass('animate__fadeInUp');
        //$("#paginas-header").addClass('animate__delay-1s');
        view = 2
    }
    else if(view == 2){
        logo.removeClass('animate__wobble')
        window.requestAnimationFrame(function() {
            logo.addClass('animate__wobble')
        });
        $("#paginas").fadeOut('slow');
        $("#tiendas").fadeIn('slow');

        $("#tiendas-header").addClass('animate__fadeInUp');

        view = 3
    }
    else if(view == 3){
        logo.removeClass('animate__wobble')
        window.requestAnimationFrame(function() {
            logo.addClass('animate__wobble')
        });
        $("#tiendas").fadeOut('slow');
        $("#software").fadeIn('slow');

        $("#software-header").addClass('animate__fadeInUp');

        view = 4
    }
    else if(view == 4){
        logo.removeClass('animate__wobble')
        window.requestAnimationFrame(function() {
            logo.addClass('animate__wobble')
        });
        $("#software").fadeOut('slow');
        $("#contacto").fadeIn('slow');

        view = 5
    }
    
});

$("#anterior").click(function(){

   
     if(view == 2){
        logo.removeClass('animate__wobble')
        window.requestAnimationFrame(function() {
            logo.addClass('animate__wobble')
        });
        $("#apps").fadeIn('slow');
        $("#paginas").fadeOut('slow');
        view = 1
    }
    else if(view == 3){
        logo.removeClass('animate__wobble')
        window.requestAnimationFrame(function() {
            logo.addClass('animate__wobble')
        });
        $("#paginas").fadeIn('slow');
        $("#tiendas").fadeOut('slow');
        view = 2

    }
    else if(view == 4){
        logo.removeClass('animate__wobble')
        window.requestAnimationFrame(function() {
            logo.addClass('animate__wobble')
        });
        $("#software").fadeOut('slow');
        $("#tiendas").fadeIn('slow');
        view = 3
    }
    else if(view == 5){
        logo.removeClass('animate__wobble')
        window.requestAnimationFrame(function() {
            logo.addClass('animate__wobble')
        });
        $("#contacto").fadeOut('slow');
        $("#software").fadeIn('slow');
        view = 4
    }
    
});


var navigation_logo = $(".navigation__logo")

$(function () {

    const cursor = document.querySelector(".menu-cursor")
            
    document.addEventListener('mousemove', (e)=>{
        cursor.style.left = e.clientX + "px";
        cursor.style.top =  e.clientY + "px";
    })

    $(".fullscreen__link").hover(function(){
        $(".cursor").css("display", "none");
        
    }, function(){
        $(".cursor").css("display", "block");
    });

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
        $("#fullscreen").removeClass('open');

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
        if($("#fullscreen").hasClass('open')){
            $("#fullscreen").removeClass('open');
            //$("#navigation-image").attr("src","assets/menu_verde.png");
            $("#navigation-image").css("display", "block");
            $("body").css('overflow','scroll')
            $(".cursor").css("display", "none");
            navigation_logo.css('display','block')
            
        }
        else{
            $("#fullscreen").addClass('open');
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

    $(".fullscreen__link").click(function(){
        if($("#fullscreen").hasClass('open')){
            $("#fullscreen").removeClass('open');
            //$("#navigation-image").attr("src","assets/menu_verde.png");
            $("#navigation-image").css("display", "block");
            navigation_logo.css("display","block")
            $("body").css('overflow','scroll')
        }
        else{
            $("#fullscreen").addClass('open');
            //$("#navigation-image").attr("src","assets/menu_blanco.png");
            $("#navigation-image").css("display", "none");
            $("body").css('overflow','hidden')
        }
    })

})