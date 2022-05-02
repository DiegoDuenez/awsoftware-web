/*
|  ----------------------------------------------------------------------------------
|   @Portafolio (Paginas)
|  ----------------------------------------------------------------------------------
|
*/



var clienteViewPaginas = 1;

var img = 'assets/img/proyectos/paginas/ALCHILE.png'
var descripcion = ''
var cliente = `<span class="proyectos__text--azul">01 - CLIENTE:</span> AlChile </p>`


$('.siguienteClientePaginas').click(function(){

    if(clienteViewPaginas == 1){

        img  = 'assets/img/proyectos/paginas/DIGITAL-COMPANY.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">02 - CLIENTE:</span> Digital Company </p>`

        clienteViewPaginas = 2

        $('#paginas_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#paginas_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#paginas_proyectos_descripcion').empty().show()
            $('#paginas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="paginas_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#paginas_proyectos_img").fadeTo(500,0.10, function() {
            $('#paginas_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewPaginas == 2){

        img  = 'assets/img/proyectos/paginas/INTELENERGY.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">03 - CLIENTE:</span> Intelenergy </p>`

        clienteViewPaginas = 3

        $('#paginas_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#paginas_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#paginas_proyectos_descripcion').empty().show()
            $('#paginas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="paginas_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#paginas_proyectos_img").fadeTo(500,0.10, function() {
            $('#paginas_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewPaginas == 3){

        img  = 'assets/img/proyectos/paginas/JARDINES-EDEN.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">04 - CLIENTE:</span> Jardines del Edén </p>`

        clienteViewPaginas = 4

        $('#paginas_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#paginas_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#paginas_proyectos_descripcion').empty().show()
            $('#paginas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="paginas_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#paginas_proyectos_img").fadeTo(500,0.10, function() {
            $('#paginas_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewPaginas == 4){

        img  = 'assets/img/proyectos/paginas/MANDARINAS.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">05 - CLIENTE:</span> Radio Taxis Mandarinas </p>`

        clienteViewPaginas = 5

        $('#paginas_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#paginas_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#paginas_proyectos_descripcion').empty().show()
            $('#paginas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="paginas_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#paginas_proyectos_img").fadeTo(500,0.10, function() {
            $('#paginas_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewPaginas == 5){

        img  = 'assets/img/proyectos/paginas/PLASTIC-SURGERY.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">06 - CLIENTE:</span> Plastic Surgery </p>`

        clienteViewPaginas = 6

        $('#paginas_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#paginas_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#paginas_proyectos_descripcion').empty().show()
            $('#paginas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="paginas_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#paginas_proyectos_img").fadeTo(500,0.10, function() {
            $('#paginas_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewPaginas == 6){

        img  = 'assets/img/proyectos/paginas/ROCKLAG.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">07 - CLIENTE:</span> Rocklag </p>`

        clienteViewPaginas = 7

        $('#paginas_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#paginas_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#paginas_proyectos_descripcion').empty().show()
            $('#paginas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="paginas_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#paginas_proyectos_img").fadeTo(500,0.10, function() {
            $('#paginas_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }


})




$('.anteriorClientePaginas').click(function(){

    if(clienteViewPaginas == 7){

        img  = 'assets/img/proyectos/paginas/PLASTIC-SURGERY.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">06 - CLIENTE:</span> Plastic Surgery </p>`

        clienteViewPaginas = 6

        $('#paginas_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#paginas_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#paginas_proyectos_descripcion').empty().show()
            $('#paginas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="paginas_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#paginas_proyectos_img").fadeTo(500,0.10, function() {
            $('#paginas_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else  if(clienteViewPaginas == 6){

        img  = 'assets/img/proyectos/paginas/MANDARINAS.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">05 - CLIENTE:</span> Radio Taxis Mandarinas </p>`

        clienteViewPaginas = 5

        $('#paginas_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#paginas_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#paginas_proyectos_descripcion').empty().show()
            $('#paginas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="paginas_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#paginas_proyectos_img").fadeTo(500,0.10, function() {
            $('#paginas_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else  if(clienteViewPaginas == 5){

        img  = 'assets/img/proyectos/paginas/JARDINES-EDEN.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">04 - CLIENTE:</span> Jardines del Edén </p>`

        clienteViewPaginas = 4

        $('#paginas_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#paginas_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#paginas_proyectos_descripcion').empty().show()
            $('#paginas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="paginas_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#paginas_proyectos_img").fadeTo(500,0.10, function() {
            $('#paginas_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewPaginas == 4){

        img  = 'assets/img/proyectos/paginas/INTELENERGY.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">03 - CLIENTE:</span> Intelenergy </p>`

        clienteViewPaginas = 3

        $('#paginas_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#paginas_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#paginas_proyectos_descripcion').empty().show()
            $('#paginas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="paginas_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#paginas_proyectos_img").fadeTo(500,0.10, function() {
            $('#paginas_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewPaginas == 3){

        img  = 'assets/img/proyectos/paginas/DIGITAL-COMPANY.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">02 - CLIENTE:</span> Digital Company </p>`

        clienteViewPaginas = 2

        $('#paginas_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#paginas_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#paginas_proyectos_descripcion').empty().show()
            $('#paginas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="paginas_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#paginas_proyectos_img").fadeTo(500,0.10, function() {
            $('#paginas_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewPaginas == 2){

        img  = 'assets/img/proyectos/paginas/ALCHILE.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">01 - CLIENTE:</span> Alchile </p>`

        clienteViewPaginas = 1

        $('#paginas_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#paginas_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#paginas_proyectos_descripcion').empty().show()
            $('#paginas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="paginas_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#paginas_proyectos_img").fadeTo(500,0.10, function() {
            $('#paginas_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;


    }

})
