import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Box, Text, Image, Center    } from "@chakra-ui/react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


export default function Footer() {
    return (
        <div className="mx-auto mt-12 max-w-7xl bg-slate-500 w-f py-4">
    <footer className="px-4">
      <div className="flex flex-col md:flex-row md:items-center">
        
        <div className="mt-4 grow md:ml-12 md:mt-0">
          <p className="text-base font-normal text-white font-sans">
            © 2023 Gaurav Nagoshe
          </p>
        </div>
      </div>
    </footer>
  </div>
    );
}
