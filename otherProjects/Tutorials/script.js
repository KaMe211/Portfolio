const Counter = document.querySelector('#Counter')
const increase = document.querySelector('#increase')
const reset = document.querySelector('#reset')
const decrease = document.querySelector('#decrease')


let counterCount = 0

increase.addEventListener('click', function(){
    counterCount++
    Counter.innerText = counterCount
    }   )

decrease.addEventListener('click', function(){
    counterCount--
    Counter.innerText = counterCount
    }   )

reset.addEventListener('click', function(){
    counterCount = 0
    Counter.innerText = 'Counter'
    }   )