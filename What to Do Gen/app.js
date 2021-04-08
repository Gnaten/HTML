var list = ["Pokemon Go", "Clean up Room", "Minecraft", "Skribbl.io", "Cat Training", "Play w/ Cats", "Homework", "Drawing/Animation", "Study for AP tests", "Masturbate", "Card Games", "Coding", "Guitar", "Make cat videos", "Watch shows", "Find a horned lizard", "badminton", "blanket fort", "compare penis sizes", "cooking"];

function random(){
    var decision = Math.floor(Math.random()*list.length);
    var repl = document.getElementsByClassName('penis');
    repl[0].innerHTML = list[decision];
}
function aae(){
    var fetus = document.getElementById('ideas').value;
    list.push(fetus);
    var console = document.getElementsByClassName('log');
    var logging = document.createElement('p');
    console[0].appendChild(logging);
    logging.innerHTML = "Added:    " + "<b>" + fetus + "<b>";
}
