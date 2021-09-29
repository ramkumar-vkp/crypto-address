const currencies = [
  {
    name: "aave",
    symbol: "aave",
    logo: "/logos/aave-aave-logo.svg",
    address: ["test", "test2"],
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
let address = "test2";

currencies.forEach((obj) => {
  if (obj.name == addAddress) {
    let index = obj.address.indexOf(address);
    obj.address.splice(index, 1);
  }
});

console.log(`Result : ${JSON.stringify(currencies)}`);
