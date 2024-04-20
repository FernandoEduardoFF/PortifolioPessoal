
//efeitos nas estrelas quando clicado

let estrela = document.querySelectorAll(".estrela")

let x0=0
let x1=0
let x2=0
let x3=0
let x4=0

estrela[0].onclick=function () {
    x0++
    if (x0%2!=0) {
        estrela[0].classList.add("estrela-marcada")    
    }else{
        estrela[0].classList.remove("estrela-marcada")   
    }
}

estrela[1].onclick=function () {
    x1++
    if (x1%2!=0) {
        estrela[1].classList.add("estrela-marcada")    
    }else{
        estrela[1].classList.remove("estrela-marcada")   
    }
}
estrela[2].onclick=function () {
    x2++
    if (x2%2!=0) {
        estrela[2].classList.add("estrela-marcada")    
    }else{
        estrela[2].classList.remove("estrela-marcada")   
    }
}
estrela[3].onclick=function () {
    x3++
    if (x3%2!=0) {
        estrela[3].classList.add("estrela-marcada")    
    }else{
        estrela[3].classList.remove("estrela-marcada")   
    }
}
estrela[4].onclick=function () {
    x4++
    if (x4%2!=0) {
        estrela[4].classList.add("estrela-marcada")    
    }else{
        estrela[4].classList.remove("estrela-marcada")   
    }
}





//efeito nos cards quando clicado

let btnDetalhes = document.querySelectorAll(".btn-detalhes")
let imgProjecto = document.querySelectorAll(".img-projecto")

let cardProjectoTitle = document.querySelectorAll(".card-projecto-title")
let cardProjectoDescricao = document.querySelectorAll(".card-projecto-descricao")

let cont0 = 0
let cont1 = 0
let cont2 = 0
let cont3 = 0


//card 1
btnDetalhes[0].onclick=function () {
    cont0++
    if (cont0%2!=0) {
        imgProjecto[0].classList.add("img-projecto-expandir")    
        imgProjecto[0].style.transition="0.5s"
        imgProjecto[0].innerHTML='<span class="card-projecto-title">E-commerce</span> <div class="card-projecto-descricao">Loja virtual, direccionado a empreendedores <br>Esta aplicação visa massificar a divulgação dos produtos de uma empresa <br>Desenvolvimento web</div>'

        imgProjecto[1].classList.remove("img-projecto-expandir")   
        imgProjecto[2].classList.remove("img-projecto-expandir")   
        imgProjecto[3].classList.remove("img-projecto-expandir")
        imgProjecto[1].innerHTML=""
        imgProjecto[2].innerHTML=""
        imgProjecto[3].innerHTML="" 
        cont1=0
        cont2=0
        cont3=0
    }else{
        imgProjecto[0].classList.remove("img-projecto-expandir")   
        imgProjecto[0].style.transition="0.5s"
        imgProjecto[0].innerHTML=""

    }
}

//card 2
btnDetalhes[1].onclick=function () {
    cont1++
    if (cont1%2!=0) {
        imgProjecto[1].classList.add("img-projecto-expandir")   
        imgProjecto[1].style.transition="0.5s"
        imgProjecto[1].innerHTML='<span class="card-projecto-title">Gestão de Listas de Presença</span> <div class="card-projecto-descricao">Software de aplicação, direccionado a professores <br>Esta aplicação visa auxiliar os professores no controle das listas <br>Desenvolvimento web</div>'

        imgProjecto[0].classList.remove("img-projecto-expandir")   
        imgProjecto[2].classList.remove("img-projecto-expandir")   
        imgProjecto[3].classList.remove("img-projecto-expandir") 
        imgProjecto[0].innerHTML=""
        imgProjecto[2].innerHTML=""
        imgProjecto[3].innerHTML="" 
        cont0=0
        cont2=0
        cont3=0   
    }else{
        imgProjecto[1].classList.remove("img-projecto-expandir")     
        imgProjecto[1].style.transition="0.5s"
        imgProjecto[1].innerHTML=""

    }
}

//card 3
btnDetalhes[2].onclick=function () {
    cont2++
    if (cont2%2!=0) {
        imgProjecto[2].classList.add("img-projecto-expandir")  
        imgProjecto[2].style.transition="0.5s"
        imgProjecto[2].innerHTML='<span class="card-projecto-title">Portifólio entidade individual</span> <div class="card-projecto-descricao">CV virtual, direccionado a entidades individuais <br>Esta aplicação visa expor o perfil técnico de um indivíduo <br>Desenvolvimento web</div>'

        imgProjecto[0].classList.remove("img-projecto-expandir")   
        imgProjecto[1].classList.remove("img-projecto-expandir")   
        imgProjecto[3].classList.remove("img-projecto-expandir") 
        imgProjecto[0].innerHTML=""
        imgProjecto[1].innerHTML=""
        imgProjecto[3].innerHTML=""
        cont0=0
        cont1=0
        cont3=0

    }else{
        imgProjecto[2].classList.remove("img-projecto-expandir")     
        imgProjecto[2].style.transition="0.5s"
        imgProjecto[2].innerHTML=""

    }
}

//card 4
btnDetalhes[3].onclick=function () {
    cont3++
    if (cont3%2!=0) {
        imgProjecto[3].classList.add("img-projecto-expandir")  
        imgProjecto[3].style.transition="0.5s"
        imgProjecto[3].innerHTML='<span class="card-projecto-title">Gestão de Congregações JW</span> <div class="card-projecto-descricao">Software de aplicação, direccionado às Testemunhas de Jeová <br>Esta aplicação visa o controle de uma congregagação JW<br>Asp Net</div>'

        imgProjecto[0].classList.remove("img-projecto-expandir")   
        imgProjecto[1].classList.remove("img-projecto-expandir")   
        imgProjecto[2].classList.remove("img-projecto-expandir") 
        imgProjecto[0].innerHTML=""
        imgProjecto[1].innerHTML=""
        imgProjecto[2].innerHTML=""
        cont0=0
        cont1=0
        cont2=0
    }else{
        imgProjecto[3].classList.remove("img-projecto-expandir")     
        imgProjecto[3].style.transition="0.5s"
        imgProjecto[3].innerHTML=""

    }
}
