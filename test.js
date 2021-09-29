const currencies = [
  {
    name: "aave",
    symbol: "aave",
    logo: "/logos/aave-aave-logo.svg",
    address: [],
  },
  {
    name: "algorand",
    symbol: "algo",
    logo: "/logos/algorand-algo-logo.svg",
    address: [],
  },
  {
    name: "binance-coin",
    symbol: "bnb",
    logo: "/logos/binance-coin-bnb-logo.svg",
    address: [],
  },
];

let addAddress = "aave";

currencies.forEach((obj) => {
  if (obj.name == addAddress) {
    obj.address.push("Test");
  }
});

console.log(`Result : ${JSON.stringify(currencies)}`);
