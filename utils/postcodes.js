const fetch = require("node-fetch");

async function getCoords(postcode) {
  const data = await fetch(`https://api.postcodes.io/postcodes/${postcode}`, {
    method: "GET",
  });
  const {result} = await data.json();
  const { latitude, longitude } = result;
  const coords = [latitude, longitude];
  console.log(coords);
  return coords;
}

getCoords('OL139RW');

module.exports = getCoords;

