const core = require("@actions/core");
const fetch = require("node-fetch");

const url = "https://www.alphavantage.co/query?";
const params = new URLSearchParams({
  function: core.getInput("function"),
  //function: "GLOBAL_QUOTE",
  symbol: core.getInput("symbol"),
  //symbol: "TSLA",
  //interval: "5min",
  apikey: process.env.API_KEY
});

(async () => {
  try {
    //var url = new URL("https://geo.example.org/api"),
    //    params = {lat:35.696233, long:139.570431}
    //Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    //console.log("xxx params", params);
    const response = await fetch(url + params);
    const json = await response.json();
    //core.setOutput("res", json);
    //console.log("json:", json["Meta Data"]);
    console.log("json:", json["Global Quote"]["05. price"]);

    core.setOutput("GQ-price", json["Global Quote"]["05. price"]);
    //console.log(json.origin);
  } catch (error) {
    console.error(error);
  }
})();
