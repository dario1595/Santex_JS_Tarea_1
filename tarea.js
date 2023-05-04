//1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
//para valor 6
//1
//12
//123
//1234
//12356

//para valor 3
//1
//12
//123

console.log("\n - Ejercicio Nº1:");
function piramide(num)
{
    for (let i = 1; i <= num; i++)
    {
        let fila = ''; //Creo una variable para guardar el valor para concatenar y generar la piramide
        for (let j = 1; j <= i; j++) 
        {
            fila += j;   // Concateno el valor 
        }
        console.log(fila); // Muestro la fila
    }
}

try 
{
    let num = 6;
    console.log("Numero ingresado " + num);
    piramide(6);
} 

catch (error) 
{
    console.log("Ocurrio un error: "+error);
}

//2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

//Ejemplo:
//Array1: ['rojo', 'azul', 'amarillo']
//Array2: ['blanco', 'negro', 'rojo']
//Resultado: ['rojo']

//Ejemplo 2:
//Array1: [4, 3, true, 'manzana']
//Array2: ['pera', 3, f alse, true, 3, true]
//Resultado: [3, true]

console.log("\n - Ejercicio Nº2:");
function unionArray(arr1,arr2)
{
    let newArr = []; 
    for (let i = 0; i < arr1.length - 1; i++)
    {
        if(arr2.includes(arr1[i])) 
        {
            newArr.push(arr1[i]);
        }
    }
    return newArr;
} 


let arr1 = ['rojo', 'azul', 'amarillo'];
let arr2 = ['blanco', 'negro', 'rojo'];

try 
{
    let nuevoArray = unionArray(arr1,arr2);
    console.log ("Nuevo arreglo generado: " + nuevoArray);
} 

catch (error) 
{
    console.log("Ocurrio un error: "+error);
}

let arr3 = [4, 3, true, 'manzana']
let arr4 = ['pera', 3, false, true, 3, true]

try 
{
    let nuevoArray2 = unionArray(arr3,arr4);
    console.log ("Nuevo arreglo generado: " + nuevoArray2);
} 

catch (error) 
{
    console.log("Ocurrio un error: "+error);
}


//3)
//3.1) Dado el siguiente objeto
//let carrito = {
//    montoTotal: 10,
//    productos: ["Leche"]
//}

//Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.


//3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
//agregarProducto(nombre, precio, unidades) {
    // Completar aca...
//}


//Ej:
//agregarProducto("Azucar", 5, 2);

//Resultado esperado
//carrito = {
//    montoTotal: 20,
//    productos: ["Leche", "Azucar"]
//}


//3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”
console.log("\n - Ejercicio Nº3:");
function mostrar3(productos)
{
    let lista = productos;
    console.log("\nLista de productos: "+ lista.nombre);
    console.log("Monto acumulado: $"+lista.montoTotal);
}

class Producto
{
    nombre;
    precio;
    cantidad;

    constructor (nombreIni, precioIni,cantidadIni)
    {
        this.nombre = nombreIni;
        this.precio = precioIni;
        this.cantidad = cantidadIni;
    }

   
}

class Carrito extends Producto
{
    montoTotal;
    
    constructor(nommbre,precio,cantidad,montoInicial)
    {
        super(nommbre,precio,cantidad);
        this.montoTotal = montoInicial;
    }
 

    agregarProducto(nom, precio, cant) 
    {
        let price;
        let prod = this.nombre;
        if (prod.includes(nom))
        {
            console.log( `\n- Ya existe el producto ` + nom + ` con ` + this.cantidad +` unidades`)
            return false;
        }
        else
        {
            price = precio * cant;
            prod.push(nom);
            this.montoTotal += price;
            return true;
        }
        
    }
}

const lista = new Carrito(['Leche'],10,5,50);
mostrar3(lista);

try 
{
    if(lista.agregarProducto('Queso',20,5))
    {
        mostrar3(lista)
    };
    
} 

catch (error) 
{
    console.log("Ocurrio un error: "+error);
}

try 
{
    if(lista.agregarProducto('Queso',20,5))
    {
        mostrar3(lista)
    };
    
} 

catch (error) 
{
    console.log("Ocurrio un error: "+error);
}



