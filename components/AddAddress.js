import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

export default function AddAddress() {
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
              <span>Solutions</span>
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
                    <form className="bg-gray-100 rounded px-8 pt-6 pb-8 mb-4">
                      <div className="mb-6">
                        <label
                          className="block text-gray-700 text-sm font-mono mb-2"
                          for="crpto-selector"
                        >
                          Crypto
                        </label>
                        <div class="relative">
                          <select
                            class="block appearance-none w-full bg-gray-200 border border-blue-400 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white"
                            id="crpto-selector"
                          >
                            <option>New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                              class="fill-current h-4 w-4"
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
                          for="public-address"
                        >
                          Public Address
                        </label>
                        <input
                          className="shadow appearance-none border border-blue-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-mono"
                          id="public-address"
                          type="text"
                          placeholder="Enter Public Address"
                        />
                      </div>

                      <div className="flex justify-end font-mono">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="button"
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
