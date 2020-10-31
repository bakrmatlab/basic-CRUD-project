class Item {
    constructor(id, first_name, last_name, phone, email, address) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;
        this.email = email;
        this.address = address;

        this.elements = [];

        for (let i = 0; i < 6; i++) {
            this.elements.push(document.createElement('td'));
        }
    }

    initElements() {
        this.elements[0].innerHTML = this.id;
        this.elements[1].innerHTML = this.first_name;
        this.elements[2].innerHTML = this.last_name;
        this.elements[3].innerHTML = this.phone;
        this.elements[4].innerHTML = this.email;
        this.elements[5].innerHTML = this.address;
    }

    get() {
        this.initElements();

        let container = document.createElement('tr');
        container.className = 'item-labels';

        this.elements.map((element) => {
            container.appendChild(element);
        });

        return container;
    }
}
