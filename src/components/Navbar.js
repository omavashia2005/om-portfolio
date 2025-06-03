import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 w-full bg-black text-white flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 p-4 z-50">
      <Link href="#home" className="hover:underline">Home</Link>
      <Link href="#about" className="hover:underline">About</Link>
      <Link href="#experience" className="hover:underline">Experience</Link>
      <Link href="#projects" className="hover:underline">Projects</Link>
      <Link href="#contact" className="hover:underline">Contact</Link>
    </nav>
  );
}
