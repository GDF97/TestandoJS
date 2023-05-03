const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    let num = parseInt(document.getElementById('number').value);
    let primo = true
    for(let i = 2; i < num; i++){
        if(num%i==0){
            primo = false;
            break;
        }
    }
    if (primo) {
      alert(num + " é primo");
    } 
    else {
      alert(num + " não é primo");
    }
})
