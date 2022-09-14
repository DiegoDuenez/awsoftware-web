/*
|  ----------------------------------------------------------------------------------
|   @Portafolio (Software)
|  ----------------------------------------------------------------------------------
|
*/



var clienteViewSoftware = 1;

var img  = 'assets/img/proyectos/software/SEFINSA.png'
var descripcion = 'Software administrador de préstamos y pagos correspondientes.'
var cliente = `<span class="proyectos__text--azul">01 - CLIENTE:</span> SEFINSA </p>`


$('.siguienteClienteSoftware').click(function(){

    


    if(clienteViewSoftware == 1){

        img  = 'assets/img/proyectos/software/COTIZADOR.png'
        descripcion = 'Cotizador para fabricación de mueves en base a ciertas especificaciones de tamaños.'
        cliente = `<span class="proyectos__text--azul">02 - CLIENTE:</span> GAES Homes </p>`

        clienteViewSoftware = 2

        $('#software_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#software_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#software_proyectos_descripcion').empty().show()
            $('#software_proyectos_descripcion').prepend(`<p class="proyectos__text" id="software_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#software_proyectos_img").fadeTo(500,0.10, function() {
            $('#software_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewSoftware == 2){

        img  = 'assets/img/proyectos/software/SICOVE.png'
        descripcion = 'Software administración de clientes y consumos de gas.'
        cliente = `<span class="proyectos__text--azul">03 - CLIENTE:</span> SICOVEGAS </p>`
        
        clienteViewSoftware = 3

        $('#software_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#software_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#software_proyectos_descripcion').empty().show()
            $('#software_proyectos_descripcion').prepend(`<p class="proyectos__text" id="software_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#software_proyectos_img").fadeTo(500,0.10, function() {
            $('#software_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewSoftware == 3){

        img  = 'assets/img/proyectos/software/NISSAN.png'
        descripcion = 'Software Administración de vehículos en servicio, historial y pagos.'
        cliente = `<span class="proyectos__text--azul">04 - CLIENTE:</span> NISSAN </p>`
        
        clienteViewSoftware = 4

        $('#software_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#software_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#software_proyectos_descripcion').empty().show()
            $('#software_proyectos_descripcion').prepend(`<p class="proyectos__text" id="software_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#software_proyectos_img").fadeTo(500,0.10, function() {
            $('#software_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewSoftware == 4){

        img  = 'assets/img/proyectos/software/PINTURAS-ACUARIO.png'
        descripcion = 'Software de levantamiento de pedidos en sitio.'
        cliente = `<span class="proyectos__text--azul">05 - CLIENTE:</span> PINTURAS ACUARIO </p>`
        
        clienteViewSoftware = 5

        $('#software_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#software_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#software_proyectos_descripcion').empty().show()
            $('#software_proyectos_descripcion').prepend(`<p class="proyectos__text" id="software_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#software_proyectos_img").fadeTo(500,0.10, function() {
            $('#software_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewSoftware == 5){

        img  = 'assets/img/proyectos/software/mandarinas.png'
        descripcion = 'Administración de unidades, operadores y control de pagos de las unidades.'
        cliente = `<span class="proyectos__text--azul">06 - CLIENTE:</span> RADIO TAXIS MANDARINAS </p>`

        clienteViewSoftware = 6

        $('#software_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#software_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#software_proyectos_descripcion').empty().show()
            $('#software_proyectos_descripcion').prepend(`<p class="proyectos__text" id="software_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#software_proyectos_img").fadeTo(500,0.10, function() {
            $('#software_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewSoftware == 6){

        img  = 'assets/img/proyectos/software/ABASTOS.png'
        descripcion = 'Software administrador de pedidos de productos.'
        cliente = `<span class="proyectos__text--azul">07 - CLIENTE:</span> ABASTOS SUPER </p>`

        clienteViewSoftware = 7

        $('#software_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#software_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#software_proyectos_descripcion').empty().show()
            $('#software_proyectos_descripcion').prepend(`<p class="proyectos__text" id="software_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#software_proyectos_img").fadeTo(500,0.10, function() {
            $('#software_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewSoftware == 7){

      
        img  = 'assets/img/proyectos/software/LAVILLETE.png'
        descripcion = 'Administración y control de clases del idioma francés.'
        cliente = `<span class="proyectos__text--azul">08 - CLIENTE:</span> LA VILLETE </p>`

        clienteViewSoftware = 8

        $('#software_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#software_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#software_proyectos_descripcion').empty().show()
            $('#software_proyectos_descripcion').prepend(`<p class="proyectos__text" id="software_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#software_proyectos_img").fadeTo(500,0.10, function() {
            $('#software_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }

})



$('.anteriorClienteSoftware').click(function(){

   
    if(clienteViewSoftware == 8){

        img  = 'assets/img/proyectos/software/ABASTOS.png'
        descripcion = 'Software administrador de pedidos de productos.'
        cliente = `<span class="proyectos__text--azul">07 - CLIENTE:</span> ABASTOS SUPER </p>`

        clienteViewSoftware = 7

        $('#software_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#software_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#software_proyectos_descripcion').empty().show()
            $('#software_proyectos_descripcion').prepend(`<p class="proyectos__text" id="software_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#software_proyectos_img").fadeTo(500,0.10, function() {
            $('#software_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewSoftware == 7){

        img  = 'assets/img/proyectos/software/mandarinas.png'
        descripcion = 'Administración de unidades, operadores y control de pagos de las unidades.'
        cliente = `<span class="proyectos__text--azul">06 - CLIENTE:</span> RADIO TAXIS MANDARINAS </p>`

        clienteViewSoftware = 6

        $('#software_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#software_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#software_proyectos_descripcion').empty().show()
            $('#software_proyectos_descripcion').prepend(`<p class="proyectos__text" id="software_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#software_proyectos_img").fadeTo(500,0.10, function() {
            $('#software_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewSoftware == 6){

        img  = 'assets/img/proyectos/software/PINTURAS-ACUARIO.png'
        descripcion = 'Software de levantamiento de pedidos en sitio.'
        cliente = `<span class="proyectos__text--azul">05 - CLIENTE:</span> PINTURAS ACUARIO </p>`
        
        clienteViewSoftware = 5

        $('#software_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#software_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#software_proyectos_descripcion').empty().show()
            $('#software_proyectos_descripcion').prepend(`<p class="proyectos__text" id="software_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#software_proyectos_img").fadeTo(500,0.10, function() {
            $('#software_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewSoftware == 5){

        img  = 'assets/img/proyectos/software/NISSAN.png'
        descripcion = 'Software Administración de vehículos en servicio, historial y pagos.'
        cliente = `<span class="proyectos__text--azul">04 - CLIENTE:</span> NISSAN </p>`
        
        clienteViewSoftware = 4

        $('#software_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#software_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#software_proyectos_descripcion').empty().show()
            $('#software_proyectos_descripcion').prepend(`<p class="proyectos__text" id="software_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#software_proyectos_img").fadeTo(500,0.10, function() {
            $('#software_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewSoftware == 4){

        img  = 'assets/img/proyectos/software/SICOVE.png'
        descripcion = 'Software administración de clientes y consumos de gas.'
        cliente = `<span class="proyectos__text--azul">03 - CLIENTE:</span> SICOVEGAS </p>`
        
        clienteViewSoftware = 3

        $('#software_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#software_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#software_proyectos_descripcion').empty().show()
            $('#software_proyectos_descripcion').prepend(`<p class="proyectos__text" id="software_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#software_proyectos_img").fadeTo(500,0.10, function() {
            $('#software_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewSoftware == 3){

        img  = 'assets/img/proyectos/software/COTIZADOR.png'
        descripcion = 'Cotizador para fabricación de mueves en base a ciertas especificaciones de tamaños.'
        cliente = `<span class="proyectos__text--azul">02 - CLIENTE:</span> GAES Homes </p>`

        clienteViewSoftware = 2

        $('#software_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#software_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#software_proyectos_descripcion').empty().show()
            $('#software_proyectos_descripcion').prepend(`<p class="proyectos__text" id="software_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#software_proyectos_img").fadeTo(500,0.10, function() {
            $('#software_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewSoftware == 2){

        img  = 'assets/img/proyectos/software/SEFINSA.png'
        descripcion = 'Software administrador de préstamos y pagos correspondientes.'
        cliente = `<span class="proyectos__text--azul">01 - CLIENTE:</span> SEFINSA </p>`


        clienteViewSoftware = 1

        $('#software_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#software_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#software_proyectos_descripcion').empty().show()
            $('#software_proyectos_descripcion').prepend(`<p class="proyectos__text" id="software_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#software_proyectos_img").fadeTo(500,0.10, function() {
            $('#software_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }

})
