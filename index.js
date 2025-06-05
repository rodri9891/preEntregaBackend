async function obtenerDatos() {
    try {
        const response = await fetch("https://fakestoreapi.com/products"); 
        const datos = await response.json(); 
        return datos; 
    } catch (error) {
        console.error("Error", error);
        return []; 
    }
}
/*
(async function (){
    const arrayDeDatos = await obtenerDatos();
    console.log(arrayDeDatos.slice(0,2));
})();
*/

const argumentos = process.argv.slice(2);
const [comando1,...comandos] = argumentos;

(async function() {
    switch(comando1){
    case "GET":
        const productos = await obtenerDatos();
        console.log("Se muestran todos los productos", productos);
        break
    case "POST":
        console.log("producto creado:", comandos[0]);
        break
    case "PUT":
        console.log("producto con ID modificado es:", comandos[0]);
        break
    case "DELETE":
        console.log("producto eliminado:", comandos[0])
}})();