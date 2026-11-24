function ProductoDescuento({nombre, precio, descuento}){
    function calculoDescuento(precioBase, porcentaje){
        return precioBase * (100-porcentaje)/100;
    }

    return(
        <>
            <p>Producto: {nombre}</p>
            <p>Precio: {precio}€</p>
            <p>Descuento: {descuento}%</p>
            <p>Precio final: {calculoDescuento(precio, descuento)}€</p>
        </>
    );
}
export default ProductoDescuento;