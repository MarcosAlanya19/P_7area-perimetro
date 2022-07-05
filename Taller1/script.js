// CUADRADO
const perimetroCuadrado=(lado)=> lado*4;
const areaCuadrado=(lado)=> lado * lado;
// TRIANGULO
const perimetroTriangulo=(lado,base)=>(lado*2)+base;
const areaTriangulo=(lado,base)=>(lado*base)/2;
// CIRCULO
const perimetroCirculo = (r) => (2*Math.PI)*r;
const areaCirculo = (r) => Math.PI*(r**2);
//FUNCION CUADRADO
const calculaAreaCuadrado=()=>{
    let input=document.getElementById('inputCuadrado');
    let value=input.value;
    let area=areaCuadrado(value);
    alert(area);
}
const calculaPerimetroCuadrado=()=>{
    let input=document.getElementById('inputCuadrado');
    let value=input.value;
    let perimetro=perimetroCuadrado(value);
    alert(perimetro);
}
//FUNCION TRIANGULO
const calculaPT=()=>{
    let altura=document.getElementById('inputAT');
    let base=document.getElementById('inputBT')
    let h = parseInt(altura.value);
    let b = parseInt(base.value);
    let perimetro=perimetroTriangulo(h,b);
    alert(perimetro);
}
const calculaAT=()=>{
    let altura=document.getElementById('inputAT');
    let base=document.getElementById('inputBT')
    let h = parseInt(altura.value);
    let b = parseInt(base.value);
    let area=areaTriangulo(h,b);
    alert(area);
}
// FUNCION CIRCULO
const calculaAC=()=>{
    let radio=document.getElementById('inputRC');
    let r=radio.value;
    let area=areaCirculo(r);
    alert(area);
}
const calculaPC=()=>{
    let radio=document.getElementById('inputRC');
    let r=radio.value;
    let perimetro=perimetroCirculo(r);
    alert(perimetro);
}