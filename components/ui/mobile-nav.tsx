import React, { Component } from 'react'
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



export class Mobilenav extends Component {
  render() {
    return (
      <div className="md:invisible mobilemenu">
          <Sheet >
            <SheetTrigger> 
              <Image
              src="/img/menu-icon.svg"
              width={16}
              height={16}
              alt="Picture of the author"
            />
          </SheetTrigger>
        
            <SheetContent>
              <SheetHeader>
               
                <SheetDescription>
                <ul className="text-sm text-black text-left mt-6">
                    <li className="mb-4 pb-1 border-b-[1px] border-[#d0d0d0]">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="mb-4 pb-1 border-b-[1px] border-[#d0d0d0]">
                      <Link href="/">News</Link>
                    </li>
                  <li className="mb-4 pb-1 border-b-[1px] border-[#d0d0d0]">
                    <Link href="/">Media Center</Link>
                  </li>
                  <li className="mb-4 pb-1 border-b-[1px] border-[#d0d0d0]">
                    <Link href="/">Schedule</Link>
                  </li>
                  <li className="mb-4 pb-1 border-b-[1px] border-[#d0d0d0]">
                    <Link href="/">Tickets</Link>
                  </li>
                  <li className="mb-4 pb-1 border-b-[1px] border-[#d0d0d0]">
                    <Link href="/">Contact us</Link>
                  </li>
                  
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
    )
  }
}

export default Mobilenav