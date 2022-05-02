

var clienteViewSoftware = 1;

var img = 'assets/img/proyectos/software/mandarinas.png'
var descripcion = 'Administración de unidades, operadores y control de pagos de las unidades.'
var cliente = `<span class="proyectos__text--azul">01 - CLIENTE:</span> Radio Taxis Mandarinas </p>`



$('#siguienteClienteSoftware').click(function(){

    if(clienteViewSoftware == 1){

        img  = 'assets/img/proyectos/software/ABASTOS.png'
        descripcion = 'Call Center para la administración de pedidos.'
        cliente = `<span class="proyectos__text--azul">02 - CLIENTE:</span> Abastos Super </p>`

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
        descripcion = 'Software de administración, para vehículos de gas.'
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
        descripcion = 'Administración de vehículos en servicio y de pago de servicio.'
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
        descripcion = 'Software de administración de pedidos.'
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

        img  = 'assets/img/proyectos/software/LAVILLETE.png'
        descripcion = 'Administración y control de clases del idioma francés.'
        cliente = `<span class="proyectos__text--azul">06 - CLIENTE:</span> LA VILLETE </p>`

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
})



$('#anteriorClienteSoftware').click(function(){

    if(clienteViewSoftware == 6){

        img  = 'assets/img/proyectos/software/PINTURAS-ACUARIO.png'
        descripcion = 'Software de administración de pedidos.'
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
        descripcion = 'Administración de vehículos en servicio y de pago de servicio.'
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
        descripcion = 'Software de administración, para vehículos de gas.'
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

        img  = 'assets/img/proyectos/software/ABASTOS.png'
        descripcion = 'Call Center para la administración de pedidos.'
        cliente = `<span class="proyectos__text--azul">02 - CLIENTE:</span> Abastos Super </p>`

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

        img  = 'assets/img/proyectos/software/mandarinas.png'
        descripcion = 'Administración de unidades, operadores y control de pagos de las unidades.'
        cliente = `<span class="proyectos__text--azul">01 - CLIENTE:</span> Radio Taxis Mandarinas </p>`

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
