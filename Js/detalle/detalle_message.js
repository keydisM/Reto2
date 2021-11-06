$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')){
        let id = searchParams.get('id')
        consultarByIdM(id);
    }
});

function consultarByIdM(id){
    $.ajax({
        url: "https://g200f19dd7ca0dd-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            
            if (respuesta.items.length==1){
                llenarMessage(respuesta.items[0]);
            }else{
                $("#boton").hide();
                alert('No se encuentra el Mensaje con el id '+id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarMessage(item){
    $("#IDM2").val(item.id);
    $("#mensaje2").val(item.messagetext);
}