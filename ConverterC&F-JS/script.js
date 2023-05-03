const btn = document.querySelector('button');
let p = document.querySelector('p');

btn.addEventListener('click', ()=>{
    let celsius = parseInt(document.getElementById('celsius').value);
    let fahrenheit = (celsius * 9/5) + 32;

    p.innerText = celsius + "°C é igual a " + fahrenheit + "°F";

})