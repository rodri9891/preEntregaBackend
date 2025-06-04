const URL = `https://fakestoreapi.com/products`;
const fetchData = async (url) =>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch(err){
        console.log(err);
    }
};

//fetchData(URL)
const Productos = fetchData(URL);



const argumentos = Productos.process.argv.slice(2);
console.log(argumentos);
const [comando1,...comandos] = argumentos;

switch(comando1){
    case "GET":
        console.log("Se muestran odos los productos");
        break
    case "POST":
        console.log("producto creado:" , comandos[0]);
        break
    case "PUT":
        console.log("producto con ID modificado es:". comandos[0]);
        break
    case "DELETE":
        console.log("producto eliminado:", comandos[0])
}