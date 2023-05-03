const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    let num = parseInt(document.getElementById('number').value);
    let fatorial = 1;

    for(let j = 1; j <= num; j++){
        fatorial *= j;
    }
    
    alert(fatorial);
})