import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CryptoCardComponent from "../components/CryptoCardComponent";
import { loadInitialData } from "../src/state/cryptoSlice";

export default function CryptoCard() {
  let cryptos = useSelector((state) => state.cryptos.currencies);
  const dispatch = useDispatch();
  console.log(`CryptoCard : ${JSON.stringify(cryptos)}`);

  useEffect(() => {
    const data = localStorage.getItem("currencies");
    dispatch(loadInitialData(JSON.parse(data)));
  }, []);

  useEffect(() => {
    localStorage.setItem("currencies", JSON.stringify(cryptos));
  });

  return (
    <>
      {cryptos.map(
        (crypto, key) =>
          crypto.address.length != 0 && <CryptoCardComponent crypto={crypto} />
      )}
    </>
  );
}
