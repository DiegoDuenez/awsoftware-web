/*
*
* @JS (Fullscreen)
*
*/

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
        $("#fullscreen").removeClass('open');
        //$("#navigation-image").attr("src","assets/menu_verde.png");
        $("#navigation-image").css("display", "block");
        $("body").css('overflow','scroll')
        $(".cursor").css("display", "none");
        navigation_logo.css("display","block")
    })
    $(".fullscreen__input").click(function(event){
        event.stopPropagation();
    })

    $(".fullscreen-open").click(function () {
        
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

view = 1
logo = $('#logo')

$('#siguiente').click(function(){

    $('#apps').removeClass('animate__zoomIn')
    $('#apps').removeClass('animate__delay-1s')
    $('#apps').removeClass('animate__faster ')

    if(view == 1){
        logo.removeClass('animate__backInLeft')
        logo.removeClass('animate__wobble')
        window.requestAnimationFrame(function() {
            logo.addClass('animate__wobble')
        });
        console.log(logo)
        $('#apps').addClass('animate__backOutUp')
        if($("#apps").hasClass('animate__backOutUp')){
            $('#paginas').css('visibility','visible')
            $('#paginas').removeClass('animate__backOutDown')
            $('#paginas').addClass('animate__backInUp')
            view = 2
        }
    
    }
    else if(view == 2){
        logo.removeClass('animate__wobble')
        window.requestAnimationFrame(function() {
            logo.addClass('animate__wobble')
        });
        $('#paginas').addClass('animate__backOutUp')
        if($("#paginas").hasClass('animate__backOutUp')){
            $('#tiendas').css('visibility','visible')
            $('#tiendas').removeClass('animate__backOutDown')
            $('#tiendas').addClass('animate__backInUp')
            view = 3
        }
    }
    else if(view == 3){
        logo.removeClass('animate__wobble')
        window.requestAnimationFrame(function() {
            logo.addClass('animate__wobble')
        });
        $('#tiendas').addClass('animate__backOutUp')
        if($("#tiendas").hasClass('animate__backOutUp')){
            $('#software').css('visibility','visible')
            $('#software').removeClass('animate__backOutDown')
            $('#software').addClass('animate__backInUp')
            view = 4
        }
    }
})

$('#anterior').click(function(){

    
    if(view == 4){
        logo.removeClass('animate__backInLeft')
        logo.removeClass('animate__wobble')
        window.requestAnimationFrame(function() {
            logo.addClass('animate__wobble')
        });
        $('#software').addClass('animate__backOutDown')
        if($("#software").hasClass('animate__backOutDown')){
            //$('#paginas').css('visibility','visible')
            $('#tiendas').removeClass('animate__backInUp')
            $('#tiendas').removeClass('animate__backOutUp')
            $('#tiendas').addClass('animate__backInDown')
            view = 3
        }
    }
    else if(view == 3){
        logo.removeClass('animate__backInLeft')
        logo.removeClass('animate__wobble')
        window.requestAnimationFrame(function() {
            logo.addClass('animate__wobble')
        });
        $('#tiendas').addClass('animate__backOutDown')
        if($("#tiendas").hasClass('animate__backOutDown')){
            //$('#paginas').css('visibility','visible')
            $('#paginas').removeClass('animate__backInUp')
            $('#paginas').removeClass('animate__backOutUp')
            $('#paginas').addClass('animate__backInDown')
            view = 2
        }
    }
    else if(view == 2){
        logo.removeClass('animate__wobble')
        window.requestAnimationFrame(function() {
            logo.addClass('animate__wobble')
        });
        $('#paginas').addClass('animate__backOutDown')
        if($("#paginas").hasClass('animate__backOutDown')){
            //$('#paginas').css('visibility','visible')
            $('#apps').removeClass('animate__backInUp')
            $('#apps').removeClass('animate__backOutUp')
            $('#apps').addClass('animate__backInDown')
            view = 1
        }
    }
    /*else if(view == 2){
        $('#paginas').addClass('animate__backOutUp')
        if($("#paginas").hasClass('animate__backOutUp')){
            $('#tiendas').css('visibility','visible')
            $('#tiendas').addClass('animate__backInUp')
            view = 3
        }
    }*/


})