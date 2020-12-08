const core = require("@actions/core");
const fetch = require("node-fetch");

const url = "https://www.alphavantage.co/query?";
const params = new URLSearchParams({
  function: "TIME_SERIES_INTRADAY",
  symbol: core.getInput("symbol"),
  interval: "5min",
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
    console.log("json:", json);
    //console.log(json.origin);
  } catch (error) {
    console.error(error);
  }
})();
