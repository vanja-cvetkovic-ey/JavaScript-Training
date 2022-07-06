window.onload = function () {
  console.log("window loaded");
};

//event handlers
var btn = document.querySelector("button");
btn.onclick = function () {
  console.log("clicked!");
};

//event listeners

btn.addEventListener("click", listener1);
btn.addEventListener("click", listener2);

setTimeout(() => {
  btn.removeEventListener("click", listener1);
}, 2000);

function listener1() {
  console.log("listener 1");
}

function listener2() {
  console.log("listener 2");
}

// event behavior
var inner = document.querySelector("#inner");
var outer = document.querySelector("#outer");

inner.addEventListener("click", innerListener);
outer.addEventListener("click", outerListener);

function innerListener(event) {
  console.log(event.bubbles);
  event.stopPropagation();
  console.log("clicked inner");
}
function outerListener(event) {
  console.log("clicked outer");
}

//event object properties
// e.target.style.backgroundColor='red'
// e.clientX - position when the event happend (x possition)
