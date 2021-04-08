var list = ["McDonalds", "BurgerKing", "ChickaFila", "Panda", "In-n-Out", "Pete", "Home", "Habit", "Five Guys", "Toppers", "Pizzahut", "Costco", "Poke", "Jersey Mike", "Lily"];
var bruv = document.getElementsByClassName('snoot');
bruv[0].addEventListener('click', function(){
    var decision = Math.floor(Math.random()*list.length);
    var repl = document.getElementsByClassName('ans');
    repl[0].innerHTML = list[decision];
});

function noscope(e){
    if(typeof e.onselectstart != "undefined") e.onselectstart = function(){
        return false
    };
    else if(typeof e.MozUserSelect != "undefined") e.MozUserSelect = "none";
    else e.onmousedown = function(){
        return false
    };
    e.style.cursor = "default";
}

function fullscreen() {
    if((window.fullScreen) || 
    (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
        document.getElementsByClassName('shivv')[0].style = "display: none;";   //Suppose to be none
    } else {
        document.getElementsByClassName('shivv')[0].style = "display: visible;";   //Suppose to be visible
    }
  }

//document.getElementsByClassName('target')[0].parentNode.insertBefore(document.getElementsByClassName('target')[0], document.getElementsByClassName('target goes before this element')[0]);

window.onload=function(e){
    noscope(document.body);
    fullscreen();
    document.addEventListener('keyup', function (e) {
        if (e.key === "F11") {
            fullscreen();
        }
    });
};