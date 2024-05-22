

function clicou(){
    var num =  Number(window.prompt(' numero ')) 
    var tipo ;

    if (num % 2== 0){
        tipo = `<strong> PAR </STRONG>`

    }else{
        tipo  = `<strong> IMPAR </STRONG>`
    }
let res = document.querySelector (`section#resultado`)
res.innerHTML += `<p> ${num} é ${tipo} </p> `


   
}