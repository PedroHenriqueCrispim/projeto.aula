function validar(){
        let usuario = document.getElementById("usuario").value
        let senha = document.getElementById("senha").value


        if(usuario =="" && senha ==""){
            alert("PREENCHA TODOS OS CAMPOS")
        }else{
            alert("Acesso permitido")
            window.open('menu.html')
        }
}

function calc(){
        let n1 = number(prompt("Digite o primeiro valor"))
        let n2 = number(prompt("Digite o segundo valor"))
        let op = number(prompt('DADOS INFORMADOS:' ${n1} e ${n2} \n[1]somar\n [2]subtrair\n [3]multiplicar\n [4]dividir))

        let msg = document.getElementById('msg')
        msg.innerHTML='<h2>Processando o resultado</h2>'

        switch(op){
            case 1:
                msg.innerHTML +='<<p>${n1} + ${n2} = <strong</p>'
        }
        