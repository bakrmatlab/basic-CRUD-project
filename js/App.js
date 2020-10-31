let list = document.getElementById('list');
let form = [
    document.getElementById('fname'),
    document.getElementById('lname'),
    document.getElementById('phone'),
    document.getElementById('email'),
    document.getElementById('address'),
];
let addButton = document.getElementById('add-button');
let itemCount = 0;

addButton.onclick = function () {
    let element = new Item(
        itemCount,
        form[0].value,
        form[1].value,
        form[2].value,
        form[3].value,
        form[4].value
    );

    list.appendChild(element.get());
    itemCount++;
};
