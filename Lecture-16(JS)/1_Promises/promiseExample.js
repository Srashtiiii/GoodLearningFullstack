function downlaod(url) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            let extension = url.split('.').pop();
            if (['webp', 'png', 'jpg'].indexOf(extension) != -1) {
                let img = url.split('/').pop();
                resolve(img);
            }
            else {
                reject("Use correct URL");
            }
        }, 1000);
})
}

downlaod("http://randomurl.com/avengers.jpeg")
    .then(function (img) {
        console.log(img);
    })
    .catch(function (err) {
        console.log(err);
    })