
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

    $(".menu-close").click(function(){
        /*$('.fullscreen__close-button').css('background-color','white')
        $('.fullscreen__close-button').css('color','var(--azul-100)')*/

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

    $(".fullscreen__link").click(function(){
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
    })

})