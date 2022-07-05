// CUPONES
const arrayCoupon = ["Marcos", "Jorge", "Doroty"];
// DESCUENTO
const calcularPrecioConDescuento =(precio,descuento)=>{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento
}
// AUTOMATIZADO SWITCH
// const calculateDiscount = () => {
//     const inputPrice = document.getElementById('inputPrice');
//     const price = inputPrice.value;

//     const inputCoupon = document.getElementById('inputCoupon');
//     const coupon = inputCoupon.value;

//     let descuento;

//     switch (coupon) {
//         case arrayCoupon[0] : descuento = 15; break;
//         case arrayCoupon[1] : descuento = 30; break;
//         case arrayCoupon[2] : descuento = 25; break;
//         default : descuento = 0; 
//     }

//     const precioDescuento = calcularPrecioConDescuento(price,descuento)

//     resultTP = document.getElementById('result');
//     resultTP.innerHTML = `El precio con descuento son: $${precioDescuento}`;
// }
// AUTOMATIZADO IF
const calculateDiscount = () => {
    const inputPrice = document.getElementById('inputPrice');
    const price = inputPrice.value;

    const inputCoupon = document.getElementById('inputCoupon');
    const coupon = inputCoupon.value;

    let descuento;

    if (!arrayCoupon.includes(coupon)) {
        alert("El cupón " + coupon + "no es válido");
        descuento = 0;
    } else if (coupon === arrayCoupon[0]) {
        descuento = 15;
    } else if (coupon === arrayCoupon[1]){ 
        descuento = 30;
    } else if (coupon === arrayCoupon[2]) {
        descuento = 25;
    }

    const precioDescuento = calcularPrecioConDescuento(price,descuento)

    resultTP = document.getElementById('result');
    resultTP.innerHTML = `El precio con descuento son: $${precioDescuento}`;
}