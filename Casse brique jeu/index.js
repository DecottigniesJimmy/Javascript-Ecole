// crée l'élement Canvas---------------------------------------------
var canvas = document.getElementById("myCanvas"); // recuperer l'élément canvas html
var ctx = canvas.getContext("2d"); // stocker le contexte de rendu 2D
//----------------------------------------------------------------

// position de départ de la balle----------------------------------
var x = canvas.width/2; // position de départ de la balle horizontal
var y = canvas.height-30; // position de départ de la balle vertical
//------------------------------------------------------------------

// Déplacement de la balle-----------------------------------------
var dx = 2; // utilisé dans la fonction draw pour déplacer la balle horizontalement
var dy = -2; // utilisé dans la fonction draw pour déplacer la balle verticalement
//---------------------------------------------------------------------------------

// Detection de collisions--------------------------------------------------
var ballRadius = 10; // déclarer une variable indiquant le rayon de la balle déja definit > ctx.arc(x, y, 10, 0, Math.PI*2) ( on remplace 10 par ballRadius)
//-------------------------------------------------------------------------

// création de la raquette pour frapper
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
//------------------------------------------------------------------------------------

// touche directionnelle -------------------------------------------
var rightPressed = false;
var leftPressed = false;
//--------------------------------------------------------------

function drawBall() {  // création de la balle
    ctx.beginPath(); // feuille de route
    ctx.arc(x, y, ballRadius, 0, Math.PI*2); // crée un cercle coordonnée x puis son rayon. 
    ctx.fillStyle = "#0095DD"; // affecte une couleur a la balle (noir par defaut)
    ctx.fill(); // afficher la couleur de la balle sur le html
    ctx.closePath(); // fin de la route
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() { // Mouvement de la balle
    ctx.clearRect(0, 0, canvas.width, canvas.height); // permet d'effacer le tracer de la balle après chaque mise a jour du canvas (toute les 10millisecondes)
    drawBall(); // afficher la balle function drawBall
    drawPaddle(); // afficher la raquette function drawPaddle
    x += dx; // addition + affectation direct pour faire bouger la balle horizontalement
    y += dy; // addition + affectation direct pour faire bouger la balle verticalement
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) { // rebondir la balle sur la limite width du canvas
        dx = -dx;
    }
    
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) { // rebondir la balle sur la limite heigth du canvas, || veut dire "ou"
        dy = -dy; // on inverse l'axe de mouvement une fois que la balle touche le mur du haut
    }

    if(rightPressed) {
        paddleX += 5;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(leftPressed) {
        paddleX -= 5;
        if (paddleX < 0){
            paddleX = 0;
        }
    }
  }
document.addEventListener("keydown", keyDownHandler, false); // ecouteur d'evenement savoir si l'on appuie sur la touche
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) { // Lorsque l'événement keydown est déclenché par l'appui d'une des touches de votre clavier (lorsqu'elles sont enfoncées), la fonction keyDownHandler() est exécutée.
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) { // événements keyup activent la fonction keyUpHandler() (lorsque les touches cessent d'être enfoncées
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}
  setInterval(draw, 10); // rafraichir toute les 10 secs la fonction Draw pour effectuer le mouvement