function guardar_cloud(){
    let cloud = {
        id: +$("#IDC").val(),
        brand:  $("#MARCA").val(),
        model: $("#MODELO").val(),
        category_id: +$("#CATEGORY_ID").val(),
        name: $("#NOMBREC").val(),
    };

    console.log("Se va a registrar la nube", typeof cloud.name);

    $.ajax({
        url: "https://g200f19dd7ca0dd-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cloud),
        statusCode:{
            201:function(){
                alert('La nube se ha registrado de manera correcta ');
            }
        },
    });
    
    consultar_cloud();
}