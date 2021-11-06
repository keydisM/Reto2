function actualizar_cloud(){
    //Funcion para actualizar nube
    let cloud = {
        id: +$("#IDC2").val(),
        brand:  $("#MARCA2").val(),
        model: $("#MODELO2").val(),
        category_id: +$("#CATEGORY_ID2").val(),
        name: $("#NOMBREC2").val(),
    };

        $.ajax({
        url: "https://g200f19dd7ca0dd-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cloud),
        statusCode:{
            201:function(){
                alert('Se ha actualizado la nube');
            }
        },
    });
}