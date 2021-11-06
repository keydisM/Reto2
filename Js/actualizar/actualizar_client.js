function actualizar_client(){
    console.log("ejecutando funcion para actualizar");

    let cliente = {
        id: +$("#IDN2").val(),
        name:  $("#NAME2").val(),
        email: $("#EMAIL2").val(),
        age: +$("#AGE2").val()
    };

    console.log(cliente);

    $.ajax({
        url: "https://g200f19dd7ca0dd-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cliente),
        statusCode:{
            201:function(){
                alert('Se ha actualizado de manera correcta');
            }
        },
    });
}