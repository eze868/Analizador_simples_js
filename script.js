let num = document.querySelector('#txtInicio')
let mostraNum = document.querySelector('#res')
let resultado = document.querySelector('#result')
let valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }
    else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}


function adicionar(){

    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) // Adiciona valores no vetor

        let item = document.createElement('option') // Cria um option na Lista
        item.text = `Valor ${num.value} adicionado.` // Adiciona o valor no Option da Lista
        mostraNum.appendChild(item) // Mostra o Valor na lista

        resultado.innerHTML = '' // Limpa a Div result 
    }
    else{
        window.alert('[ERRO]')
    }
    num.value = '' // Limpa o Input
    num.focus() // Adiciona o Foco no Input

}

function finalizar(){
    if(valores == 0){
        alert('Adicione valores antes de finalizar!')
    }
    else{
        let total = valores.length
        let maior1 = valores
        let maior = Math.max.apply(null, maior1) // Metodo para encontrar o maior Valor
        let menor = Math.min.apply(null, maior1) // Metodo para encontrar o menor Valor

        var sum = 0
        for(var i=0; i<total; i++){ // Soma todos os números do array
            sum += valores[i]
        }

        media = sum / total // Calcula a média
        medFormat = media.toFixed(1) // Formata a média uma casa apos a virgula

        resultado.innerHTML = ''
        resultado.innerHTML += `<p> Ao todo, temos <strong>${total}</strong> números cadastrados </p>` 
        resultado.innerHTML += `<p> O maior valor informado é <strong>${maior}</strong> </p>` 
        resultado.innerHTML += `<p> O menor valor informado é <strong>${menor}</strong> </p>` 
        resultado.innerHTML += `<p> Somando todos os valores, temos <strong>${sum}</strong> </p>` 
        resultado.innerHTML += `<p> A média dos valores digitados é <strong>${medFormat}</strong> </p>` 
    }
}