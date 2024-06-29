const signUpBtnLink =document.querySelector(".signUpBtn-link");
const signInBtnLink =document.querySelector(".signInBtn-link");
const wrapper =document.querySelector(".wrapper");
const toggleActiveClass =()=>{
    wrapper.classList.toggle("active");
}
signUpBtnLink.addEventListener("click" ,toggleActiveClass); 
signInBtnLink.addEventListener("click" ,toggleActiveClass);


/*
const btn =document.getElementById("btn");

let arr=[
[null , null , null] ,
[null , null , null] ,
[null , null , null] ,
]

let newArr= [...arr.map(e=>[...e])];
newArr[1][1]='mohmed'; 
newArr[3]=[["T"]]
console.log(arr);
console.log(newArr);
const chack = ()=>{
newArr = [];
console.log(newArr);
console.log(arr);
}

btn.addEventListener("click" , chack)

*/