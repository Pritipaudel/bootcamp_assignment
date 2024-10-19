const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const color = document.getElementById("color").value;
    const bgc = document.getElementById("bgc").value;
    const content=document.getElementById("content").value;

    const output=document.getElementById("output");
    output.textContent=content;
    output.style.color=color;
    output.style.backgroundColor=bgc;
});