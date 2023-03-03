let favC = document.querySelector('#color')
let favP = document.querySelector('#place')
let favR = document.querySelector('#ritual')


function color(e){
    e.preventDefault()
    alert('My favorite color is Brown or Black!')
}

function place(e){
    e.preventDefault()
    alert("My favorite place I've been to is Japan!")
}

function ritual(e){
    e.preventDefault()
    alert('I dont have any rituals...')
}

favC.addEventListener('click', color)
favP.addEventListener('click', place)
favR.addEventListener('click', ritual)