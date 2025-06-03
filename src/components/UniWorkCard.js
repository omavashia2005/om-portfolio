export default function ExperienceCard({ company, title, location, link }) {
    return (
      <div className="border p-4 rounded shadow">
        <h2 className="text-xl font-bold">{title}</h2>
        <h3 className="text-xl font-bold">{company}</h3>
        <p>{location}</p>
        <li>
        Developed a full-stack AI-driven contract generation and review system built on <strong> TipTap with React.js and Python (FastAPI, LiteLLM, Dify.AI) </strong>
        </li>
        <li>
        Reduced LLM response time from 16s to under 2s by implementing response token streaming through web sockets.
        </li>
        <a href={link} className="text-blue-500">ipauthor.com</a>
      </div>
    )
  }
  