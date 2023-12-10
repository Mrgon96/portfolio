/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Box, Text, Image, Center    } from "@chakra-ui/react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '#' },
  { name: 'Skills', href: '#' },
  // { name: 'Contact Me', href: '\contact-me' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="isolate">
      
      <div className="px-6 pt-6 lg:px-8 mb-5">
        <div>
          <nav className="flex h-9 pb-5 items-center justify-between border-b" aria-label="Global">
            
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-semibold text-gray-900 hover:text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-gray-600  px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-orange-500">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
