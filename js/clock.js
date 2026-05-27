const clock = document.querySelector(".time__clock")

function viewClock(){
    const date = new Date()
    let hour = date.getHours().toString().padStart(2,"0")
    let minute = date.getMinutes().toString().padStart(2,"0")
    let seconed = date.getSeconds().toString().padStart(2,"0")
clock.innerText = `${hour} : ${minute} : ${seconed} `
}


viewClock()
setInterval(viewClock, 1000)