import Record from "./Record";

export default function CryptoCard({ crypto }) {
  return (
    <div className="bg-gray-400 mb-6" key={crypto.name}>
      <img
        className="w-12 h-12 mx-auto rounded-full -mt-6 border-4 border-gray-600 bg-gray-400"
        src={crypto.logo}
        alt={crypto.name}
      />

      <div className="pt-2">
        {crypto.address.map((addr) => (
          <Record address={addr} />
        ))}
      </div>
    </div>
  );
}
