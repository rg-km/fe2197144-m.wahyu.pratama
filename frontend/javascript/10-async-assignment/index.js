/**
 * Get Starship name
 *
 * Ambil model starship apa saja yang pernah digunakan oleh seorang karakter starwars.
 * Contoh, karakter dengan id = 1 adalah "Luke Skywalker" pernah menggunakan starship "T-65 X-wing" dan "Lambda-class T-4a shuttle".
 * Keluarkan model starship tersebut dalam bentuk array of string.
 *
 * Referensi:
 * https://swapi.dev/documentation#people
 * https://swapi.dev/documentation#starships
 *
 *
 * Input: 1 //Karakter id
 * Output: ["T-65 X-wing", "Lambda-class T-4a shuttle"]
 *
 * Gunakan async/await untuk menyelesaikan tugas ini.
 *
 */

/**
 * Gunakan fungsi berikut untuk mempermudah http request.
 */

const https = require("https");

function getStarWarsData(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let result = "";

        if (res.statusCode !== 200) {
          reject(new Error(res.statusCode));
        }

        res.on("data", (d) => {
          result += d;
        });

        res.on("end", () => {
          resolve(result);
        });
      })
      .on("error", (e) => {
        reject(e);
      });
  });
}

async function getStarshipModelByCharacterId(id) {
  // TODO: answer here
  let result = [];
  let url = `https://swapi.dev/api/people/${id}/`;
  let data = await getStarWarsData(url);
  let dataJson = JSON.parse(data);
  for (let i = 0; i < dataJson.starships.length; i++) {
    let urlStarship = `https://swapi.dev/api/starships/${dataJson.starships[i]}/`;
    let dataStarship = await getStarWarsData(urlStarship);
    let dataStarshipJson = JSON.parse(dataStarship);
    result.push(dataStarshipJson.model);
 
  }
  return result;

}


module.exports = {
  getStarshipModelByCharacterId

};

