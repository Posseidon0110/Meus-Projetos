let rpega
if(localStorage.getItem('rotinas')){
    rpegar = localStorage.getItem('rotinas')
    routine = rpegar.split(',')
}
else{
    routine = [
        'Dormir','Dormir','Dormir','Dormir','Dormir','Dormir',
        'Dormir','Descansar','Descansar','Estudar','Estudar','Descansar',
        'Descansar','Descansar','Descansar','Estudar','Estudar','Descansar',
        'Descansar','Descansar','Descansar','Estudar','Estudar','Descansar'
    ]
}

function Rotina(){
    let HoraA = document.querySelector('#HoraAtual')
    let Tarefa = document.querySelector('#Tarefa')
    let hora = new Date().getHours()
    let minutos = new Date().getMinutes()
    

    HoraA.innerHTML = `Agora são ${hora} horas e ${minutos} minutos `
    
    Tarefa.innerHTML = routine[hora].toUpperCase()

    setTimeout("Rotina()",1000)
}

const btn = document.querySelector('#btn')
let nome = document.querySelector('#NomeTarefa')
let horario = document.querySelector('#HoraTarefa')
btn.addEventListener('click',() =>{
    if(nome.value != '' && horario.value != ''){
        if(horario.value >= 0 && horario.value <= 23){
            routine[horario.value] = nome.value
            nome.value = ''
            horario.value = ''
            console.log(routine)
        }
    }
    localStorage.setItem('rotinas', routine)
})