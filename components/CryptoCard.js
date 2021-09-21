import { useSelector, useDispatch } from "react-redux";
import { addCrypto } from "../src/state/cryptoSlice";
import Record from "./Record";

export default function CryptoCard() {
  let cryptos = useSelector((state) => state.cryptos.currencies);
  const dispatch = useDispatch();
  console.log(`CryptoCard : ${JSON.stringify(cryptos)}`);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {cryptos.map((crypto, key) => (
        <div className="bg-gray-400 mb-6" key={key}>
          <img
            className="w-12 h-12 mx-auto rounded-full -mt-6 border-4 border-gray-600 bg-gray-400"
            src={crypto.url}
            alt={crypto.name}
          />

          <div className="pt-2">
            {crypto.addresses.map((address, key) => (
              <Record address={address} key={key} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
