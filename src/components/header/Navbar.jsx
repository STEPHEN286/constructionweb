import {  Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import {
  Bars3Icon,
  MagnifyingGlassCircleIcon,
  ShareIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import CostCalc from './CostCalc';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Services', href: '#', current: false },
  { name: 'Estate', href: '#', current: false },
  { name: 'Project', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];

const menus = [
  { icon: <ShoppingBagIcon /> },
  { icon: <ShareIcon /> },
  { icon: <MagnifyingGlassCircleIcon /> },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 md:overflow-hidden lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className=" inset-y-0 left-0 flex items-center sm:hidden md:block lg:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 h-full items-center justify-between">
            <div className="flex shrink-0 items-center">
              <h1 className="font-bold">Ted-Nomex</h1>
            </div>
            <div className=" md:flex  items-center h-full">
              <div className="hidden lg:flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'text-amber-500'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="flex w-fit h-full items-center justify-center">
                {menus.map((item, index) => (
                  <a
                    key={index}
                    className="h-full text-center w-[50px] flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    {React.cloneElement(item.icon, { className: 'h-6 w-6' })}
                  </a>
                ))}
              </div>

            <div className='hidden md:block h-full'> <CostCalc /></div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden md:block ">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <p className='md:hidden'><CostCalc /></p>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
