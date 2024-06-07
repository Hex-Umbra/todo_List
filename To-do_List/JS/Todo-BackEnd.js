// Variables Globales
const ul = document.querySelector("#list"),
  input = document.querySelector("input"),
  btn = document.querySelector("#btn");

// Code
btn.addEventListener("click", addTodo);
listTodo();

// Fonctions
function addTodo() {
  const text = input.value;
  if (text != "") {
    setData(text);
    listTodo();
  } else {
    alert("Pls insert Something");
  }
  input.value = "";
  input.focus();
}
function setData(item) {
  if (getData(item) != false) {
    alert("Cette tâche existe déjà");
  } else {
    let data = getData();
    data = data != false ? data : [];
    data.push(item);
    data = JSON.stringify(data);
    localStorage.setItem("data", data);
  }
}
function getData(item = null) {
  let data = JSON.parse(localStorage.getItem("data"));
  if (data) {
    if (item) {
      if (data.indexOf(item) != -1) {
        return data[item];
      } else {
        return false;
      }
    }
    return data;
  }
  return false;
}
function listTodo() {
  let text = "";
  let data = getData();
  ul.innerHTML = text;
  if (data) {
    for (let item of data) {
      let listItem = document.createElement("li");
      listItem.textContent = item;
      ul.appendChild(listItem);
      let newbtn = document.createElement("button");
      newbtn.textContent = "Delete";
      newbtn.classList.add("btnSuppr");
      listItem.appendChild(newbtn);
      newbtn.addEventListener("click", () => {
        removeData(item);
      });
    }
  }
}
function removeData(tache) {
  let data = getData();
  let i = data.indexOf(tache);
  data.splice(i, 1);
  data = JSON.stringify(data);
  localStorage.setItem("data", data);
  listTodo();
}
