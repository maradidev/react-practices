const apiKey = 'C1hQe3Z7R1W2lfT09myKeuShdqFYSGC';

const peticion = fetch(`http://api.giphy.copm/v1/gifs/random?api_key=${ apiKey}`);

peticion
    .then(resp => resp.json())
    .then(({data}) =>{
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);