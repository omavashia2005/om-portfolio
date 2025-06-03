import Link from "next/link";
import Head from "next/head";
export default function Navbar(){
    return(
<nav className="sticky top-0 left-0 w-full bg-black text-white flex space-x-5 p-4 gap-50 z-50">
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
        </nav>
    )
}
