var score = 75;
var msg = '';

function congratulate(){
  msg += 'Congratulations! ';
}

if (score >= 50) {
    congratulate();
    msg += 'Procces to the next round';
}

var el = document.getElementById('answer');
el.innerHTML = msg;