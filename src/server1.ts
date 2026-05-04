// Este será nuestro archivo principal de la API, 
// donde arrancaremos el servidor y crearemos el CRUD de productos con Express,js

// Hacemos las importaciones necesarias, entre ellas express
import express from 'express';

// Como los datos no están en la memoria y no hay base de datos también exportamos el array de productos
import { products } from './products.ts'; 
 
const app = express();
app.use(express.json()); // Esto sirve para que al realizar las solicitudes podamos leer el body de las peticiones que realicemos en formato JSON
 
// app.use((_req, res) => {
//     res.status(404);
//     res.statusMessage = 'Not Found';
//     res.json({
//         message: 'Resource not found',
//     });
//     return;

// GET /products
// Devuelve la lista completa de productos.
// 
app.get('/products', (req, res) => { 
  res.send('');
  res.status(404).send('Sorry, cant find that');
  res.json(products)
    return;
});
 
