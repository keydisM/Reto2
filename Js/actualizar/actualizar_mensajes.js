function actualizar_mensajes(){
    console.log("ejecutando funcion para actualizar");

    let mensaje = {
        id: +$("#IDM2").val(),
        messagetext: $("#mensaje2").val(),
    };

    console.log(mensaje);

    $.ajax({
        url: "https://g200f19dd7ca0dd-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(mensaje),
        statusCode:{
            201:function(){
                alert('Se ha actualizado un mensaje');
            }
        },
    });
}