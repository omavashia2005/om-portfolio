import Image from "next/image";

export default function ProjectCard({ title, description, link, techStack = [] }) {
  return (
    <div className="border border-black p-6 rounded-lg shadow-lg bg-black">
      {/* Clickable area with better semantics */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline text-white">
        <h3 className="text-2xl font-bold">{title}</h3>
        <Image src="https://www.vectorlogo.zone/logos/github/github-tile.svg" width={24} height={24} alt="GitHub Link" />
      </a>
    
      <p className="text-sm text-white-700 mt-2">{description}</p>

      {techStack.length > 0 && (
        <div className="flex gap-4 flex-wrap items-center mt-4">
          {techStack.map((tech, index) => (
            <Image
              key={index}
              src={tech.logo}
              alt={tech.name}
              width={50}
              height={50}
              title={tech.name}
              className="rounded"
            />
          ))}
        </div>
      )}
    </div>
  );
}
