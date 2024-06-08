let btn=document.querySelector('button');
let movieList = document.querySelector('.movieList');

let movies=[
    "Aladdin",
    "Lord of the Rings",
    "The Lion King",
    "The Little Mermaid",
    "The Incredibles",
    "Toy Story",
    "Finding Nemo",
];

let i=0;


btn.addEventListener("click",() => {
    if(i==movieList){
        console.log("List ended successfully");
        i++;

    }
    else if(i<movieList.length){
    movieList.innerHTML +=`<li>${movies[i]}</li>`
    i++;
}

})