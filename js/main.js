let putMouseHere = document.querySelector(".putMouseHere")
let displayMessage = document.querySelector(".hiddenDiv")
let name = document.querySelector(".name")
let address = document.querySelector(".address")
let job = document.querySelector(".job")
let university = document.querySelector(".university")

let showMessage = () => {
    setTimeout(() => {
        displayMessage.style.backgroundColor = "lightslategray";
        displayMessage.style.transition = "all 1s";
        setTimeout(() => {
            name.style.color = "black";
        }, 1000);
        setTimeout(() => {
            address.style.color = "black";
        }, 2000);
        setTimeout(() => {
            job.style.color = "black";
        }, 3000);
        setTimeout(() => {
            university.style.color = "black";
        }, 4000);
    });
}

let hideMessage = () => {
    setTimeout(() => {
        setTimeout(() => {
            university.style.color = "";
            university.style.transition = "all 1s";
        }, 1000);
        setTimeout(() => {
            job.style.color = "";
            job.style.transition = "all 1s";
        }, 2000);
        setTimeout(() => {
            address.style.color = "";
            address.style.transition = "all 1s";
        }, 3000);
        setTimeout(() => {
            name.style.color = "";
            name.style.transition = "all 1s";
            displayMessage.style.backgroundColor = "";
            displayMessage.style.transition = "all 0.5s";
        }, 4000);
    });

}


putMouseHere.addEventListener("mouseenter", showMessage);
putMouseHere.addEventListener("mouseleave", hideMessage)