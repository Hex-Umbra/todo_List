const ul = document.querySelector("#list");
const input = document.querySelector("input");
const btn = document.querySelector("#btn");
const tab = [];

// Body Code
btn.addEventListener("click", addTodo);
document.addEventListener("keydown", e =>{
  if(e.key === "Enter") addTodo();
})

showAll();

Delete();


// Fonctions
function addTodo() {
  const text = input.value;
  if (text === "") {
    alert("Veuillez écrire votre taĉhes");
  } else {
    makeLi(text);
    tab.push(text)
    console.log(tab);
  }
  input.value = "";
  input.focus();
  Delete();
  saveAll(tab);
}
function saveAll(value) {
  localStorage.setItem("data1", JSON.stringify(value));
}
function showAll() {
  ul.innerHTML = "";
  let data = localStorage.getItem(JSON.parse("data1"));
  console.log(data);
}
function Delete() {
  let suppr = document.querySelectorAll(".btnSuppr");
  suppr.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let data = localStorage.getItem(JSON.parse("data1"));
      for (let item of data) {
        localStorage.removeItem(item.indexOf(this));
      }
      saveAll();
    });
  });
}
function makeLi(value) {
  let listItem = document.createElement("li");
  listItem.textContent = value;
  ul.appendChild(listItem);
  let newbtn = document.createElement("button");
  newbtn.classList.add("btnSuppr");
  listItem.appendChild(newbtn);
}
