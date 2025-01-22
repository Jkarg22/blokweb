// JavaScript Document
console.log("hi");

const openBtn = document.querySelector('header nav button');

const closeBtn = document.querySelector('main nav div button')

const menuItem = document.querySelector('main nav')


openBtn.addEventListener('click', ()=>{
  menuItem.classList.add('active');
})

closeBtn.addEventListener('click', ()=>{
  menuItem.classList.remove('active');
})




