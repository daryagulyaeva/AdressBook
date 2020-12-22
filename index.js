let contacts = [];
document.getElementById("add").onclick = function () {
  let name = document.getElementById("name").value;
  let secondName = document.getElementById("second_name").value;
  let patronymic = document.getElementById("patronymic").value;
  let phoneNumber = document.getElementById("phone_number").value;
  let modalAdd = document.getElementById("modal-add");
  let contact = {
    name: name,
    secondName: secondName,
    patronymic: patronymic,
    phoneNumber: phoneNumber,
  };
  contacts.push(contact);
  console.log(contacts);
  modalAdd.style.display = "none";
  renderContacts(contacts);
};

const renderContacts = (array) => {
  let out = "";
  array.forEach((element) => {
    out += `<div id="contact">
        ${element.name} ${element.secondName} 
        </div>`;
  });
  document.getElementsByClassName("view-contacts_list").innerHTML = out;
};

document.getElementById("open").onclick = function () {
  let modalAdd = document.getElementById("modal-add");
  modalAdd.style.display = "flex";
};
document.getElementById("close").onclick = function () {
  let modalAdd = document.getElementById("modal-add");
  modalAdd.style.display = "none";
};
