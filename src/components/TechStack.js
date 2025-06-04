import Image from "next/image";

export default function TechStack({ techStack = [] }) {
  return (
    <div style={{ display: 'flex', gap: '100px', alignItems: 'center', marginTop: '1px' }}>
      {techStack.map((tech, index) => (
        <Image 
          key={index} 
          src={tech.logo} 
          alt={tech.name} 
          width={90} 
          height={90} 
          title={tech.name} 
          className="rounded hover:drop-shadow-[0_0_16px_#ffffff]"
        />
      ))}
    </div>
  );
}
