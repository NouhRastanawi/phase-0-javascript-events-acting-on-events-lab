
const dodger = document.getElementById("dodger");
const game = document.getElementById("game");
const h = dodger.style.width.replace("px", "");

dodger.style.backgroundColor = "#008080";

document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

function moveDodgerRight() {
    const left_str = dodger.style.left.replace("px", "");
    const left = parseInt(left_str, 10);

    if (left < 400 - 40) {
        dodger.style.left = `${left + 1}px`;
    }
}

function moveDodgerLeft() {
    const left_str = dodger.style.left.replace("px", "");
    const left = parseInt(left_str, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}