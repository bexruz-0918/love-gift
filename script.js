document.addEventListener("DOMContentLoaded", function () {

    // Barcha sahifa havolalarini topish
    const links = document.querySelectorAll("a");

    // Har bir havolaga hodisa qo‘shish
    links.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Sahifa ochilmoqda...");
        });
    });

    // Rasmga bosilganda kattalashtirish
    const image = document.querySelector("img");

    if (image) {
        image.style.cursor = "pointer";

        image.addEventListener("click", function () {
            image.classList.toggle("zoom");
        });
    }

    // Sahifa ochilganda xabar chiqarish
    console.log("Aliya uchun maxsus sayt ishga tushdi!");

});