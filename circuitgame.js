document.getElementById('storylabel').innerHTML = 'In this first circuit, you will have 20 seconds to write some text in the first box before it freezes for 20 seconds. This game keeps looping! The resulting text is displayed in the second box.';

document.getElementById('story').value = '';
var txt = '';
var timerrr = 21;

var rd_only = false;

function chrono() {

    timerrr -= 1;
    document.getElementById('timer').innerHTML = timerrr;
    if (timerrr == 0) {
        rd_only = !rd_only;
        document.getElementById('story').readOnly = rd_only;
        timerrr = 21;
        txt = document.getElementById('story').value;
        document.getElementById('storyfinal').value += txt;
        document.getElementById('story').value = '';
    }
}

function scoring() {
  var input = document.getElementById("storyfinal").value;
  var score_e = (input.split("e").length - 1) * 100;
  var score_y = (input.split("y").length - 1) * 250;
  var score_s = (input.split("s").length - 1) * 150;

  document.getElementById("score").innerHTML = score_e + score_y + score_s;
}


chrono();

var intervalID = window.setInterval(chrono, 1000);

var scoreID = window.setInterval(scoring, 1);

