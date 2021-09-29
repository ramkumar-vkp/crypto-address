import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadInitialData } from "../src/state/cryptoSlice";
import { deleteCrypto } from "../src/state/cryptoSlice";

export default function CryptoCard() {
  const [alert, setalert] = useState(false);
  let cryptos = useSelector((state) => state.cryptos.currencies);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = localStorage.getItem("currencies");
    dispatch(loadInitialData(JSON.parse(data)));
  }, []);

  useEffect(() => {
    localStorage.setItem("currencies", JSON.stringify(cryptos));
  });

  const onDeleteClick = (name, address) => {
    let payload = {
      name: name,
      address: address,
    };
    console.log(`Passing to action creator : ${JSON.stringify(payload)}`);
    dispatch(deleteCrypto(payload));
  };

  const onCopyClick = (addr) => {
    navigator.clipboard.writeText(addr);
    setalert(true);
    setTimeout(() => setalert(false), 3000);
  };

  return (
    <>
      {alert && (
        <div
          class="absolute top-4 left-1/2 text-sm px-2 py-1 text-gray-300 bg-yellow-700 rounded-lg"
          role="alert"
        >
          <p>Copied!</p>
        </div>
      )}

      {cryptos.map(
        (crypto, key) =>
          crypto.address.length != 0 && (
            <div className="bg-gray-400 mb-6" key={crypto.name}>
              <img
                className="w-12 h-12 mx-auto rounded-full -mt-6 border-4 border-gray-600 bg-gray-400"
                src={crypto.logo}
                alt={crypto.name}
              />

              <div className="pt-2">
                {crypto.address.map((addr) => (
                  <div
                    className="flex flex-row px-2 py-1 border-gray-700 border-b-2 "
                    key={addr}
                  >
                    <div className="has-tooltip truncate">
                      <span className="tooltip rounded shadow-lg p-1 bg-indigo-300 text-gray-700 -mt-8 ">
                        {addr}
                      </span>
                      {addr}
                    </div>

                    <div onClick={() => onCopyClick(addr)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 hover:text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                    </div>

                    <div onClick={() => onDeleteClick(crypto.name, addr)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 hover:text-red-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        key={addr}
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
      )}
    </>
  );
}
