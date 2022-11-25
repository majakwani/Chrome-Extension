let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")

inputBtn.addEventListener('click', function clickBtn(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})