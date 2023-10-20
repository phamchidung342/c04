var score = 75;
var msg;
if (score >= 50){
    msg = 'Congratulations!';
    msg += ' Procced to the next round';
}

var el = document.getElementById('answer');
el.textContent = msg;