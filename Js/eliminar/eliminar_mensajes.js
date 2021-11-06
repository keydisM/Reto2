function eliminar_mensajes(identificador){
    console.log("ejecutando funcion para eliminar");

    let mensaje = {
        id: +identificador
    };

    console.log(mensaje);

    $.ajax({
        url: "https://g200f19dd7ca0dd-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(mensaje),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el mensaje');
            }
        },
    });

    consultar_mensajes();
}