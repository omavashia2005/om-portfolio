import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 w-full bg-black text-white flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 p-4 z-50">
      <Link href="#home" className="hover:underline" aria-label="Go to Home section">Home</Link>
      <Link href="#about" className="hover:underline" aria-label="Go to About section">About</Link>
      <Link href="#experience" className="hover:underline" aria-label="Go to Experience section">Experience</Link>
      <Link href="#projects" className="hover:underline" aria-label="Go to Projects section">Projects</Link>
      <Link href="#contact" className="hover:underline" aria-label="Go to Contact section">Contact</Link>
      <a
        href="https://github.com/omavashia2005/om-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View GitHub repository"
      >
        <Image
          src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
          width={20}
          height={20}
          alt="GitHub Repository"
        />
      </a>
    </nav>
  );
}
