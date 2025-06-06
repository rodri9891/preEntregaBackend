let productosLocal = [];

async function obtenerDatos(url) {
    try {
        const response = await fetch(`https://fakestoreapi.com/${url}`); 
        const datos = await response.json();
        productosLocal = datos;
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
        //toma el elemento del argumento GET
        case "GET":
            if(comandos[1]){
                const id =  Number(comandos[1]); //2do elemento de array ID
                const productos = await obtenerDatos(comandos[0]);//1er elemento de array PRODUCTS
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
            productosLocal = await obtenerDatos(comandos[0]);
            console.log(productosLocal.length);
            
            //
            //
            break
        case "DELETE":
            
            if(comandos[1]){
                productosLocal = await obtenerDatos(comandos[0]);// ser carga localmente todo
                const id = Number(comandos[1]);
                const productId =  await productosLocal.find(prod => prod.id === id);
            if(productId){
                productosLocal = await productosLocal.filter(prod => prod.id !== id);
                console.log("producto eliminado es id: ", productId);
                console.log("lista sin el producto eliminado:", productosLocal);
            }
            else{
                console.log("no se encontraron los productos a eliminar");
            }
            }
            break;
    }})();
