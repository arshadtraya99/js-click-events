function changeText() {
    let p = document.querySelector("#para");
    p.textContent = "Hello Arshad";
}

let p = document.getElementById("para");
p.addEventListener("click" , changeText);


// =======Preventing Default Behaviour=======
let a = document.querySelector("a");

function prevention(event) {
    event.preventDefault();
}
a.addEventListener("click" , prevention);

let para = document.querySelectorAll("p");
function alerting(i) {
    alert(`You have clicked on Para : ${i+1}`);
}
para.forEach((el , i) => {
    el.addEventListener("click" , () => alerting(i));
    console.log(el)
})
