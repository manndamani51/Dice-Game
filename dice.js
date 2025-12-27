window.onload = function () {

    let randomselect1 = Math.floor(Math.random()*6)+1;
    let selectimg1 = "images/dice" + randomselect1 + ".png";
    document.querySelectorAll('img')[0].src = selectimg1;

    let randomselect2 = Math.floor(Math.random()*6)+1;
    let selectimg2 = "images/dice" + randomselect2 + ".png";
    document.querySelectorAll('img')[1].src = selectimg2;

    if (randomselect1 === randomselect2) {
        document.querySelector('h1').innerText = "Draw!";
    }
    else if (randomselect1 > randomselect2) {
        document.querySelector('h1').innerText = "Player 1 wins!";
    }
    else {
        document.querySelector('h1').innerText = "Player 2 wins!";
    }
};
