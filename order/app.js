const border = document.querySelector(".products");
const products = document.querySelectorAll(".product");
const menu = document.querySelector(".categories");
const categories = document.querySelectorAll(".category");
const pimg = document.querySelectorAll(".productimg");
const title = document.querySelector(".title");
const cart = document.querySelector(".cart");
const incart = document.querySelectorAll(".incart");
const carttitle = document.querySelector(".carttitle");
const total = document.querySelector(".total");
const totalstr = document.querySelector(".totalstr");
const orderbtn = document.querySelectorAll(".orderbtn");
const back = document.querySelector(".back");

const burgerBtn = document.querySelector(".burgersbtn");
const menusBtn = document.querySelector(".menusbtn");
const drinksBtn = document.querySelector(".boissonsbtn");
const dessertsBtn = document.querySelector(".dessertsbtn");

const burgers = document.querySelector(".burgers");
const menus = document.querySelector(".menus");
const drinks = document.querySelector(".boissons");
const desserts = document.querySelector(".desserts");

const askDrink = document.querySelector(".askdrink");
const askSauce = document.querySelector(".asksauce");
const askBurger = document.querySelector(".askburger");

const bchosen = document.querySelectorAll(".bchosen");
const schosen = document.querySelectorAll(".schosen");
const dchosen = document.querySelectorAll(".dchosen");

let burgerPrices = [1, 5, 3, 4, 3, 6, 7, 6, 9, 2]
let burgerNames = ["McChipper", "McDora", "x", "BigDiego", "WrapBabouche", "x", "BigMac", "McTasty", "x", "CroqueLaCarte"]

let menuPrices = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
let menuNames = ["BestOf", "x", "x", "MenuDora", "x", "x", "HappyMeal", "x", "x", "x"]

let drinkPrices = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
let drinkNames = ["Fanta", "Coca", "Ice Tea", "Sprite", "Biere", "Vodka", "Get 27", "Get 31", "Captain Morgan", "Whisky"]

let dessertPrices = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
let dessertNames = ["Icecream", "McFlurry", "Sundae", "BananaSplit", "DameBlanche", "Café", "x", "x", "x", "x"]

let selected = 1;

let order = new Cart();

// BURGER:  0
// MENU:    1
// DRINKS:  2
// DESSERT: 3


window.addEventListener("load", () => {
    title.style.fontSize = (window.innerWidth / 1000) + 1 + "rem";
    menu.style.maxWidth = (window.innerWidth / 100) * 12.5;
    categories.forEach(category => {
        category.style.fontSize = (window.innerWidth / 1000) - 0.5 + "rem";
    });

    incart.forEach(item => {
        item.style.fontSize = (window.innerWidth / 1000) - 0.5 + "rem";
    });

    carttitle.style.fontSize = (window.innerWidth / 1000) + "rem";
    totalstr.style.fontSize = (window.innerWidth / 1000) - 0.3 + "rem";

    border.style.maxWidth = (window.innerWidth / 100) * 60;
    cart.style.width = (window.innerWidth / 100) * 15;
    total.style.width = (window.innerWidth / 100) * 15;
    products.forEach(product => {
        product.style.maxWidth = (window.innerWidth / 100) * 20;
    });

    pimg.forEach(img => {
        img.style.width = (window.innerWidth / 150) + "rem";
        img.style.height = (window.innerWidth / 150) + "rem";
    });

    selected = 1;
    burgers.style.opacity = 0;
    menus.style.opacity = 1;
    drinks.style.opacity = 0;
    desserts.style.opacity = 0;
    askBurger.style.opacity = 0;
    askDrink.style.opacity = 0;
    askSauce.style.opacity = 0;


    burgers.style.zIndex = -10;
    menus.style.zIndex = 10;
    drinks.style.zIndex = -10;
    desserts.style.zIndex = -10;
    askBurger.style.zIndex = -10;
    askDrink.style.zIndex = -10;
    askSauce.style.zIndex = -10;
})


burgerBtn.addEventListener("click", () => {
    selected = 0;
    burgers.style.opacity = 1;
    menus.style.opacity = 0;
    drinks.style.opacity = 0;
    desserts.style.opacity = 0;
    askBurger.style.opacity = 0;
    askDrink.style.opacity = 0;
    askSauce.style.opacity = 0;

    burgers.style.zIndex = 10;
    menus.style.zIndex = -10;
    drinks.style.zIndex = -10;
    desserts.style.zIndex = -10;
    askBurger.style.zIndex = -10;
    askDrink.style.zIndex = -10;
    askSauce.style.zIndex = -10;
});

menusBtn.addEventListener("click", () => {
    selected = 1;
    burgers.style.opacity = 0;
    menus.style.opacity = 1;
    drinks.style.opacity = 0;
    desserts.style.opacity = 0;
    askBurger.style.opacity = 0;
    askDrink.style.opacity = 0;
    askSauce.style.opacity = 0;

    burgers.style.zIndex = -10;
    menus.style.zIndex = 10;
    drinks.style.zIndex = -10;
    desserts.style.zIndex = -10;
    askBurger.style.zIndex = -10;
    askDrink.style.zIndex = -10;
    askSauce.style.zIndex = -10;
});

