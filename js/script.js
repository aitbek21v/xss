const clock = document.querySelector('.clock')

function time () {
    let data = new Date();
    console.log(data)
    let hours = data.getHours()
    let minutes = data.getMinutes()
    clock.innerHTML = `${hours}:${minutes}`
}
setInterval(time,1000)

const app = document.querySelector('.cluch')
const modal = document.querySelector('.modal')
const clouse = document.querySelector('.cleos')
app.addEventListener('click',() => {
    modal.style.display = 'block'
})
clouse.addEventListener('click',() => {
    modal.style.display = 'none'
})

const clockk = document.querySelector('.clockk')
function timer () {
    let data = new Date();
    console.log(data)
    let hours = data.getHours()
    let minutes = data.getMinutes()
    clockk.innerHTML = `${hours}:${minutes}`
}
setInterval(timer,1000)

const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const hero = document.querySelector('#hero')
const cod = document.querySelector('.cod')
btn.addEventListener('click',() => {
    if (input.value === '12345') {
        cod.style.display = 'none'
        hero.style.display = 'block'
    }
})
