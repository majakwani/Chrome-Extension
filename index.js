let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const saveTabBtn = document.querySelector("#tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads(myLeads);
}

saveTabBtn.addEventListener("click", function saveTab() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      myLeads.push(tabs[0].url);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      renderLeads(myLeads);
  })
  
});

deleteBtn.addEventListener("dblclick", function clearLeads() {
  localStorage.clear();
  myLeads = [];
  renderLeads(myLeads);
});

inputBtn.addEventListener("click", function clickBtn() {
  myLeads.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  inputEl.value = "";
  renderLeads(myLeads);
});

function renderLeads(arr) {
  let listItems = "";
  for (let i = 0; i < arr.length; i++) {
    listItems += `
        <li>
         <a target = "_blank" href = "${myLeads[i]}">
          ${myLeads[i]}
           </a>
           </li>`;
  }
  ulEl.innerHTML = listItems;
}
