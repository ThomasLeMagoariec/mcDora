const pub1 = document.querySelector(".pub1");
const pub2 = document.querySelector(".pub2");
const pub3 = document.querySelector(".pub3");
const orderbtn = document.querySelector(".cbtn");

orderbtn.addEventListener("click", () => {
    window.location.href = "/mcDora/order";
})

var i = 0;

function changeimg() {
    i++;
    console.log("test");
    if (i === 1) {
        pub1.style.zIndex = 10;
        pub2.style.zIndex = -10;
        pub3.style.zIndex = -10;
    }

    if (i === 2) {
        pub1.style.zIndex = -10;
        pub2.style.zIndex = 10;
        pub3.style.zIndex = -10;
    }
    if (i === 3) {
        pub1.style.zIndex = -10;
        pub2.style.zIndex = -10;
        pub3.style.zIndex = 10;
    }

    if (i > 4) {
        i = 0;

    }
}

function timer() {
    setInterval(changeimg, 2800);
}


timer();