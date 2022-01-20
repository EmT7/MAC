export const searchGoogleBooks = (query) => {
  return fetch(`https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&orderBy=title&apikey=bc50bff54553e9f96a24b7f680076b5c6c040488`);
};
