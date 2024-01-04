function addnewWeField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-3");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");
  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");
  weOb.insertBefore(newNode, weAddButtonOb);
}
function addnewAq() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-3");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");
  let weOb = document.getElementById("aq");
  let weAddButtonOb = document.getElementById("aqAddButton");
  weOb.insertBefore(newNode, weAddButtonOb);
}
function generateCV() {
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;
  document.getElementById("nameT2").innerHTML = nameField;
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;
  document.getElementById("gitT").innerHTML =
    document.getElementById("gitField").value;
  document.getElementById("linkedT").innerHTML =
    document.getElementById("linkedField").value;
  document.getElementById("leetcodeT").innerHTML =
    document.getElementById("leetcodeField").value;
  document.getElementById("objT").innerHTML =
    document.getElementById("objField").value;
  let res = document.getElementsByClassName("weField");
  let str = "";
  for (let e of res) {
    str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("workT").innerHTML = str;
  let res1 = document.getElementsByClassName("eqField");
  let str1 = "";
  for (let e of res1) {
    str1 = str1 + `<li>${e.value}</li>`;
  }
  document.getElementById("aqT").innerHTML = str1;
  let file = document.getElementById("imgField").files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);
  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}
function printCV() {
  window.print();
}
