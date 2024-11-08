import Link from "next/link"
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

function Header() {
    return(
        <main className="flex justify-center">
            <header className="w-4/5 xl:w-3/5 flex justify-between">
            <div className="">
                <h1 className="text-4xl font-bold my-10">Positivus</h1>
            </div>

            <div className="lg:mr-10 xl:mr-0 2xl:mr-0 hidden md:block">
                <nav className="flex mt-10">
                    <ul className="flex gap-5 lg:gap-10 items-center mr-5">
                        <li className="hover:text-lime-400">
                            <Link href="#">About Us</Link>
                        </li>
                        <li className="hover:text-lime-400">
                            <Link href="#">Services</Link>
                        </li>
                        <li className="hover:text-lime-400">
                            <Link href="#">Contact Us</Link>
                        </li>
                    </ul>
                    <button className="border-solid border-2 border-black rounded-md py-4 px-6 bg-lime-400 text-base hover:bg-black hover:text-white font-medium">Request a quote</button>
                </nav>
            </div>
            <Sheet>
                <SheetTrigger className="md:hidden">
                  <Menu />
                </SheetTrigger>
                <SheetContent>
                  <nav className="mt-16">
                      <ul>
                          <li className="hover:text-lime-400 border-b-2 border-gray-200 p-2">
                              <Link href="#">About Us</Link>
                          </li>
                          <li className="hover:text-lime-400 border-b-2 border-gray-200 p-2">
                              <Link href="#">Services</Link>
                          </li>
                          <li className="hover:text-lime-400 border-b-2 border-gray-200 p-2">
                              <Link href="#">Pricing</Link>
                          </li>
                          <li className="hover:text-lime-400 border-b-2 border-gray-200 p-2">
                              <Link href="#">Contact Us</Link>
                          </li>
                      </ul>
                  </nav>
                </SheetContent>
                </Sheet>

            </header>
        </main>
    )
}

export default Header;