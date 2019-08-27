let myBtn = document.getElementById('botao')

console.log(myBtn)
myBtn.innerText = 'Oh botão'

let container = document.getElementsByClassName("classediv")
console.log(container)
console.log(container[0])

container[0].innerHTML = container[0].innerHTML + 
'<span>Aqui eh um outro texto dentro do span</span>'

myBtn.addEventListener('click', (evento) => {
    console.log('clicou')
    container[1].innerHTML = container[1].innerHTML + 
'<span> Pará seu lindo</span>'
})

let novoSpan = document.createElement('span')
novoSpan.innerText = 'Texto no novo SPAN'

container[0].append(novoSpan)