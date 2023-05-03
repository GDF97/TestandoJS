const div = document.querySelector('div');

const button = document.querySelector('button');

button.addEventListener('click', ()=>{

    const numero = document.getElementById('numero').value;
    
    for(let i = 0; i <= 10; i++){
        const p = document.createElement('p');
        div.appendChild(p);
        p.innerText = numero + ' x ' + i + ' = ' + (numero*i);
    }
})
