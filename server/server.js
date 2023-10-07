const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const dotenv = require("dotenv");
const pool = require("./config/database.js");
const cors = require("cors");

// import the router from your routes file

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(favicon(path.resolve("../", "client", "public", "party.png")));
} else if (process.env.NODE_ENV === "production") {
  app.use(favicon(path.resolve("public", "party.png")));
  app.use(express.static("public"));
}

// specify the api path for the server to use
app.get("/api/all", (req, res) => {
  const query = "SELECT * FROM games";

  pool.query(query, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "Cannot read data file" });
      return;
    }
    const companies = data.rows;
    res.status(200).send(companies);
  });
});

app.get("/api/locations", (req, res) => {
  const query = "SELECT DISTINCT location FROM games";

  pool.query(query, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "Cannot read data file" });
      return;
    }
    const companies = data.rows;
    res.status(200).send(companies);
  });
});

app.get("/api/find/:id", (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM games WHERE location=$1";
  const values = [id.replaceAll("-", " ")];
  console.log(values);
  pool.query(query, values, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "Cannot read data file" });
      return;
    }
    const game = data.rows;
    console.log(game);

    if (game.length != 0) {
      res.status(200).send(game);
    } else {
      console.log("invalid id");
      res.status(404).send({ status: 404 });
    }
  });
});

if (process.env.NODE_ENV === "production") {
  app.get("/*", (_, res) => res.sendFile(path.resolve("public", "index.html")));
}

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
