const t1 = performance.now()

for(let i=0 ; i<100 ; i++) {
    let para = document.createElement("p");
    para.textContent = "The is Para " + (i+1);
    document.body.appendChild(para);
}
const t2 = performance.now();
console.log(`The time required to execute the program : ${t2 - t1}`);

//code 2 

const start = performance.now()
let myDiv = document.createElement("div");

for(let i=0 ; i<=100 ; i++) {
    let para = document.createElement('p');
    para.textContent = "This is Paragraph : " + (i+1);
    myDiv.append(para);
}
document.body.appendChild(myDiv);
const end = performance.now();
console.log(`The time required to execute the program : ${end - start}`);

//Fragement : It takes No Reflow and Repaint
const t3 = performance.now()
const fragment = document.createDocumentFragment();

for(let i=0 ; i<100 ; i++) {
    let para = document.createElement('p');
    para.textContent = "This is Paragraph : " + (i+1);
    //No Reflow and no Repaint
    fragment.append(para);
}
//This below line will take one Reflow and one Repaint
document.body.appendChild(fragment)
const t4 = performance.now()
console.log("The time required is : " , (t4 - t3));