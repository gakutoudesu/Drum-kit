var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function () {
       // alert("I got clicked");
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();

    });
}
/*document.querySelector('button').addEventListener("click", handleClick);

function handleClick() {
    alert('i got clicked');
}*/