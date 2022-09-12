/*
|  ----------------------------------------------------------------------------------
|   @Portafolio (Tiendas)
|  ----------------------------------------------------------------------------------
|
*/



var clienteViewTiendas = 1;

var img = 'assets/img/proyectos/tiendas/BLACKWOLFTRC.png'
var descripcion = ''
var cliente = `<span class="proyectos__text--azul">01 - CLIENTE:</span> Black Wolf </p>`


$('.siguienteClienteTiendas').click(function(){

    if(clienteViewTiendas == 1){
        img  = 'assets/img/proyectos/tiendas/MANAGERMAC.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">02 - CLIENTE:</span> Managermac </p>`

        clienteViewTiendas = 2

        $('#tiendas_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#tiendas_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#tiendas_proyectos_descripcion').empty().show()
            $('#tiendas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="tiendas_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#tiendas_proyectos_img").fadeTo(500,0.10, function() {
            $('#tiendas_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;
    }
    else if(clienteViewTiendas == 2){
        img  = 'assets/img/proyectos/tiendas/ROMANA.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">03 - CLIENTE:</span> Romana </p>`

        clienteViewTiendas = 3

        $('#tiendas_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#tiendas_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#tiendas_proyectos_descripcion').empty().show()
            $('#tiendas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="tiendas_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#tiendas_proyectos_img").fadeTo(500,0.10, function() {
            $('#tiendas_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;
    }
    else if(clienteViewTiendas == 3){

        img = 'assets/img/proyectos/tiendas/IKIGAI.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">04 - CLIENTE:</span> Ikigai </p>`

        clienteViewTiendas = 4

        $('#tiendas_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#tiendas_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#tiendas_proyectos_descripcion').empty().show()
            $('#tiendas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="tiendas_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#tiendas_proyectos_img").fadeTo(500,0.10, function() {
            $('#tiendas_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;
    }

})


$('.anteriorClienteTiendas').click(function(){

    if(clienteViewTiendas == 4){

        img  = 'assets/img/proyectos/tiendas/ROMANA.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">03 - CLIENTE:</span> Romana </p>`

        clienteViewTiendas = 3

        $('#tiendas_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#tiendas_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#tiendas_proyectos_descripcion').empty().show()
            $('#tiendas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="tiendas_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#tiendas_proyectos_img").fadeTo(500,0.10, function() {
            $('#tiendas_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewTiendas == 3){

        img  = 'assets/img/proyectos/tiendas/MANAGERMAC.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">02 - CLIENTE:</span> Managermac </p>`

        clienteViewTiendas = 2

        $('#tiendas_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#tiendas_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#tiendas_proyectos_descripcion').empty().show()
            $('#tiendas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="tiendas_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#tiendas_proyectos_img").fadeTo(500,0.10, function() {
            $('#tiendas_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }
    else if(clienteViewTiendas == 2){

        img = 'assets/img/proyectos/tiendas/BLACKWOLFTRC.png'
        descripcion = ''
        cliente = `<span class="proyectos__text--azul">01 - CLIENTE:</span> Black Wolf </p>`


        clienteViewTiendas = 1

        $('#tiendas_proyectos_descripcion').fadeOut(500, function() {
        }).fadeIn(500);
    
        $('#tiendas_proyectos_cliente').fadeTo(500,0.10, function() {
            $('#tiendas_proyectos_descripcion').empty().show()
            $('#tiendas_proyectos_descripcion').prepend(`<p class="proyectos__text" id="tiendas_proyectos_cliente">${cliente}</p> ` + descripcion)
        }).fadeTo(500,1);
    
        $("#tiendas_proyectos_img").fadeTo(500,0.10, function() {
            $('#tiendas_proyectos_img').attr("src", img);
        }).fadeTo(500,1);
        return false;

    }

})
