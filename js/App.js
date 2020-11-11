// connect element to variable
let table = document.getElementById("table");

let button = document.getElementById("addButton");
console.log(button);
button.addEventListener("click", getInputValue);

let fnameVal, lnameVal, phoneVal, emailVal, addressVal;

function getInputValue() {
    fnameVal = document.getElementById("fname").value;
    lnameVal = document.getElementById("lname").value;
    phoneVal = document.getElementById("phone").value;
    emailVal = document.getElementById("email").value;
    addressVal = document.getElementById("address").value;
    // td element for name
    let id = document.createElement("td");
    let fname = document.createElement("td");
    let lname = document.createElement("td");
    let phone = document.createElement("td");
    let email = document.createElement("td");
    let address = document.createElement("td");
    let deleteButton = document.createElement("button");
    let deleteButtonTD = document.createElement("td");

    // set content of td
    id.innerHTML = "0";
    fname.innerHTML = fnameVal;
    lname.innerHTML = lnameVal;
    phone.innerHTML = phoneVal;
    email.innerHTML = emailVal;
    address.innerHTML = addressVal;
    deleteButton.innerHTML = "Delete";

    // create element and store in variable
    let tr = document.createElement("tr");

    // set css class of item
    tr.className = "info-labels";

    deleteButton.onclick = () => {
        tr.remove();
    };

    // add td to tr
    tr.appendChild(id);
    tr.appendChild(fname);
    tr.appendChild(lname);
    tr.appendChild(phone);
    tr.appendChild(email);
    tr.appendChild(address);
    deleteButtonTD.appendChild(deleteButton);
    tr.appendChild(deleteButton);

    // add tr to table
    table.appendChild(tr);
}
