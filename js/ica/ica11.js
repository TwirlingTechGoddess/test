const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas. getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

function random(number) {
    return Math.floor(Math.random() * number);
}

function random2(number) {
    return Math.random() * number;
}

function draw() {
    console.log("TEST");
    // ctx.clearRect(0,0, canvas.width, canvas.height); // if you want circles to disappear each time
    for(let i = 0; i < 25; i++){
        ctx.beginPath();
        let red = random(255);
        let green = random(255);
        let blue = random(255);
        let color = "rgba("+red+","+blue+","+green+", 0.5)";
        console.log(color);
        ctx.fillStyle = color;
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(100),
            0,
            100 * Math.PI
        );
        ctx.fill();
    }
    
}

btn.addEventListener("click", draw);