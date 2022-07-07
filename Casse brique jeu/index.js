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

// Mise en place des variables briques------------------------------
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
//------------------------------------------------------------------

// placer les briques dans un tableaux a 2 dimensions qui contient les colonnes de briques ainsi que les lignes de briques
var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}
//----------------------------------------------------------------

// Var score------------------------------------------------------------
var score = 0;
//------------------------------------------------------------------

function drawBall() {  // création de la balle
    ctx.beginPath(); // feuille de route
    ctx.arc(x, y, ballRadius, 0, Math.PI*2); // crée un cercle coordonnée x puis son rayon. 
    ctx.fillStyle = "#0095DD"; // affecte une couleur a la balle (noir par defaut)
    ctx.fill(); // afficher la couleur de la balle sur le html
    ctx.closePath(); // fin de la route
}

function drawPaddle() { // création de la raquette 
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function draw() { // Mouvement de la balle
    ctx.clearRect(0, 0, canvas.width, canvas.height); // permet d'effacer le tracer de la balle après chaque mise a jour du canvas (toute les 10millisecondes)
    drawBall(); // afficher la balle function drawBall
    drawPaddle(); // afficher la raquette function drawPaddle
    drawScore(); // afficher le score
    collisionDetection(); // afficher la detection collision
    drawBricks(); // afficher les briques function drawBricks
    x += dx; // addition + affectation direct pour faire bouger la balle horizontalement
    y += dy; // addition + affectation direct pour faire bouger la balle verticalement
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) { // rebondir la balle sur la limite horizontal du canvas
        dx = -dx; // si la balle atteint la limite horizontale inverser l'axe de mouvement
    }
    
if(y + dy < ballRadius) { 
    dy = -dy;
} else if(y + dy > canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) { // permet de crée une collision entre la balle et la raquette
        dy = -dy;
    }
    else {
        alert("GAME OVER"); // si la balle atteint le mur d'en bas un message d'alerte s'affiche et la page s'actualise
        document.location.reload();
        clearInterval(interval); //utilisez pour chrome pour terminer la game
    }
}
    

    if(rightPressed) { // si le bouton fleche droit activer alors, decaller le paddle de 5px sur l'axe X
        paddleX += 5;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(leftPressed) { //si le bouton fleche gauche activer alors, decaller le paddle de 5px sur l'axe X
        paddleX -= 5;
        if (paddleX < 0){
            paddleX = 0;
        }
    }
  }
document.addEventListener("keydown", keyDownHandler, false); // ecouteur d'evenement savoir si l'on appuie sur la touche
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false); // ecoute evenement mouvement souris


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

function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("C'est gagné, Bravo!");
                        document.location.reload();
                        clearInterval(interval); // Needed for Chrome to end game
                    }
                }
            }
        }
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}

function mouseMoveHandler(e) { // detection mouvement souris
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}

var interval = setInterval(draw, 10); // rafraichir toute les 10 secs la fonction Draw pour effectuer le mouvement