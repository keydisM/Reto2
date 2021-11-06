function consultar_cloud(){
//Nos trae desde el servidos la base de datos de la tabla cloud
    $.ajax({
        url:"https://g200f19dd7ca0dd-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            mostrarRespuestaClo(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            console.log(status);
        }        
    });    
}

function mostrarRespuestaClo(items){
    let tablaCM = `<table border="1">
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>BRAND</th>
                    <th>MODEL</th>
                    <th>CATEGORY_ID</th>                    
                  </tr>`;                  
    
    for (let i=0; i < items.length; i++) {
       
        tablaCM +=`<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].name}</td> 
                   <td>${items[i].brand}</td>
                   <td>${items[i].model}</td>
                   <td>${items[i].category_id}</td>
                   <td>
                        <button onclick="eliminar_cloud(${items[i].id})">Eliminar</button>
                        <a href="detalle_cloud.html?id=${items[i].id}">Editar</a>
                   </td>                   
                </tr>`;
    }
    tablaCM +=`</table>`;

    $("#tablaCM").html(tablaCM);
}