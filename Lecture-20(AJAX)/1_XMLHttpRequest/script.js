//1. create the xml http request object
let xml=new XMLHttpRequest();

//2. setup request
let url='https://cat-fact.herokuapp.com/facts'
xml.open('GET', url);

// 3. sucess hone par request ka kya krna h
xml.onload=(res)=>{
    console.log(res);
}

// 4. failure hone pr request ka kya krna h
xml.onerror=(res)=>{
    console.log(err);
}

BigInt.addEventListener()