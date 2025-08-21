import { 
  FaJsSquare, FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaLeaf, 
  FaPhp, FaLaravel 
} from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';

export default function SkillsSection() {
  const skills = [
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "React & TypeScript", icon: (
        <span className="flex gap-1">
          <FaReact className="text-cyan-400" />
          <SiTypescript className="text-blue-400" />
        </span>
      )
    },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
    { name: "HTML & CSS", icon: (
        <span className="flex gap-1">
          <FaHtml5 className="text-orange-500" />
          <FaCss3Alt className="text-blue-500" />
        </span>
      )
    },
    { name: "MongoDB", icon: <FaLeaf className="text-green-400" /> },
  ];

  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">What I Do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-800 shadow-md p-6 rounded-lg flex flex-col items-center justify-center hover:scale-105 transition"
          >
            <span className="text-4xl mb-2">{skill.icon}</span>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

