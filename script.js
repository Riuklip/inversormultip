// const d=document
// const boton=d.querySelector(".calcular")
// const input1=d.querySelector("#primer")
// const input2=d.querySelector("#segundo")
// const resultado=d.querySelector(".resultado")

// d.addEventListener("click",(e)=>{
//     var evento=e.target

//     if(evento.matches(".calcular")){
//         var valor_1=parseInt(input1.value)
//         var valor_2=parseInt(input2.value)
//         var result=0
//         var value1=valor_1
//         var value2=valor_2
//         do{

//             if(valor_1>valor_2){
//                 result=valor_1 % valor_2
//                 valor_1=valor_2
//                 valor_2=result
                
//             }else if(valor_1<valor_2){
//                 result=valor_2 % valor_1
                
//                 valor_2=valor_1
//                 valor_1=result
//             }else if(valor_1==valor_2){
//                 result=0
//             }
//             console.log(result)
//         }while(result!==1 && result!==0 )

//        console.log(result)
       
//         var cont=1
//         if (result===1) {
//             do{
//                 cont++
            
//             }while(((value1*cont)%value2)==1)
//             resultado.innerHTML=cont
//         }else if(result===0){
//             resultado.innerHTML=`El valor ${value1} y ${value2} no tienen inverso multiplicativo`
//         }

        
        

    
//     }
// })




 const d = document;
 const boton = d.querySelector(".calcular");
 const input1 = d.querySelector("#primer");
 const input2 = d.querySelector("#segundo");
 const resultado = d.querySelector(".resultado");

 d.addEventListener("click", (e) => {
     if (e.target.matches(".calcular")) {
         const valor1 = parseInt(input1.value);
         const valor2 = parseInt(input2.value);

         if (isNaN(valor1) || isNaN(valor2)) {
             resultado.innerHTML = "Por favor, ingresa números válidos.";
             return;
         }

         const gcdResult = gcd(valor1, valor2);
        
         if (gcdResult !== 1) {
             resultado.innerHTML = `El valor ${valor1} y ${valor2} no tienen inverso multiplicativo.`;
         } else {
             const inversoMultiplicativo = encontrarInversoMultiplicativo(valor1, valor2);
             resultado.innerHTML = `El inverso multiplicativo de ${valor1} módulo ${valor2} es: ${inversoMultiplicativo}`;
         }
     }
 });

 function gcd(a, b) {
     while (b !== 0) {
         [a, b] = [b, a % b];
     }
     return a;
 }

 function encontrarInversoMultiplicativo(a, m) {
     let m0 = m, t, q;
     let x0 = 0, x1 = 1;

     if (m === 1) return 0;

     while (a > 1) {
         
         q = Math.floor(a / m);
         t = m;

         
         m = a % m;
         a = t;
        
         t = x0;

         x0 = x1 - q * x0;
         x1 = t;
     }

     
     if (x1 < 0) x1 += m0;

     return x1;
 }
