import { useDispatch, useSelector } from "react-redux";
import CryptoCardComponent from "../components/CryptoCardComponent";

export default function CryptoCard() {
  let cryptos = useSelector((state) => state.cryptos.currencies);
  const dispatch = useDispatch();
  console.log(`CryptoCard : ${JSON.stringify(cryptos)}`);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {cryptos.map(
        (crypto, key) =>
          crypto.address.length != 0 && (
            <CryptoCardComponent crypto={crypto} keyname={key} />
          )
      )}
    </div>
  );
}
