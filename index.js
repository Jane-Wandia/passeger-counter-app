//document.getelementid("count-el".innerText=5)

let saveEl =Document.getElementById("save-el")
let countEl =Document.getElementById("count-el")
let count = 0

console.log(countEl) 

function increment() {
    count=count + 1
    countEl.innerText = count
}
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
}