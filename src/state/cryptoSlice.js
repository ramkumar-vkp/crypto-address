import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencies: [
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
    {
      name: "binance-usd",
      symbol: "busd",
      logo: "/logos/binance-usd-busd-logo.svg",
      address: [],
    },
    {
      name: "bitcoin",
      symbol: "btc",
      logo: "/logos/bitcoin-btc-logo.svg",
      address: [],
    },
    {
      name: "bitcoin-cash",
      symbol: "bch",
      logo: "/logos/bitcoin-cash-bch-logo.svg",
      address: [],
    },
    {
      name: "bitcoin-sv",
      symbol: "bsv",
      logo: "/logos/bitcoin-sv-bsv-logo.svg",
      address: [],
    },
    {
      name: "cardano",
      symbol: "ada",
      logo: "/logos/cardano-ada-logo.svg",
      address: [],
    },
    {
      name: "chainlink",
      symbol: "link",
      logo: "/logos/chainlink-link-logo.svg",
      address: [],
    },
    {
      name: "compound",
      symbol: "comp",
      logo: "/logos/compound-comp-logo.svg",
      address: [],
    },
    {
      name: "cosmos",
      symbol: "atom",
      logo: "/logos/cosmos-atom-logo.svg",
      address: [],
    },
    {
      name: "dogecoin",
      symbol: "doge",
      logo: "/logos/dogecoin-doge-logo.svg",
      address: [],
    },
    {
      name: "eos",
      symbol: "eos",
      logo: "/logos/eos-eos-logo.svg",
      address: [],
    },
    {
      name: "ethereum-classic",
      symbol: "etc",
      logo: "/logos/ethereum-classic-etc-logo.svg",
      address: [],
    },
    {
      name: "ethereum",
      symbol: "eth",
      logo: "/logos/ethereum-eth-logo.svg",
      address: [],
    },
    {
      name: "filecoin",
      symbol: "fil",
      logo: "/logos/filecoin-fil-logo.svg",
      address: [],
    },
    {
      name: "ftx-token",
      symbol: "ftt",
      logo: "/logos/ftx-token-ftt-logo.svg",
      address: [],
    },
    {
      name: "internet-computer",
      symbol: "icp",
      logo: "/logos/internet-computer-icp-logo.svg",
      address: [],
    },
    {
      name: "iota",
      symbol: "miota",
      logo: "/logos/iota-miota-logo.svg",
      address: [],
    },
    {
      name: "klaytn",
      symbol: "klay",
      logo: "/logos/klaytn-klay-logo.svg",
      address: [],
    },
    {
      name: "litecoin",
      symbol: "ltc",
      logo: "/logos/litecoin-ltc-logo.svg",
      address: [],
    },
    {
      name: "maker",
      symbol: "mkr",
      logo: "/logos/maker-mkr-logo.svg",
      address: [],
    },
    {
      name: "monero",
      symbol: "xmr",
      logo: "/logos/monero-xmr-logo.svg",
      address: [],
    },
    {
      name: "multi-collateral-dai",
      symbol: "dai",
      logo: "/logos/multi-collateral-dai-dai-logo.svg",
      address: [],
    },
    {
      name: "neo",
      symbol: "neo",
      logo: "/logos/neo-neo-logo.svg",
      address: [],
    },
    {
      name: "pancakeswap",
      symbol: "cake",
      logo: "/logos/pancakeswap-cake-logo.svg",
      address: [],
    },
    {
      name: "polkadot-new",
      symbol: "dot",
      logo: "/logos/polkadot-new-dot-logo.svg",
      address: [],
    },
    {
      name: "polygon",
      symbol: "matic",
      logo: "/logos/polygon-matic-logo.svg",
      address: [],
    },
    {
      name: "shiba-inu",
      symbol: "shib",
      logo: "/logos/shiba-inu-shib-logo.svg",
      address: [],
    },
    {
      name: "solana",
      symbol: "sol",
      logo: "/logos/solana-sol-logo.svg",
      address: [],
    },
    {
      name: "stellar",
      symbol: "xlm",
      logo: "/logos/stellar-xlm-logo.svg",
      address: [],
    },
    {
      name: "terra-luna",
      symbol: "luna",
      logo: "/logos/terra-luna-luna-logo.svg",
      address: [],
    },
    {
      name: "tether",
      symbol: "usdt",
      logo: "/logos/tether-usdt-logo.svg",
      address: [],
    },
    {
      name: "tezos",
      symbol: "xtz",
      logo: "/logos/tezos-xtz-logo.svg",
      address: [],
    },
    {
      name: "theta",
      symbol: "theta",
      logo: "/logos/theta-theta-logo.svg",
      address: [],
    },
    {
      name: "tron",
      symbol: "trx",
      logo: "/logos/tron-trx-logo.svg",
      address: [],
    },
    {
      name: "uniswap",
      symbol: "uni",
      logo: "/logos/uniswap-uni-logo.svg",
      address: [],
    },
    {
      name: "unus-sed-leo",
      symbol: "leo",
      logo: "/logos/unus-sed-leo-leo-logo.svg",
      address: [],
    },
    {
      name: "usd-coin",
      symbol: "usdc",
      logo: "/logos/usd-coin-usdc-logo.svg",
      address: [],
    },
    {
      name: "vechain",
      symbol: "vet",
      logo: "/logos/vechain-vet-logo.svg",
      address: [],
    },
    {
      name: "wrapped-bitcoin",
      symbol: "wbtc",
      logo: "/logos/wrapped-bitcoin-wbtc-logo.svg",
      address: [],
    },
    {
      name: "xrp",
      symbol: "xrp",
      logo: "/logos/xrp-xrp-logo.svg",
      address: [],
    },
  ],
};

export const cryptosSlice = createSlice({
  name: "cryptos",
  initialState,
  reducers: {
    addCrypto: (state, action) => {
      state.currencies.forEach((obj) => {
        if (obj.name == action.payload.name) {
          obj.address.push(action.payload.address);
        }
      });
    },
    loadInitialData: (state, action) => {
      state.currencies = action.payload;
    },
  },
});

export const { addCrypto, loadInitialData } = cryptosSlice.actions;

export default cryptosSlice.reducer;
