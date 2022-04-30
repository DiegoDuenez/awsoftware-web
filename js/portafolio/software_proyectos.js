

var cliente = 'mandarinas'
var img = 'assets/img/proyectos/software/mandarinas.png'
var descripcion = 'Administración de unidades, operadores y control de pagos de las unidades.'
var cliente = `<span class="proyectos__text--azul">01 - CLIENTE:</span> Radio Taxis Mandarinas </p>`


$('#software_proyectos_body').on('click','.proyectos__circles *', function() {


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


    if(cliente == 'mandarinas'){
        
        img  = 'assets/img/proyectos/software/mandarinas.png'
        descripcion = 'Administración de unidades, operadores y control de pagos de las unidades.'
        cliente = `<span class="proyectos__text--azul">01 - CLIENTE:</span> Radio Taxis Mandarinas </p>`

    }
    else if(cliente == 'abastosSoftware'){

        img  = 'assets/img/proyectos/software/ABASTOS.png'
        descripcion = 'Call Center para la administración de pedidos.'
        cliente = `<span class="proyectos__text--azul">02 - CLIENTE:</span> Abastos Super </p>`

    }
    else if(cliente == 'sicove'){

        img  = 'assets/img/proyectos/software/SICOVE.png'
        descripcion = 'Software de administración, para vehículos de gas.'
        cliente = `<span class="proyectos__text--azul">03 - CLIENTE:</span> SICOVEGAS </p>`
        

    }
    else if(cliente == 'nissan'){

        img  = 'assets/img/proyectos/software/NISSAN.png'
        descripcion = 'Administración de vehículos en servicio y de pago de servicio.'
        cliente = `<span class="proyectos__text--azul">04 - CLIENTE:</span> NISSAN </p>`

    }
    else if(cliente == 'pinturas'){

        img  = 'assets/img/proyectos/software/PINTURAS-ACUARIO.png'
        descripcion = 'Software de administración de pedidos.'
        cliente = `<span class="proyectos__text--azul">05 - CLIENTE:</span> PINTURAS ACUARIO </p>`


    }
    else if(cliente == 'lavillete'){

        img  = 'assets/img/proyectos/software/LAVILLETE.png'
        descripcion = 'Administración y control de clases del idioma francés.'
        cliente = `<span class="proyectos__text--azul">06 - CLIENTE:</span> LA VILLETE </p>`

    }


    $('#software_proyectos_descripcion').fadeOut(500, function() {
        //$('#software_proyectos_descripcion').text(descripcion).fadeIn(500);
    })

    $('#software_proyectos_cliente').fadeTo(500,0.10, function() {
        $('#software_proyectos_descripcion').empty().show()
        $('#software_proyectos_descripcion').prepend(`<p class="proyectos__text" id="software_proyectos_cliente">${cliente}</p> ` + descripcion).fadeIn(500);
    }).fadeTo(500,1);

    $("#software_proyectos_img").fadeTo(500,0.10, function() {
        $('#software_proyectos_img').attr("src", img);
    }).fadeTo(500,1);
    return false;


})