import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencies: [
    {
      name: "Bitcoin",
      url: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=013",
      addresses: [
        "kkdfiertwekndkshfjhfa",
        "kkdfiertwekndkshfjasdha",
        "kkdfiertwekndkshfjhdsfada",
      ],
    },
    {
      name: "Ethereum",
      url: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=013",
      addresses: [
        "kkdfiertwekndkshfjhfa",
        "kkdfiertwekndkshfjasdha",
        "kkdfiertwekndkshfjhdsfada",
        "kkdfiertwekndkshfjhadsa",
        "kkdfiertwekndkshfjsddfha",
      ],
    },
    {
      name: "Cardano",
      url: "https://cryptologos.cc/logos/cardano-ada-logo.svg?v=013",
      addresses: [
        "kkdfiertwekndkshfjhfa",
        "kkdfiertwekndkshfjasdha",
        "kkdfiertwekndkshfjhdsfada",
        "kkdfiertwekndkshfjhadsa",
        "kkdfiertwekndkshfjsddfha",
      ],
    },
    {
      name: "Bitcoin",
      url: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=013",
      addresses: [
        "kkdfiertwekndkshfjhdsfada",
        "kkdfiertwekndkshfjhadsa",
        "kkdfiertwekndkshfjsddfha",
      ],
    },
    {
      name: "Bitcoin",
      url: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=013",
      addresses: [
        "kkdfiertwekndkshfjhfa",
        "kkdfiertwekndkshfjasdha",
        "kkdfiertwekndkshfjhdsfada",
        "kkdfiertwekndkshfjhadsa",
        "kkdfiertwekndkshfjsddfha",
      ],
    },
    {
      name: "Bitcoin",
      url: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=013",
      addresses: [
        "kkdfiertwekndkshfjhfa",
        "kkdfiertwekndkshfjasdha",
        "kkdfiertwekndkshfjhdsfada",
        "kkdfiertwekndkshfjhadsa",
        "kkdfiertwekndkshfjsddfha",
      ],
    },
  ],
};

export const cryptosSlice = createSlice({
  name: "cryptos",
  initialState,
  reducers: {
    addCrypto: (state, action) => {
      state.cryptos.push(action.payload);
    },
  },
});

export const { addCrypto } = cryptosSlice.actions;

export default cryptosSlice.reducer;
