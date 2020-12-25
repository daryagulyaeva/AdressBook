let contacts = [];
document.getElementById("add").onclick = function () {
  let name = document.getElementById("name").value;
  let secondName = document.getElementById("second_name").value;
  let patronymic = document.getElementById("patronymic").value;
  let phoneNumber = document.getElementById("phone_number").value;
  let modalAdd = document.getElementById("modal-add");
  /*усли у нас есть что-то в массиве, то прибавляется id по последнему id, если нет, то вовращается false*/
  let id = contacts[contacts.length - 1] && contacts[contacts.length - 1].id + 1;
  let contact = {
    /* здесь либо нам id, либо 1, если массив пустой*/
    id: id || 1,
    name: name,
    secondName: secondName,
    patronymic: patronymic,
    phoneNumber: phoneNumber,
  };
  contacts.push(contact);
  console.log(contacts);
  modalAdd.style.display = "none";
  document.getElementById("name").value = "";
  document.getElementById("second_name").value = "";
  document.getElementById("patronymic").value = "";
  document.getElementById("phone_number").value = "";
  renderContacts(contacts);
};

const renderContacts = (array) => {
  let out = "";
  array.forEach((element) => {
    out += `<div id="contact" onclick="test()">
        ${element.name} 
        ${element.secondName} 
        </div>`;
  });
  document.getElementById("view-contacts_list").innerHTML = out;
};
const test =() =>{
  let information=document.getElementById("view-information");
  information.style.display="flex";
  console.log(123);
}

document.getElementById("open").onclick = function () {
  let modalAdd = document.getElementById("modal-add");
  modalAdd.style.display = "flex";
};
document.getElementById("close").onclick = function () {
  let modalAdd = document.getElementById("modal-add");
  modalAdd.style.display = "none";
};
