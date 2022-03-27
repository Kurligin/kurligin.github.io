let drop_width = 1;
let drop_height = 8;
let timer;
let canvas = document.querySelector('#rain');
let rain = canvas.getContext("2d");

let drops_x = [];
let drops_y = [];
let drops_speed = [];

function create_drops() {
    for (i = 0; i < 800; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height * -1;
        let speed = Math.random() * 6 - 3;
        drops_x.push(x);
        drops_y.push(y);
        drops_speed.push(speed);
    }
}

function move_drops() {
    for (i = 0; i < 800; i++) {
        drops_y[i] += drops_speed[i];
        if (drops_y[i] >= canvas.height) {
            drops_x[i] = Math.random() * canvas.width;
            drops_y[i] = 0;
        }
    }
}

function draw_scene() {
    for (i = 0; i < 800; i++) {
        rain.beginPath();
        rain.fillStyle = "rgb(35, 37, 61)";
        rain.fillRect(drops_x[i], drops_y[i], drop_width, drop_height);
        rain.closePath();
    }
}

function engine() {
    rain.clearRect(0, 0, canvas.width, canvas.height);
    move_drops();
    draw_scene();
}

create_drops();
timer = setInterval(engine, 5);

window.addEventListener('resize', function(){
    for (i = 0; i < 800; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height * -1;
        drops_x.push(x);
        drops_y.push(y);
    }
})