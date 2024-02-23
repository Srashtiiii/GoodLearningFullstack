function download(cb)
{
    console.log("Download starts");
    setTimeout(function()
    {
        console.log("Download ends");
        cb(upload);
    },2000);

}


function compress(cb)
{

    
    console.log("Compression starts");
    setTimeout(function()
    {
        console.log("Compression ends");
        cb();
    },2000);


}

function upload()
{
    
    console.log("Upload starts");
    setTimeout(function()
    {
        console.log("Upload ends");
    },2000);

}


download(compress);