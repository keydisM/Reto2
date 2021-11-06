$(document).ready(function () {
    
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')){
        let id = searchParams.get('id')
        consultarByIdCl(id);
    }
});

function consultarByIdCl(id){   
    $.ajax({
        url: "https://g200f19dd7ca0dd-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            
            if (respuesta.items.length==1){
                llenarClient(respuesta.items[0]);
            }else{
                $("#boton").hide();
                alert('No se encuentra el Client con el id '+id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarClient(item){
    $("#IDN2").val(item.id);
    $("#NAME2").val(item.name);
    $("#EMAIL2").val(item.email);
    $("#AGE2").val(item.age);
}