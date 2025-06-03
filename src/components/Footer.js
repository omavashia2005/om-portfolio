import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-4 bg-black-800 text-white text-center flex flex-wrap justify-center items-center gap-2">
      <span>© 2025 Om Avashia.</span>
      <span>Built with</span>
      <Image src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" width={20} height={20} alt="React" />
      <Image src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width={20} height={20} alt="Tailwind" />
      <Image src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" width={20} height={20} alt="Next" />
    </footer>
  );
}
