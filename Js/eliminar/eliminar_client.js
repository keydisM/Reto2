function eliminar_client(identificador){

    console.log("ejecutando funcion para eliminar");

    let cliente = {
        id: +identificador
    };

    console.log(cliente);

    $.ajax({
        url: "https://g200f19dd7ca0dd-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cliente),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el cliente');
            }
        },
    });
    
    consultar_client();
}