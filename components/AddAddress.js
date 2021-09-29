import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCrypto } from "../src/state/cryptoSlice";

export default function AddAddress() {
  const dispatch = useDispatch();
  let cryptos = useSelector((state) => state.cryptos.currencies);

  const submitForm = (event) => {
    event.preventDefault();
    if (!event.target.crptoSelector.value) {
      alert("Please choose the crypto currency");
    } else if (!event.target.publicAddress.value) {
      alert("Please enter the public key address");
    } else if (event.target.publicAddress.value.length < 10) {
      alert("Please enter the valid public key address");
    } else {
      let payload = {
        name: event.target.crptoSelector.value,
        address: event.target.publicAddress.value,
      };
      console.log(`Passing to action creator : ${JSON.stringify(payload)}`);
      dispatch(addCrypto(payload));
    }
  };

  return (
    <div className="relative w-full px-4 top-6">
      <Popover className="">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                text-white group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>Add Public Key</span>
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute top-6 px-4 mt-3 transform -translate-x-1/2 bottom-2 w-80">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative">
                    <form
                      className="bg-gray-100 rounded px-8 pt-6 pb-8 mb-4"
                      onSubmit={submitForm}
                    >
                      <div className="mb-6">
                        <label
                          className="block text-gray-700 text-sm font-mono mb-2"
                          htmlFor="crptoSelector"
                        >
                          Crypto
                        </label>
                        <div className="relative">
                          <select
                            className="block appearance-none w-full bg-gray-200 border border-blue-400 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white h-1/2"
                            id="crptoSelector"
                            required="required"
                          >
                            {cryptos.map((curr, key) => (
                              <option
                                key={curr.name}
                                className="font-thin text-sm"
                              >
                                {curr.name}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-mono mb-2"
                          htmlFor="publicAddress"
                        >
                          Public Address
                        </label>
                        <input
                          className="shadow appearance-none border border-blue-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono"
                          id="publicAddress"
                          type="text"
                          placeholder="Enter Public Address"
                        />
                      </div>

                      <div className="flex justify-end font-mono">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="submit"
                          required="required"
                        >
                          Add Address
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
