function guardar_mensajes(){
    let mensaje = {
        id: +$("#IDM").val(),
        messagetext: $("#mensaje").val(),
    };

    //console.log("Se va a registrar el mensaje", typeof mensajeD.messajetext);

    $.ajax({
        url: "https://g200f19dd7ca0dd-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(mensaje),
        statusCode:{
            201:function(){
                //alert('El mensaje es: ', messaje);
            }
        },
    });

    consultar_mensajes();
}