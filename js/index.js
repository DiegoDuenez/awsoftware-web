
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
        $("#apps").fadeIn('slow');
        $("#apps-header").addClass('animate__fadeInUp');
        $("body").css('background-image', "url('assets/img/SERVICIOS.jpg')")
        view = 2
        console.log(view)
    }
    else if(view == 2){
        
        $("#apps").fadeOut('slow');
        $("#paginas").fadeIn('slow');

        $("#paginas-header").addClass('animate__fadeInUp');

        view = 3
        console.log(view)

    }
    else if(view == 3){
       
        $("#paginas").fadeOut('slow');
        $("#tiendas").fadeIn('slow');

        $("#tiendas-header").addClass('animate__fadeInUp');

        view = 4
        console.log(view)

    }
    else if(view == 4){
        $("#tiendas").fadeOut('slow');
        $("#software").fadeIn('slow');

        $("#software-header").addClass('animate__fadeInUp');

        view = 5
        console.log(view)

    }
    else if(view == 5){
        $("#software").fadeOut('slow');
        $("#otros").fadeIn('slow');
        view = 6
        console.log(view)
    }
    else if(view == 6){
        $("#otros").fadeOut('slow');
        $("#contacto").fadeIn('slow');
        $("body").css('background-image', "url('assets/img/CONTACTO.jpg')")
        view = 7
        console.log(view)
    }
    
});

$("#anterior").click(function(){

    if(view == 2){
        
        $("#nosotros").fadeIn('slow');
        $("#apps").fadeOut('slow');
        view = 1
        $("body").css('background-image', "url('assets/img/NOSOTROS.jpg')")
    }
    else if(view == 3){
        
        $("#apps").fadeIn('slow');
        $("#paginas").fadeOut('slow');
        view = 2
    }
    else if(view == 4){
       
        $("#paginas").fadeIn('slow');
        $("#tiendas").fadeOut('slow');
        view = 3

    }
    else if(view == 5){
        
        $("#software").fadeOut('slow');
        $("#tiendas").fadeIn('slow');
        view = 4
    }
    else if(view == 6){
        
        $("#otros").fadeOut('slow');
        $("#software").fadeIn('slow');
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