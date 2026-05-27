const toDoForm = document.querySelector(".todo__form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector(".todo__ul")

const SAVEDTODOLISTKEY ="toDoList"

let toDoArray = [];

function savedToDoList(){
    localStorage.setItem(SAVEDTODOLISTKEY, JSON.stringify(toDoArray))
}

function deleteBtn(event){
    const checkBtn =  event.target.parentElement;
    checkBtn.remove()
    toDoArray = toDoArray.filter((toDos) => toDos.id !== parseInt(checkBtn.id))
     savedToDoList()

}
 
function paintingToDo(toDoListObj){
    const li = document.createElement("li")
    li.id = toDoListObj.id
    const span = document.createElement("span")
    span.innerText = toDoListObj.text
    li.appendChild(span)
    const button = document.createElement("button")
    button.innerText = "❌"
    li.appendChild(button)
    toDoList.appendChild(li)
    button.addEventListener("click", deleteBtn)
}

function handleToDoForm(event){
    event.preventDefault()
    const toDoInputValue =  toDoInput.value
    const toDoListObj = {
        id : Date.now(),
        text : toDoInputValue
    }
    paintingToDo(toDoListObj)
    toDoArray.push(toDoListObj)
    savedToDoList()
    toDoInput.value = ""
}

toDoForm.addEventListener("submit", handleToDoForm)

const LOADTODOLIST = localStorage.getItem(SAVEDTODOLISTKEY)

if (LOADTODOLIST !== null){
   const FORTODOLIST =  JSON.parse(LOADTODOLIST)
    FORTODOLIST.forEach(paintingToDo)
}