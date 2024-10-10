import Link from "next/link"

function Header() {
    return(
        <main className="flex justify-between">
            <div>
                <h1 className="text-4xl font-bold mx-96 my-10">Positivus</h1>
            </div>

            <div>
                <nav className="flex gap-10 mt-10">
                    <ul className="flex gap-10 items-center">
                        <li className="hover:text-lime-400">
                            <Link href="#">About Us</Link>
                        </li>
                        <li className="hover:text-lime-400">
                            <Link href="#">Services</Link>
                        </li>
                        <li className="hover:text-lime-400">
                            <Link href="#">Pricing</Link>
                        </li>
                        <li className="hover:text-lime-400">
                            <Link href="#">Contact Us</Link>
                        </li>
                    </ul>
                    <button className="border-solid border-2 border-black rounded-md py-4 px-6 mr-96 bg-lime-400 text-base font-medium">Request a quote</button>
                </nav>
            </div>
        </main>
    )
}

export default Header;