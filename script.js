 function checkPass(){
    let senha = document.getElementById('senha').value
    let check = document.getElementById('check').value
    
    let demo = document.getElementById('demo')

    if (senha.lenght != 0){
        if(senha == check){
            demo.textContent =  'Senhas combinam !'
            demo.style.color =  'green'
            
        } else{
            demo.textContent = 'Senhas não combinam'
            demo.style.color = 'rgb(237, 65, 65)'
            event.preventDefault()
        }
    }
 }