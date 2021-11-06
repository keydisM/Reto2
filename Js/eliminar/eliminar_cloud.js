function eliminar_cloud(i){
    // eliminar un elemento de la nube
    let cloud = {
        id: +i
    };

    $.ajax({
        url: "https://g200f19dd7ca0dd-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cloud),
        statusCode:{
            204:function(){
                alert('Se ha eliminado la nube');
            }
        },
    });

    consultar_cloud();
}