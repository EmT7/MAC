import md5 from 'md5'

var PRIV_KEY = "bc50bff54553e9f96a24b7f680076b5c6c040488";
var PUBLIC_KEY = "97a0ce4758cb2a37f84f38a6943e1bf5";

var ts = new Date().getTime();
var hash = md5(ts + PRIV_KEY + PUBLIC_KEY);

export const searchMarvelComics = (query) => {
  return fetch(`https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
  // .then((response)=>{
  //   return response.json()
  // })
  // .then((result)=>{
  //   console.log(result)
  //   return result
  // })
};
