//import React, { Component } from 'react';
import md5 from 'js-md5';

let ts = "1234"
let publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY
let privateKey = process.env.REACT_APP_MARVEL_PRIVATE_API_KEY
export const  searchMarvelComics = (query) => {

let hash = md5(ts + privateKey + publicKey)

console.log(hash)




//return fetch( `http://gateway.marvel.com:443/v1/public/comics?ts=1234&apikey={REACT_APP_MARVEL_PUBLIC_API_KEY}&hash=md5(3623f846ef760096e1a1cd400518cbba)${query}`);
//};


let uri = "http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey={publicKey}&hash=md5(3623f846ef760096e1a1cd400518cbba)";

let comicsResp = fetch(uri).then(
 response => response.json())
  .then(data => console.log(data))
  .catch([], => {
  
  });

  console.log(comicsResp)

  //return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);






