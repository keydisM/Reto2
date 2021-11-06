function consultar_client(){
    //Servicios de Cliente 
        $.ajax({
            url: "https://g200f19dd7ca0dd-cloud.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
            type: 'GET',
            dataType: 'json',
            success: function(respuesta){
                console.log(respuesta.items);
                mostrarRespuestaCli(respuesta.items);
            },
            error: function (xhr, status) {
                alert('ha sucedido un problema');
            },
            complete: function (xhr, status) {
                console.log(status);
            }
            
        });
    
    }
    
    function mostrarRespuestaCli(items){
        var tablaCL = `<table border="1">
                      <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>AGE</th>
                      </tr>`;
                      
        
        for (var i=0; i < items.length; i++) {
            tablaCL +=`<tr>
                       <td>${items[i].id}</td>
                       <td>${items[i].name}</td>
                       <td>${items[i].email}</td>
                       <td>${items[i].age}</td>
                       <td>
                        <button onclick="eliminar_client(${items[i].id})">Eliminar</button>
                        <a href="detalle_client.html?id=${items[i].id}">Editar</a>
                   </td>
                    </tr>`;
        }
        tablaCL +=`</table>`;
    
        $("#tablaCL").html(tablaCL);
    }