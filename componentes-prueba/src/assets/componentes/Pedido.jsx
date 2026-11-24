function Pedido({nombre, cantidad, precio}){
    function calcularTotal(unidades, precioUnitario){
        return precioUnitario * unidades;
    }
    
    return(
        <>
        <p>Producto: {nombre}</p>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: {precio}€</p>
        <p>Total: {calcularTotal(cantidad, precio)}€</p>
        </>
    );
}
export default Pedido;