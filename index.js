async function obtenerDatos(url) {
    try {
        const response = await fetch(`https://fakestoreapi.com/${url}`); 
        const datos = await response.json(); 
        return datos; 
    } catch (error) {
        console.error("Error", error);
        return []; 
    }
}


const argumentos = process.argv.slice(2);
const [comando1,...comandos] = argumentos;
//const [comando1, parametro] = argumentos;

(async function() {
    switch(comando1){
        case "GET":
            if(comandos[1]){
                const id =  Number(comandos[1]);
                const productos = await obtenerDatos(comandos[0]);
                const productoid = await productos.find(prod => prod.id === id);
            
            if (productoid){
                console.log("el producto solicitado es: ", productoid);
            } else{
                console.log("no se encontro el producto");
            }
            
            }else{
                const productos = await obtenerDatos(comandos[0]);
                console.log("Se muestran todos los productos", productos);
            }
            
            break
        case "POST":
            console.log("producto creado:", comandos[0]);
            //id con todos los datos
            break
        case "PUT":
            console.log("producto con ID modificado es:", comandos[0]);
            break
        case "DELETE":
            console.log("producto eliminado:", comandos[0])
    }})();