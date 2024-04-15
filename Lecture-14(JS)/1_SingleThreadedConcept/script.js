function delayOneSec(){
let currentTime=new Date().getTime();

while(new Date().getTime()-currentTime<1000)
{
    
}

}

function delayNSec(n){
    for(let i=0;i<n;i++){
        delayOneSec();
    }
}

delayNSec(5);
console.log("Hello World");