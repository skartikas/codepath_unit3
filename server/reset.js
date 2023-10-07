const pool = require("./config/database.js");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const fs = require("fs");
// const query = "DELETE FROM games";
// pool.query(query, (err, res) => {
//   if (err) {
//     throw err;
//   }

//   console.log(res);
// });

fs.readFile("../data.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const games = JSON.parse(data);

  games.forEach((game) => {
    const query = {
      text: `INSERT INTO games (id, title, location	,date,price	,logo) VALUES ($1, $2, $3, $4, $5, $6)`,
    };

    const values = [];
    Object.entries(game).forEach(([key, val]) => {
      values.push(val);
    });

    console.log(values);

    pool.query(query, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting companies", err);
        return;
      }

      console.log(`✅ ${game} added successfully`);
    });
  });
});
