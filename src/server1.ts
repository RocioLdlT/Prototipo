// Este será nuestro archivo principal de la API,
// donde arrancaremos el servidor y crearemos el CRUD de productos con Express,js.

// Hacemos las importaciones necesarias, entre ellas express.
import express from 'express';

// Como los datos están en la memoria y no hay base de datos también exportamos el array de productos.
import { products } from './products.ts';

const app = express();
app.use(express.json());
// Esto sirve para que al realizar las solicitudes podamos leer el body de las peticiones que realicemos en formato JSON.


//  Pasamos a realizar el CRUD
// app.get('ruta', fn)
// app.post('ruta', fn)
// app.put('ruta', fn)
// app.patch('ruta', fn)
// app.delete('ruta', fn)

// GET/products
// Nos mostrará toda la lista de productos

app.get('/products', (req, res) => {
    res.json(products);
});

// GET /products/:id
// Devuelve el body de un producto que buscaremos mediante su id.

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const products = [{ id: 1 }, { id: 2 }];
    res.json(products.find((products) => products.id === Number(id)));
    return;
});

// POST /products
// En este caso estaremos creando un nuevo producto que se añadirá a nuestro array de JSON con un nuevo id
// (que será incremental aunque posteriormente se borre algún producto con DELETE)

app.post('/products', (req, res) => {
    const { name, price, stock, is_active } = req.body; // Sacamos las 'claves' del body

    const newProduct = {
        id: (products.length + 1).toString(), // Con esto creamos el id que se incrementará cada vez que creemos nuevo producto.
        name,
        price,
        stock,
        is_active: is_active ?? true, // Si no se envía, se activa por defecto
        created_at: new Date(), // Esta fecha la crea el servidor
        updated_at: new Date(), // Esta fecha la crea el servidor
    };

    products.push(newProduct); // Así hacemos que el producto se añada a la lista de productos
    res.status(201).json(newProduct); // Y esto hará que nos enseñe el producto creado
});
// PATCH /products/:id
// Así podremos actualizar el producto pero solo cambiaremos lo que le indiquemos, por eso es un patch y no un put
app.patch('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find((p) => p.id === id); // Buscamos el producto

    if (product) {
        Object.assign(product, req.body, { updated_at: new Date() }); // Con esto solo estaremos
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' }); // Esto indicará un error sobre que le producto no existe
    }
});

// DELETE /products/:id
// Con esto eliminaremos un producto a través de su id
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const index = products.findIndex((p) => p.id === id); //

    if (index !== -1) {
        const removed = products.splice(index, 1); // Eliminaremos el producto del array
        res.json({ message: 'Producto eliminado', product: removed[0] });
    } else {
        res.status(404).json({ message: 'Product not found' }); // Esto indicará un error sobre que le producto no existe
    }
});

app.use((_req, res) => {
    res.status(404);
    res.statusMessage = 'Not Found';
    res.json({
        message: 'Resource not found',
    });
    return;
});

const PORT = 3050;
// Así podemos arrancar el servidos
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
