import md5 from 'js-md5';

export const  searchMarvelComics = (query) => {


    let ts = "1234"
    let publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY
    let privateKey = process.env.REACT_APP_MARVEL_PRIVATE_API_KEY
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






