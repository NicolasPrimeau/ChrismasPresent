

$(document).ready(function(){

    var maxClicks = 10;
    var minTimer = 1000;
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

    var setRandom = function() {
        var o = Math.round, r = Math.random, s = 255;
        color = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
        $('#wrapper').css("background-color", color);
    }
    setRandom()

    var vibrate = function() {
        navigator.vibrate(1000);
    }

    var deballe = function() {
        vibrate()
        alert("Déballe!");
        vibrate()

        maxClicks -= 1;

        if (maxClicks > 0) {
            setRandom()
            var waitTime = minTimer * Math.random() * 2
            setTimeout(deballe, waitTime);
        } else {
            setTimeout(redirect, 1000);
        }
    }

    var redirect = function() {
        window.location.replace("/cadeau");
    }
    vibrate()
    alert("Si t'es épileptique, regarde pas")
    setTimeout(deballe, 5000);
});