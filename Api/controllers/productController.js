const Producto = require('../models/Product ');

exports.createProduct = async (req, res) => {
    try {
        let producto;

        producto = new Producto(req.body);
        await producto.save()
        res.send(producto);

    } catch (error) {
        const product = req.body
        console.log(error)
        res.status(500).send('No se pudo Validar la accion', product)
    }
}

exports.listProducts = async (req, res) => {
    try {
        const listarproducto = await Producto.find();
        res.json(listarproducto)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const { nombre, categoria, ubicacion, precio, imagen } = req.body;
        let producto = await Producto.findById(req.params.id)
        if (!producto) {
            res.status(500).json('Producto no encontrado')
        }
        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;
        producto.imagen = imagen;

        producto = await Producto.findByIdAndUpdate({ _id: req.params.id }, producto, { new: true });
        res.json(producto)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.destroyProduct = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        //validacion del id producto
        if(!producto) {
            res.status(404).json({
                msg: 'Producto no Encontrado'
            })
        }

        await Producto.findOneAndRemove({
            _id: req.params.id
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}