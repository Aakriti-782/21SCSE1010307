const axios = require("axios");

const data = {
  companyName: "affordmed",
  clientID: "5aef88c2-3bb4-4ac7-ab01-44ec0611b5cc",
  clientSecret: "AnEQWXXKdXRlsnyu",
  ownerName: "Aakriti Gupta",
  rollNo: "21SCSE1010307",
  ownerEmail: "aakritigupta761989@gmail.com",
};

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

axios
  .post("http://20.244.56.144/test/auth", data, config)
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  });