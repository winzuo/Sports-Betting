"use client"

import {useState, Fragment} from 'react'
import React from 'react'
import { parlayTypes } from '../constants'
import { SearchParlayTypeProps } from '../types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'

const SearchParlayType = ({parlayType, setParlayType} : SearchParlayTypeProps)  => {
    const [query, setQuery] = useState('');

    const filteredParlayTypes = query === "" ? parlayTypes : parlayTypes.filter((item) => (
        item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        ));
  
    return (
    <div className='search-parlay-type'>
        <Combobox value={parlayType} onChange={setParlayType}>
            <div className='relative w-full'>
                <Combobox.Button className="absolute top-[14px]">
                    <Image
                        src='/money-logo.png'
                        width={20}
                        height={20}
                        className='ml-4'
                        alt='money logo'
                    />
                </Combobox.Button>

                <Combobox.Input
                    className = "search-parlay-type__input"
                    placeholder = "Two Pick"
                    displayValue = {(parlayType : string) => parlayType}
                    onChange = {(e) => setQuery(e.target.value)}
                />

                <Transition
                    as={Fragment}
                    leave = "transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    <Combobox.Options
              className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
            >
              {filteredParlayTypes.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className='search-parlay-type__option'
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredParlayTypes.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-parlay-type__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchParlayType;
