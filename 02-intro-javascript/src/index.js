//const getImagenPromesa = () => 
//new Promise( resolve => resolve('https://hola.com'))


//getImagenPromesa().then(console.log);



const getImagen = async() => {
    const apiKey = 'ZsHigdk5nw6xQRYWC2ige7ShTiR3sn4i';
    const resp = await fetch (`http://api.giphy.copm/v1/gifs/random?api_key=${ apiKey}`);
    const data = await resp.json();

    console.log(data);
}

