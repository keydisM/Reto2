function guardar_client(){
    let cliente = {
        id: +$("#IDN").val(),
        name:  $("#NAME").val(),
        email: $("#EMAIL").val(),
        age: +$("#AGE").val()
    };

    console.log("Se va a registrar el cliente", cliente);

    $.ajax({
        url: "https://g200f19dd7ca0dd-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cliente),
        statusCode:{
            201:function(){
                alert('El cliente se ha registrado de manera correcta ');
            }
        },
    });

    consultar_client();
}