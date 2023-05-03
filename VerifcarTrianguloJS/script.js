const btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    let LadoA = parseInt(document.getElementById('LadoA').value)
    let LadoB = parseInt(document.getElementById('LadoB').value)
    let LadoC = parseInt(document.getElementById('LadoC').value)


   
   const Verificador1 =  Verificador(LadoA, LadoB, LadoC);
    
   if(Verificador1){
       if(LadoA === LadoB && LadoB === LadoC){
           alert('O triângulo é equilatero')
       }
       else if(LadoA === LadoB || LadoB === LadoC || LadoA === LadoC){
           alert('O triângulo é escaleno')
       }
       else{
           alert('O triângulo é isoceles')
       }
   }
   else{
    alert('esse triângulo não existe')
   }

})

function Verificador(a,b,c){
    
    if((a + b < c) || (a + c < b) || (b + c < a))
    {
        teste = false;
    }
    else
    {
        teste = true;
    }
    
    return teste;
}
