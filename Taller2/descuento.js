// ENLACE CON DOM
const resultado = document.getElementById('resultPrice');
// DESCUENTO
const calcularPrecioConDescuento =(precio,descuento)=>{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento
}
// AUTOMATIZADO
const calculaDescuento=()=>{
    const inputPrice = document.getElementById('inputPrice');
    const price = inputPrice.value;
    const inputDiscount = document.getElementById('inputDiscount');
    const discount = inputDiscount.value;
    const precioDescuento = calcularPrecioConDescuento(price, discount);
    const resultTP = document.getElementById('resultPrice');
    resultTP.innerText= "El precio con descuento son $"+precioDescuento;
}
// RESULTADO



