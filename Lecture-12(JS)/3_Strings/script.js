let str="Hello";

console.log(str);

for(let i=0; i<str.length; i++)
{
    console.log(str[i]);
}

for(let el in str)
{
    console.log(str[el]);
}

for(let indx of str)
    {
        console.log(str[indx]);
    }