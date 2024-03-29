import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";

export default function SelectDropdown({
  options,
  value,
  handleChange,
  dropdownWidth,
}) {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className={`mb-2 w-1/2 md:w-1/3`}>
      <Listbox
        value={value}
        onChange={(value) => {
          setSelected(value);
          handleChange(value);
        }}
      >
        <div className="mt-1">
          <Listbox.Button className="w-full flex justify-between cursor-default rounded-lg text-black bg-white py-3 pl-3 pr-2 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-sm sm:text-md">
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none flex items-center">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-1/2 md:w-1/3 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-indigo-100 text-indigo-900" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {option}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
