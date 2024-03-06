let btn=document.querySelector('.btn');
let movieList=btn.querySelector('.movieList');

let movie=[
    "Avengers",
    "Thor",
    "Ironman",
    "Loki",
    "Gadar"
];

let i=0;

btn.addEventListener("click", ()=> {
    if(i==movieList.length)
    {
        let url='https://i.imgflip.com/2/3q84ls.jpg';
        let img = document.createElement('img');
        img.setAttribute('src', url);
        movieList.appendChild(img);
        i++;
    }

    else if(i < movieList.length)
    {
        let li=document.createElement('li');
        li.innerText = movieList[i];
        movieList.appendChild(li);
        i++;
    })
}