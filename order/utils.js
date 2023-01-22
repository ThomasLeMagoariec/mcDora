class Cart {
    constructor() {
        this.items = [];
        this.totalprice = 0;
    }

    addItem(i) {
        this.items.push(i);
        this.totalprice += i.getPrice();
    }

    removeItem(i) {
        this.items.splice(this.items.indexOf(i));
    }
}


class Item {
    constructor(name, type, price) {
        this.price = price;
        this.type = type;
        this.name = name;
        this.count = 0;
    }

    getPrice() {
        return this.price;
    }

    getType() {
        return this.type;
    }

    getName() {
        return this.name;
    }

    getCount() {
        return this.count;
    }

    upCount() {
        this.count++;
    }
}