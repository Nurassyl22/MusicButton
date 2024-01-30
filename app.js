const sounds = new Map([
  ["w", "./sounds/tom-1.mp3"],
  ["a", "./sounds/tom-2.mp3"],
  ["s", "./sounds/tom-3.mp3"],
  ["d", "./sounds/tom-4.mp3"],
  ["j", "./sounds/snare.mp3"],
  ["k", "./sounds/crash.mp3"],
  ["i", "./sounds/kick-bass.mp3"],
]);

function makeSound(key) {
  const url = sounds.get(key);
  const audio = new Audio(url);
  audio.play();
}

document.addEventListener("keyup", function (e) {
  makeSound(e.key);
});

const btns = document.querySelectorAll("button");

for (let btn of btns) {
  btn.addEventListener("click", function (e) {
    makeSound(btn.textContent);
  });
}
