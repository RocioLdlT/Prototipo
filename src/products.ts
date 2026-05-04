// En este archivo crearemos la base de datos que se quedará en memoria.
// Utilizaremos el modelo de 'Entidad Product' donde podemos observar los datos que deben incluir cada producto.
// Con esta base haremos las comprobaciones con Postman.

export const products = [
    {
        id: '1',
        name: 'Laptop 27APP',
        price: '1000.00',
        stock: '23',
        is_active: 'true',
        created_at: new Date("2026-02-10T11:10:00.000Z"),
        updated_at: new Date("2026-02-10T11:10:00.000Z"),
    },
    {
        id: '2',
        name: 'Computer Screens',
        price: '256.00',
        stock: '35',
        is_active: 'true',
        created_at: new Date("2026-03-25T08:00:00.000Z"),
        updated_at: new Date("2026-03-25T08:00:00.000Z"),
    },
    {
        id: '3',
        name: 'Raton PRO X',
        price: '75.00',
        stock: '83',
        is_active: 'true',
        created_at: new Date("2026-04-30T17:00:00.000Z"),
        updated_at: new Date("2026-04-30T17:00:00.000Z"),
    },
];
