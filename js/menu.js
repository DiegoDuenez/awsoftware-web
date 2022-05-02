/*
|  ----------------------------------------------------------------------------------
|   @JS (Menu)
|  ----------------------------------------------------------------------------------
|
*/



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


    $(".fullscreen__link").click(function(){

        $('#navigation').removeClass('animate__slideOutUp')
        $('#navigation').removeClass('animate__faster')
        $('#navigation').addClass('animate__slideInDown')

        if($(this).is("#nosotros_link") ) {
            view = 1
            $('#nosotros').fadeIn()
            $("#nosotros-header").addClass('animate__fadeInUp');
            $("body").css('background-image', "url('assets/img/NOSOTROS.jpg')")
        }
        else if($(this).is("#apps_link") ) {
            view = 3
            $('#apps').fadeIn()
            $("#apps-header").addClass('animate__fadeInUp');
            $("body").css('background-image', "url('assets/img/SERVICIOS.jpg')")
        }
        else if($(this).is("#paginas_link") ) {
            view = 5
            $('#paginas').fadeIn()
            $("#paginas-header").addClass('animate__fadeInUp');
            $("body").css('background-image', "url('assets/img/SERVICIOS.jpg')")

        }
        else if($(this).is("#tiendas_link") ) {
            view = 4
           // $("#paginas").fadeOut('slow');
            $('#tiendas').fadeIn()
            $("#tiendas-header").addClass('animate__fadeInUp');
            $("body").css('background-image', "url('assets/img/SERVICIOS.jpg')")

        }
        else if($(this).is("#software_link") ) {
            view = 2
            $('#software').fadeIn()
            $("#software-header").addClass('animate__fadeInUp');
            $("body").css('background-image', "url('assets/img/SERVICIOS.jpg')")

        }
        else if($(this).is("#otros_link") ) {
            view = 6
            $('#otros').fadeIn()
            $("body").css('background-image', "url('assets/img/SERVICIOS.jpg')")
        }
        else if($(this).is("#contacto_link") ) {
            view = 7
            $('#contacto').fadeIn()
            $("#contacto-header").addClass('animate__fadeInUp');
            $("body").css('background-image', "url('assets/img/CONTACTO.jpg')")
        }

        $('.circulo').css('background-color','var(--azul-100)')
        
        $("#menu").removeClass('open--left');

        $(".fullscreen-close").removeClass('animate__slideInDown')
        $(".menu-close").addClass('animate__slideOutUp')

        $("#navigation-image").css("display", "block");
        $("body").css('overflow','scroll')
        $(".cursor").css("display", "none");

    })

    $(".menu-close").click(function(){
   
        $('#navigation').removeClass('animate__slideOutUp')
        $('#navigation').removeClass('animate__faster')
        $('#navigation').addClass('animate__slideInDown')

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
        
        $("#menu").removeClass('open--left');

        $(".fullscreen-close").removeClass('animate__slideInDown')
        $(".menu-close").addClass('animate__slideOutUp')

        $("#navigation-image").css("display", "block");
        $("body").css('overflow','scroll')
        $(".cursor").css("display", "none");
        navigation_logo.css("display","block")

    })
    $(".fullscreen__input").click(function(event){
        event.stopPropagation();
    })

    $(".menu-open").click(function () {

        $('#navigation').removeClass('animate__delay-2s')
        $('#navigation').removeClass('animate__slideInDown')
        $('#navigation').addClass('animate__slideOutUp')
       // $('#navigation').addClass('animate__slower')

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

        $(".menu-close").removeClass('animate__slideOutUp')
        $(".menu-close").addClass('animate__slideInDown')

        $('.circulo').css('background-color','white')
        if($("#menu").hasClass('open--left')){
            $("#menu").removeClass('open--left');
            //$("#navigation-image").attr("src","assets/menu_verde.png");
            $("#navigation-image").css("display", "block");
            $("body").css('overflow','scroll')
            $(".cursor").css("display", "none");
            navigation_logo.css('display','block')
            
        }
        else{
            $("#menu").addClass('open--left');
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
        if($("#menu").hasClass('open--left')){
            $("#menu").removeClass('open--left');
            //$("#navigation-image").attr("src","assets/menu_verde.png");
            $("#navigation-image").css("display", "block");
            navigation_logo.css("display","block")
            $("body").css('overflow','scroll')
        }
        else{
            $("#menu").addClass('open--left');
            //$("#navigation-image").attr("src","assets/menu_blanco.png");
            $("#navigation-image").css("display", "none");
            $("body").css('overflow','hidden')
        }
    })*/

})