
const openGift = document.getElementById("openGift");
const letter = document.getElementById("letter");
const moreButton = document.getElementById("moreButton");
const wish = document.getElementById("wish");

openGift.addEventListener("click", function() {
    letter.classList.remove("hidden");
    openGift.textContent = "Sovg‘a ochildi!";
    openGift.disabled = true;
    letter.scrollIntoView({ behavior: "smooth" });
});

const wishes = [
    "Har bir kuning quvonchga to‘lsin.",
    "Barcha orzularing amalga oshsin.",
    "Doimo o‘zingga ishon va oldinga intil.",
    "Hayotingda ko‘plab go‘zal lahzalar bo‘lsin.",
    "Sen hurmat va baxtga loyiqsan."
];

let currentWish = 0;

moreButton.addEventListener("click", function() {
    wish.textContent = wishes[currentWish];
    currentWish = (currentWish + 1) % wishes.length;
});
