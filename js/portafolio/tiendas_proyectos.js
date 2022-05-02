

var cliente = 'ikigai'
var img = 'assets/img/proyectos/tiendas/IKIGAI.png'
var descripcion = ''
var cliente = `<span class="proyectos__text--azul">01 - CLIENTE:</span> Ikigai </p>`


$('#tiendas_proyectos_body').on('click','.proyectos__circles *', function() {


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


    if(cliente == 'ikigai'){
        
        img  = 'assets/img/proyectos/tiendas/IKIGAI.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">01 - CLIENTE:</span> Ikigai </p>`

    }
    else if(cliente == 'managermac'){

        img  = 'assets/img/proyectos/tiendas/MANAGERMAC.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">02 - CLIENTE:</span> Managermac </p>`

    }
    else if(cliente == 'romana'){

        img  = 'assets/img/proyectos/tiendas/ROMANA.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">03 - CLIENTE:</span> Romana </p>`
        

    }


    $('#tiendas_proyectos_descripcion').fadeOut(500, function() {
        //$('#tiendas_proyectos_descripcion').text(descripcion).fadeIn(500);
    }).fadeIn(500);

    $('#tiendas_proyectos_cliente').fadeTo(500,0.10, function() {
        $('#tiendas_proyectos_descripcion').empty().show()
        $('#tiendas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="tiendas_proyectos_cliente">${cliente}</p> ` + descripcion)
    }).fadeTo(500,1);

    $("#tiendas_proyectos_img").fadeTo(500,0.10, function() {
        $('#tiendas_proyectos_img').attr("src", img);
    }).fadeTo(500,1);
    return false;


})