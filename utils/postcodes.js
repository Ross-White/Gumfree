const fetch = require("node-fetch");

async function getLocation(postcode) {
  const data = await fetch(`https://api.postcodes.io/postcodes/${postcode}`, {
    method: "GET",
  });
  const {result} = await data.json();
  const { admin_district } = result;
  console.log(admin_district);
  return admin_district;
}

module.exports = getLocation;

