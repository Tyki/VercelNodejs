// index.js

const axios = require("axios");
const express = require("express");
const app = express();

app.get("/myspecialusers", async function (req, res) {
  const fetchUser1 = axios.get("https://jsonplaceholder.typicode.com/users/1");
  const fetchUser4 = axios.get("https://jsonplaceholder.typicode.com/users/4");
  const fetchUser6 = axios.get("https://jsonplaceholder.typicode.com/users/6");

  const [response1, response4, response6] = await Promise.all([
    fetchUser1,
    fetchUser4,
    fetchUser6,
  ]);

  await axios({
    method: "post",
    url: `https://testdemo-c2ca.restdb.io/rest/test`,
    data: {
      user: [response1.data],
    },
    headers: {
      "x-apikey": "fb449cc964ef6fc07b1975476a575f11fdaba",
    },
  });

  res.send({
    responses: [response1.data, response4.data, response6.data],
  });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
