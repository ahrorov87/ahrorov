// function openModal() {
//   document.querySelector(".modal").style.display = "block";
// }

// function closeModal() {
//   document.querySelector(".modal").style.display = "none";
// }

let modal = document.querySelector(".modal");
let shadow = document.querySelector(".shadow");

// ==============================
// shadow.classList.add("nimadur");
// modal.classList.remove("none");
//===============================
let modalClass = shadow.classList;
console.log(modalClass);

function openModal() {
  modal.classList.remove("none");
  shadow.classList.remove("none");
}

function closeModal() {
  modal.classList.add("none");
  shadow.classList.add("none");
}



function soya(){
  modal.classList.add("none");
  shadow.classList.add("none");
}




document.addEventListener("keydown", (e) => {
  console.log(e);
  modal.classList.add("none");
  shadow.classList.add("none");
});


// document.addEventListener("keydown", (Enter) => {
//   console.log(Enter);
//   modal.classList.remove("none");
//   shadow.classList.remove("none");
// });