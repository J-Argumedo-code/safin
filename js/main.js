let count = 1;
const subHeading = document.getElementById("subHeading");
setInterval(() => {
    subHeading.style.animation = "slide 2s"
    subHeading.innerText = textos[count];

    setTimeout(() => {
        subHeading.style.animation = "";
    }, 2000);
    if (count == 2) count = -1;
    count++;
}, 5000);