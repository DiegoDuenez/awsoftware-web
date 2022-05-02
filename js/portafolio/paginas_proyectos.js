
var cliente = 'alchile'
var img = 'assets/img/proyectos/paginas/ALCHILE.png'
var descripcion = ''
var cliente = `<span class="proyectos__text--azul">01 - CLIENTE:</span> AlChile </p>`


$('#paginas_proyectos_body').on('click','.proyectos__circles *', function() {


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

    if(cliente == 'alchile'){
        
        img  = 'assets/img/proyectos/paginas/ALCHILE.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">01 - CLIENTE:</span> Alchile </p>`

    }
    else if(cliente == 'digital'){

        img  = 'assets/img/proyectos/paginas/DIGITAL-COMPANY.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">02 - CLIENTE:</span> Digital Company </p>`

    }
    else if(cliente == 'intelenergy'){

        img  = 'assets/img/proyectos/paginas/INTELENERGY.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">03 - CLIENTE:</span> Intelenergy </p>`

    }
    else if(cliente == 'jardines'){

        img  = 'assets/img/proyectos/paginas/JARDINES-EDEN.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">04 - CLIENTE:</span> Jardines del Edén </p>`

    }
    else if(cliente == 'mandarinas'){

        img  = 'assets/img/proyectos/paginas/MANDARINAS.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">05 - CLIENTE:</span> Radio Taxis Mandarinas </p>`

    }
    else if(cliente == 'plastic'){

        img  = 'assets/img/proyectos/paginas/PLASTIC-SURGERY.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">06 - CLIENTE:</span> Plastic Surgery </p>`

    }
    else if(cliente == 'rocklag'){

        img  = 'assets/img/proyectos/paginas/ROCKLAG.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">07 - CLIENTE:</span> Rocklag </p>`

    }

    $('#paginas_proyectos_descripcion').fadeOut(500, function() {
        //$('#paginas_proyectos_descripcion').text(descripcion).fadeIn(500);
    }).fadeIn(500);

    $('#paginas_proyectos_cliente').fadeTo(500,0.10, function() {
        $('#paginas_proyectos_descripcion').empty().show()
        $('#paginas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="paginas_proyectos_cliente">${cliente}</p> ` + descripcion)
    }).fadeTo(500,1);

    $("#paginas_proyectos_img").fadeTo(500,0.10, function() {
        $('#paginas_proyectos_img').attr("src", img);
    }).fadeTo(500,1);
    return false;

})