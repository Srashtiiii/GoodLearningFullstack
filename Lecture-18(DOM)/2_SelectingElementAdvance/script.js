//1. using querySelector: will give you only one element
let movie=document.querySelector('.movie');
//let movie=document.querySelectorAll('.movie');
console.log(movie);

//2. Selecting id using querySelector
let gadar=document.querySelector('#gadar');
console.log(gadar);


//TagName 
let div=document.querySelectorAll('div');
console.log(div);

//pick the li item that has the class ironman
let ironman=document.querySelector('li.ironman');
console.log(ironman);