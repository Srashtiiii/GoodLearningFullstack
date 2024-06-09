let body=document.querySelector('body');
let navBar=document.querySelector('navBar');

window.onscroll=(ev)=>{
    // console.log(window.scrollY);
    if(window.scrollY>300) {  
        navBar.style.backgroundColor="orange";
      }
      else{
        navBar.style.backgroundColor="white";
      }
      
}