"use strict"

const signUpForm = document.querySelector(".signup");
signUpForm.hidden= true;


const loginForm = document.querySelector(".login");
document.querySelector('.login p').addEventListener('click',()=>{
	signUpForm.hidden = false;
	loginForm.hidden = true;

})
document.querySelector('.signup p').addEventListener('click',()=>{
	signUpForm.hidden = true;
	loginForm.hidden = false;

})

