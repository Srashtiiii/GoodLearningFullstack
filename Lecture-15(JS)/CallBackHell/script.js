function download(cb)
{
    console.log("Download started");
    setTimeout(function()
    {
        console.log("Download ended");
        cb(upload);
    },2000);

}




function compress(cb)
{

    
    console.log("Compression started");
    setTimeout(function()
    {
        console.log("Compression ended");
        cb();
    },2000);


}

function upload()
{
    
    console.log("Upload started"); 
    setTimeout(function()
    {
        console.log("Upload ended");
    },2000);

}

download(compress);