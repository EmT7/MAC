import md5 from 'js-md5';

export const  searchMarvelComics = (query) => {


    let ts = "1234"
    //let publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY
    let publicKey = "98857d651c6ba3b8d6f8b8a58cbc5ab0"
    //console.log(`publicKey: ${publicKey}`)
    //let privateKey = process.env.REACT_APP_MARVEL_PRIVATE_API_KEY
    let privateKey = "f26733a20862b3ea118ed7a95e1db43e08601384"
    //console.log(`privateKey: ${privateKey}`)
    let hash = md5(ts + privateKey + publicKey)

    console.log(hash)

    let uri = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    let comicsResp = fetch(uri).then(
    response => response.json())
    .then(data => console.log(data)
    );

    console.log(comicsResp)

    return(comicsResp);
  };
