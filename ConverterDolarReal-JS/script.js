const btn = document.querySelector('button');
const p = document.querySelector('p');

btn.addEventListener('click', ()=>{
    let real = parseFloat(document.getElementById('real').value);
    let dolar = (real/5.05);

    p.innerHTML = real + " Reais é igual " +  dolar.toFixed(2) + " Dolares";

    
})