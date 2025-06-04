import Image from "next/image";

export default function ExperienceCard({ company, title, location, link, techStack = [] }) {
  return (
    <div className="border border-black p-6 rounded-lg shadow-lg bg-black-800">
      <h2 className="text-2xl font-bold">{title} @ {company}</h2>
      {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            ({new URL(link).hostname})
          </a>
        )}
      <div className="flex flex-wrap gap-2 items-center text-lg font-semibold">
        <h3>May 2025 - Present</h3>
      </div>
      <p className="text-sm text-gray-600 font-medium">{location}</p>

      <ul className="list-disc pl-6 space-y-2 mt-3">
        <li>
          Developed a full-stack AI-driven contract generation and review system built with{" "}
          <strong className="bg-white text-black font-bold">
            Tiptap, React.js and Python (FastAPI, LiteLLM, Dify.AI)
          </strong>
        </li>
        <li>
          Reduced LLM response time{" "}
          <strong className="bg-white text-black font-bold">
            from 16s to under 2s
          </strong>{" "}
          by implementing response token streaming through web sockets
        </li>
      </ul>

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
              className="rounded hover:drop-shadow-[0_0_16px_#ffffff]"
            />
          ))}
        </div>
      )}
    </div>
  );
}
