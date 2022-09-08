var dino = document.querySelector('.dino');
var score = document.querySelector('.score');
var block = document.querySelector('.block ');
var restart = document.querySelector('.restart ');
var body = document.queryCommandValue('body');
var count = 0;
var audio1 = new Audio("./feed-the-machine-classic-arcade-game-116846.mp3")
audio1.play()



  document.addEventListener('keydown', function () {
    dino.style.top = `${40}%`;
    setTimeout(function () {
        dino.style.top = `${80}%`;
        dino.style.transform = `rotate(${0}deg)`;

    }, 1000)
    count++;
    score.innerHTML = count;
})

setInterval(function gameover() {
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    var dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    if ((blockleft < 35) && (dinotop > 200)) {
        dino.style.display = "none";
        block.style.display = "none";
        restart.style.display = "block"
        count = 0;
        score.innerHTML = "0";
        audio1.pause()
    }
}, 20)