drinksBtn.addEventListener("click", () => {
    selected = 2;

    burgers.style.opacity = 0;
    menus.style.opacity = 0;
    drinks.style.opacity = 1;
    desserts.style.opacity = 0;
    askBurger.style.opacity = 0;
    askDrink.style.opacity = 0;
    askSauce.style.opacity = 0;

    burgers.style.zIndex = -10;
    menus.style.zIndex = -10;
    drinks.style.zIndex = 10;
    desserts.style.zIndex = -10;
    askBurger.style.zIndex = -10;
    askDrink.style.zIndex = -10;
    askSauce.style.zIndex = -10;
});

dessertsBtn.addEventListener("click", () => {
    selected = 3;

    burgers.style.opacity = 0;
    menus.style.opacity = 0;
    drinks.style.opacity = 0;
    desserts.style.opacity = 1;
    askBurger.style.opacity = 0;
    askDrink.style.opacity = 0;
    askSauce.style.opacity = 0;

    burgers.style.zIndex = -10;
    menus.style.zIndex = -10;
    drinks.style.zIndex = -10;
    desserts.style.zIndex = 10;
    askBurger.style.zIndex = -10;
    askDrink.style.zIndex = -10;
    askSauce.style.zIndex = -10;
});


function askBurgerFn() {
    selected = -1;
    burgers.style.opacity = 0;
    menus.style.opacity = 0;
    drinks.style.opacity = 0;
    desserts.style.opacity = 0;
    askBurger.style.opacity = 1;
    askDrink.style.opacity = 0;
    askSauce.style.opacity = 0;

    burgers.style.zIndex = -10;
    menus.style.zIndex = -10;
    drinks.style.zIndex = -10;
    desserts.style.zIndex = -10;
    askBurger.style.zIndex = 10;
    askDrink.style.zIndex = -10;
    askSauce.style.zIndex = -10;
}

function askDrinkFn() {
    burgers.style.opacity = 0;
    menus.style.opacity = 0;
    drinks.style.opacity = 0;
    desserts.style.opacity = 0;
    askBurger.style.opacity = 0;
    askDrink.style.opacity = 1;
    askSauce.style.opacity = 0;

    burgers.style.zIndex = -10;
    menus.style.zIndex = -10;
    drinks.style.zIndex = -10;
    desserts.style.zIndex = -10;
    askBurger.style.zIndex = -10;
    askDrink.style.zIndex = 10;
    askSauce.style.zIndex = -10;
}

function askSauceFn() {
    burgers.style.opacity = 0;
    menus.style.opacity = 0;
    drinks.style.opacity = 0;
    desserts.style.opacity = 0;
    askBurger.style.opacity = 0;
    askDrink.style.opacity = 0;
    askSauce.style.opacity = 1;

    burgers.style.zIndex = -10;
    menus.style.zIndex = -10;
    drinks.style.zIndex = -10;
    desserts.style.zIndex = -10;
    askBurger.style.zIndex = -10;
    askDrink.style.zIndex = -10;
    askSauce.style.zIndex = 10;
}

function showMenus() {
    selected = 1;

    burgers.style.opacity = 0;
    menus.style.opacity = 1;
    drinks.style.opacity = 0;
    desserts.style.opacity = 0;
    askBurger.style.opacity = 0;
    askDrink.style.opacity = 0;
    askSauce.style.opacity = 0;

    burgers.style.zIndex = -10;
    menus.style.zIndex = 10;
    drinks.style.zIndex = -10;
    desserts.style.zIndex = -10;
    askBurger.style.zIndex = -10;
    askDrink.style.zIndex = -10;
    askSauce.style.zIndex = -10;
}


bchosen.forEach(b => {
    b.addEventListener("click", askDrinkFn);
})

schosen.forEach(s => {
    s.addEventListener("click", showMenus);
})

dchosen.forEach(d => {
    d.addEventListener("click", askSauceFn);
})


orderbtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let loc = e.srcElement.offsetParent.classList[1].slice(7);
        let toAdd = new Item();

        if (selected === 0) {
            toAdd = new Item(burgerNames[parseInt(loc) - 1], 0, burgerPrices[parseInt(loc) - 1]);
        } else if (selected === 1) {
            toAdd = new Item(menuNames[parseInt(loc) - 1], 1, menuPrices[parseInt(loc) - 1]);
        } else if (selected === 2) {
            toAdd = new Item(drinkNames[parseInt(loc) - 1], 2, drinkPrices[parseInt(loc) - 1]);
        } else if (selected === 3) {
            toAdd = new Item(dessertNames[parseInt(loc) - 1], 3, dessertPrices[parseInt(loc) - 1]);
        } else {
            console.log("failed");
        }

        order.addItem(toAdd);

        for (i = 0; i < order.items.length; i++) {
            if (order.items[i].getName() === toAdd.getName()) {
                order.items[i].upCount();
            }

            let changed = false;
            incart.forEach(j => {

                if (j.textContent === "" && !changed) {
                    j.textContent = order.items[i].getName() + " x" + order.items[i].getCount();
                    changed = true;
                } else {
                    if (j.textContent.split(" ")[0] === order.items[i].getName() && !changed) {
                        j.textContent = order.items[i].getName() + " x" + order.items[i].getCount();
                        changed = true;
                    }
                }
            });

            if (order.items[i].getName() === toAdd.getName() && order.items[i].getCount() > 1) {
                order.removeItem(toAdd);
            }

            totalstr.textContent = "Total: " + order.totalprice + ".00€";

        }

        if (toAdd.getType() === 1) {
            console.log("menu chosen")
            askBurgerFn();
        }

    });
});

back.addEventListener("click", () => {
    window.location.href = "/mcDora/index.html";
})